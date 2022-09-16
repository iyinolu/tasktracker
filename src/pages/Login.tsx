import React, { useState, useContext } from "react";
import PrimaryButton from "../components/Buttons";
import CustomTextField from "../components/Textfield";
import { RotatingLines } from "react-loader-spinner";
import { loginService } from "../services/authService";
import { storageService } from "../services/storageService";
import { authCtx } from ".";
import "../styles/login.scss";

const LoginPage: React.FC<{}> = () => {
  const context = useContext(authCtx);
  const { setAuthenticated } = context;
  const [loginPayload, setLoginPayload] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const onChangeInput = (name: string, value: any) => {
    setLoginPayload((_state) => {
      return { ..._state, [name]: value };
    });
  };

  const login = () => {
    setLoading(true);
    loginService(loginPayload)
      .then((res) => {
        storageService.setTokens(res.data);
        setAuthenticated(res.data)
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const disableSubmit = () => {
    let inputFieldBoolean =
      !Boolean(loginPayload["username"]) || !Boolean(loginPayload["password"]);
    return inputFieldBoolean;
  };

  return (
    <div className="container-userlogin">
      <div className="formcard-userlogin">
        <form id="login-form">
          <CustomTextField
            label="Username"
            fieldInfo=""
            disabled={false}
            placeholder="Enter Username"
            type="text"
            hasLabel
            setChange={onChangeInput}
            name="username"
            value={loginPayload["username"]}
          />
          <CustomTextField
            label="Password"
            fieldInfo=""
            disabled={false}
            placeholder="Enter Password"
            type="password"
            hasLabel
            setChange={onChangeInput}
            name="password"
            value={loginPayload["password"]}
          />
          <PrimaryButton
            onClick={() => {
              login();
            }}
            type="button"
            disabled={disableSubmit()}
          >
            <div className="submit-btn-content">
              Submit
              <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="20"
                visible={loading}
              />
            </div>
          </PrimaryButton>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
