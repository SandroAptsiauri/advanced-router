import React from "react";
import { Button, Grid2, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AuthButtons: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Grid2 container spacing={2}>
      <Grid2>
        <Button
          onClick={() => navigate("/login")}
          variant="contained"
          style={{ background: "white", color: "#1976d2" }}
        >
          <Typography>Login</Typography>
        </Button>
      </Grid2>

      <Grid2>
        <Button
          onClick={() => navigate("/register")}
          variant="contained"
          style={{ background: "white", color: "#1976d2" }}
        >
          <Typography>Register</Typography>
        </Button>
      </Grid2>
    </Grid2>
  );
};

export default AuthButtons;
