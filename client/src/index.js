import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { UsersProvider } from "./components/UsersContext";
import { CurrentUserProvider } from "./components/CurrentUserContext";
import { Auth0Provider } from "@auth0/auth0-react";
import Auth0ProviderWithHistory from "./components/auth0/Auth0ProviderWithHistory";
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

console.log(clientId, domain);

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={"http://localhost:3000/"}
  >
    <CurrentUserProvider>
      <UsersProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </UsersProvider>
    </CurrentUserProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
