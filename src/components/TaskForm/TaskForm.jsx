import React from "react";
import Button from "../UI/Button/Button";
import FormInput from "../UI/FormInput/FormInput";
import "./TaskForm.scss";

const TaskForm = ({ task }) => {
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
        <div className="task-form__content">
          <h1 className="task-form__title">{task.id} {task.title}</h1>
          <div className="task-form__fields-container">
            <div className="task-form__field-wrapper">
              <FormInput label="Тема" required={true} value={task.title} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskForm