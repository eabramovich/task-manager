import { useState, useEffect } from "react"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import LeftSidebar from "./components/LeftSidebar/LeftSidebar"
import TaskForm from "./components/TaskForm/TaskForm"
import { task } from "./utils/constants"
import "./App.scss"

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth);
      if (window.innerWidth <= 991) {
        setIsSidebarOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);

    handleResize();
  }, [])

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Header />
      <Main>
        <LeftSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
        <div className={`content-wrapper ${isSidebarOpen ? "content-wrapper_sidebar_open" : "content-wrapper_sidebar_closed" }`}>
          <TaskForm task={task}/>
        </div>
        
      </Main>

    </>
  )
}

export default App
