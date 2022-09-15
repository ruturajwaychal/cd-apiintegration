import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

const Integration = () => {
  let history = useHistory();
  const backtologin = () => {
    history.push("/home");
  };

  const logout = () => {
    history.push("/");
  };

  return (
    <>
      <div>integration Page</div>

      <Button
        variant="contained"
        style={{ marginRight: 10 }}
        color="primary"
        onClick={backtologin}
      >
        Back
      </Button>

      <Button
        variant="contained"
        style={{ marginRight: 10 }}
        color="primary"
        onClick={logout}
      >
        Logout
      </Button>

      <a
        href="https://accounts.zoho.com/oauth/v2/auth?scope=ZohoCRM.modules.ALL,ZohoCRM.settings.fields.READ&client_id=1000.958XLMCP4912UVA77WSTQY1APDDF7Q&response_type=code&access_type=offline&redirect_uri=http://localhost:3000/integration/zoho"
        target="_blank"
        alt=""
        className="text-white"
        rel="noreferrer"
      >
        <Button variant="contained" style={{ marginRight: 10 }} color="primary">
          Zoho CRM
        </Button>
      </a>

      <a
        href="https://auth.monday.com/oauth2/authorize?client_id=af21bce633d52d779d03f9a7ca39e346&redirect_uri=http://localhost:3000/integration/monday"
        target="_blank"
        alt=""
        className="text-white"
        rel="noreferrer"
      >
        <Button variant="contained" style={{ marginRight: 10 }} color="primary">
          Monday
        </Button>
      </a>
    </>
  );
};

export default Integration;

//&oauth_payload_token=eyJhbGciOiJIUzI1NiJ9.eyJjbGllbnRfaWQiOiJhZjIxYmNlNjMzZDUyZDc3OWQwM2Y5YTdjYTM5ZTM0NiIsIm9hdXRoX3ZlcnNpb24iOjJ9.1Zn4_WDG1WmkUPKlssISaG6iiwDYVPnBmx6OYPqV00o
