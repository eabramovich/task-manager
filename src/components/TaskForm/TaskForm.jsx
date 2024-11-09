import React from "react";
import Button from "../UI/Button/Button";
import "./TaskForm.scss";

const TaskForm = () => {
  return (
    <div className="task-form">
      <div className="task-form__container">
        <div className="task-form__header">
          <div className="task-form__header-left-part">
            <p className="task-form__subtitle">Подзадача</p>
            <Button>Создать</Button>
          </div>
          <div className="task-form__header-right-part">
            <Button color="blue">Сохранить</Button>
            <Button>Сохранить и выйти</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskForm