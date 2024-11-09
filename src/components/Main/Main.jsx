import React from "react";
import "./Main.scss";


const Main = ({ children }) => {
  return (
    <main className="content">
      {children}
    </main>
  )
}

export default Main;