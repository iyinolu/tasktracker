import React, {useContext} from "react";
import { storageService } from "../services/storageService";
import { authCtx } from ".";
import "../App.scss";

const TaskView: React.FC<{}> = () => {
  const context = useContext(authCtx);
  const { setAuthenticated } = context;

  const logout = () => {
    setAuthenticated(null)
    storageService.removeTokens()
  }

  return (
    <>
    <div>
      <button className="temp-logout-btn" onClick={logout} >Log Out</button>
      <div className="App">
        <div className="App-logo">
          <p>🧪</p>
        </div>
      </div>
      </div>
    </>
  );
};

export default TaskView;
