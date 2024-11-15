import React, { FormEvent, useState } from "react";
import { TUser } from "../../types/user.type";
import { Button, TextField, Typography } from "@mui/material";
type AuthFormProps = {
  type: string;
  onSubmit: (formData: TUser) => void;
};
const AuthForm: React.FC<AuthFormProps> = ({ type, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ email, password });
    setEmail("");
    setPassword("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: "500px",
        margin: "50px auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography>{type === "login" ? "Login" : "Register"}</Typography>
      <TextField
        label="email"
        type="email"
        fullWidth
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        variant="outlined"
      />
      <TextField
        label="password"
        type="password"
        fullWidth
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        variant="outlined"
        style={{ marginTop: "10px" }}
      />
      <Button type="submit">{type === "login" ? "Login" : "Register"}</Button>
    </form>
  );
};

export default AuthForm;
