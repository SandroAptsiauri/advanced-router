import React from "react";
import AuthForm from "../components/forms/AuthForm";
import { TUser } from "../types/user.type";

const Login: React.FC = () => {
  const onSubmit = (formData: TUser) => {
    console.log(formData);
  };
  return <AuthForm onSubmit={onSubmit} type="login" />;
};

export default Login;
