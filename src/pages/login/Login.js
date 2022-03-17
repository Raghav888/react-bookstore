import { Navbar } from "../../components/shared/navbar/Navbar";
import React from "react";
import { LoginForm } from "../../components/loginform/Loginform";
import { Footer } from "../../components/shared/footer/Footer";

export function Login() {
  return (
    <div>
      <Navbar />
      <LoginForm />
      <Footer />
    </div>
  );
}
