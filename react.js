import { TextField, Button } from "@mui/material";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-frame-2">
        <div className="login-frame">
          <div className="logo-frame">
            <img
              className="ppd-logo-blue-1"
              alt=""
              src="../ppd-logo-blue-1@2x.png"
            />
          </div>
          <TextField
            className="username-frame"
            color="primary"
            variant="standard"
            defaultValue="Input"
            type="text"
            label="Label"
            size="medium"
            margin="none"
          />
          <TextField
            className="username-frame"
            color="primary"
            variant="standard"
            defaultValue="Input"
            type="text"
            label="Label"
            size="medium"
            margin="none"
          />
          <Button sx={{ width: 176 }} variant="contained" color="primary">
            Button
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
