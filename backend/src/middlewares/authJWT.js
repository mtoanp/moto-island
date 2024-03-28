const jwt = require("jsonwebtoken");
const jwtKey = process.env.JWT_KEY;
const Errors = require("./Errors");

function auth(req, res, next) {
  try {
    // Access the JWT
    const jwtToken = req.headers.authorization.split(" ")[1];
    console.log(jwtToken);

    if (!jwtToken) {
      const msg = `Vous n'avez pas fourni de jeton d'authentification.`;
      return res.status(401).json({ msg });
    }

    // verify ...
    jwt.verify(jwtToken, jwtKey, (error, decoded) => {
      if (error) {
        const msg = `L'utilisateur n'est pas autorisé à accèder à cette ressource.`;
        return res.status(401).json({ msg, data: error });
      }

      // Retrive infos from the jwt.payload
      // console.log(decoded);
      req.userAuth = decoded;
      next();
    });
  } catch (error) {
    res.clearCookie("jwtToken");
  }
}

function isAdmin(req, res, next) {
  const userAuth = req.userAuth;

  if (userAuth.roles && userAuth.roles.includes("admin")) {
    // User has the 'admin' role
    next();
  } else {
    console.log("Forbidden: Insufficient privileges");
    return res.status(403).json({ msg: "Forbidden: Insufficient privileges" });
  }
}

function isRightUser(req, res, next) {
  console.log("authController: isRightUserCheck");
  // parseInt(req.params.id) if id is INT auto increment
  const userAuth = req.userAuth;

  if (req.params.id) userId = req.params.id; // parseInt(req.params.id)
  else if (req.body.user) userId = req.body.user.id;
  else if (req.body.order) userId = req.body.order.userId;

  // console.log(userAuth.id, ' --- userAuth')
  // console.log(userId, ' --- user')
  if (userId == userAuth.id) {
    console.log("-- passed");
    next();
  } else {
    throw new Errors(403, "Forbidden: you are not the one !");
  }
}

function isRightUserOrAdmin(req, res, next) {
  const user = req.userAuth;

  if (
    (user.roles && user.roles.includes("admin")) ||
    (req.params.id && req.params.id === user.id) ||
    (req.body.user && req.body.user.id === user.id)
  ) {
    next();
  } else {
    throw new Errors(403, "Forbidden: you are not the one !");
  }
}

function isNotLogIn(req, res, next) {
  console.log("auth: isNotLogInCheck");
  try {
    // Access the JWT token from the request cookies
    const jwtToken = req.cookies.jwtToken;
    // console.log(jwtToken)
    if (jwtToken || jwtToken != undefined) {
      console.log("token is present");
      throw new Errors(401, "Forbidden: You are already Loged in");
    } else {
      console.log("passed");
      next();
    }
  } catch (error) {
    throw error;
  }
}

module.exports = {
  auth,
  isAdmin,
  isRightUser,
  isRightUserOrAdmin,
  isNotLogIn,
};

// function authJwt(req, res, next) {
//   const authorizationHeader = req.headers.authorization

//   if(!authorizationHeader) {
//     const message = `Vous n'avez pas fourni de jeton d'authentification. Ajoutez-en un dans l'en-tête de la requête.`
//     return res.status(401).json({ message })
//   }

//   const token = authorizationHeader.split(' ')[1]
//   //   console.log(token)
//   jwt.verify(token, jwtKey, (error, decoded) => {
//     if(error) {
//       const message = `L'utilisateur n'est pas autorisé à accèder à cette ressource.`
//       return res.status(401).json({ message, data: error })
//     }

//     // Retrive infos from the jwt.payload
//     console.log(decoded)
//     req.userAuth = decoded
//     next()
//   })
// }
