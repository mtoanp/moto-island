// Import
import { createContext, useContext, useState } from "react";

// Create context
const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null); //

  const authLogIn = (user) => {
    setCurrentUser(user);
  };

  const authLogOut = () => {
    setCurrentUser(null);
  };

  // Directly define isAdmin as a boolean variable
  const isAdmin =
    currentUser && currentUser.roles && currentUser.roles.includes("admin");

  const isVerified = currentUser && currentUser.isVerified;

  return (
    <AuthContext.Provider
      value={{ currentUser, authLogIn, authLogOut, isAdmin, isVerified }}>
      {children}
    </AuthContext.Provider>
  );
};

// Export
export { AuthProvider, useAuth };
