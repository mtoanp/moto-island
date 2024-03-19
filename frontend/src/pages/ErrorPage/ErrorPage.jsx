import { useRouteError } from "react-router-dom";
import "./ErrorPage.scss";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <div id="error-page">
      <h1 className="text-xl text-red-600">Oops!</h1>
      <p className="text-lg">Sorry, an unexpected error has occurred.</p>
      <p className="text-red-600">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
