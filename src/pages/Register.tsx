import React from "react";
import { TUser } from "../types/user.type";
import AuthForm from "../components/forms/AuthForm";

const Register: React.FC = () => {
  const onSubmit = (formData: TUser) => {
    console.log(formData);
  };
  return <AuthForm onSubmit={onSubmit} type="register" />;
};

export default Register;
