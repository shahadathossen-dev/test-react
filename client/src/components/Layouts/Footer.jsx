import React from "react";
import { ToastContainer } from "react-toastify";

function Footer() {
  return (
    <>
      <ToastContainer />
      <div className="p-3 text-center bg-light">
        Developed by &nbsp;
        <a href="https://shahadathossen.dev">Shahadat Hossen</a>&nbsp;
        |&nbsp;&copy; All rights reserved.
      </div>
    </>
  );
}

export default Footer;
