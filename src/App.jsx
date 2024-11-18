import { useState, useEffect } from "react"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import LeftSidebar from "./components/LeftSidebar/LeftSidebar"
import TaskForm from "./components/TaskForm/TaskForm"
import Popup from "./components/Popup/Popup"
import { task } from "./utils/constants"
import "./App.scss"

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSubtaskPopupOpen, setIsSubtaskPopupOpen] = useState(false);
 

  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth <= 991) {
        setIsSidebarOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  const toggleSidebar = () => {
    if (window.innerWidth <= 991) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(!isSidebarOpen);
    }
  };

  const handleCreateSubTask = () => {
    setIsSubtaskPopupOpen(true);
  }

  const handleCloseSubtask = () => {
    setIsSubtaskPopupOpen(false);
  }

  return (
    <>
      <Header />
      <Main>
        <LeftSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
        <div className={`content-wrapper ${isSidebarOpen ? "content-wrapper_sidebar_open" : "content-wrapper_sidebar_closed" }`}>
          <TaskForm task={task} onCreateSubtask={handleCreateSubTask} />
        </div>
      </Main>
      <Popup isOpen={isSubtaskPopupOpen} onClose={handleCloseSubtask}>
        <TaskForm task={task} onCloseSubtask={handleCloseSubtask} isSubtask={true}/>
        {/* <div className="task-form">
        <div className="task-form__container">
          <div className="task-form__header">
          </div>
        </div>
        </div> */}
      </Popup>


    </>
  )
}

export default App
