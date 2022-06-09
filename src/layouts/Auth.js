import React from "react"

// components

import AuthNavbar from "../components/Navbars/AuthNavbar";
import FooterSmall from "../components/Footers/FooterSmall.js";

// views

import LoginPage from "../pages/auth/LoginPage";
// import Register from "views/auth/Register.js";

export default function Auth() {
  return (
    <div>
      <AuthNavbar />

      <section className="relative w-full h-full py-40 min-h-screen">

        <div
          className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
          style={{
            backgroundImage: "url(" + require("../assets/img/register_bg_2.png") + ")",
          }}
        ></div>
        <LoginPage />
        <FooterSmall absolute />
      </section>
    </div>
  );
}
