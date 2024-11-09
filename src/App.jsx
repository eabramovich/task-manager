import { useState } from "react"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import LeftSidebar from "./components/LeftSidebar/LeftSidebar"
import TaskForm from "./components/TaskForm/TaskForm"
import { task } from "./utils/constants"
import "./App.scss"

function App() {

  return (
    <>
      <Header />
      <Main>
        <LeftSidebar />
        <TaskForm task={task}/>
      </Main>

    </>
  )
}

export default App
