import React from "react";
import "./signIn.css";

const signIn = () => {
  return (
    <div className="signIn">
      <form>
        <div className="signUp">
          <div className="formItem">
            <label className="input">Email:</label>
            <input type="email" name="email" />
          </div>
          <br />
          <div className="formItem">
            <label className="input">PassWord:</label>
            <input  type="password" name="password" />
          </div>
          <input type="submit" value="Update" />
        </div>
      </form>
    </div>
  );
};
export default signIn;
