import { useState } from "react"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import LeftSidebar from "./components/LeftSidebar/LeftSidebar"
import "./App.scss"

function App() {

  return (
    <>
      <Header />
      <Main>
        <LeftSidebar />
      </Main>

    </>
  )
}

export default App
