import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useOutlet } from "react-router-dom";

function AppLayout() {
  const outlet = useOutlet();
  return (
    <div className="d-flex flex-column" style={{height: '100vh'}}>
      <Header />
      {outlet}
      <Footer />
    </div>
  );
}

export default AppLayout;
