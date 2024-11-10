import React from "react";
import Button from "../UI/Button/Button";
import FormInput from "../UI/FormInput/FormInput";
import IconButton from "../UI/IconButton/IconButton";
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
            <div className="task-form__field-wrapper">
              <FormInput label="Статус" required={true} value={task.status} />
            </div>
            <div className="task-form__field-wrapper">
              <FormInput label="Описание" required={true} value={task.description} />
            </div>
            <div className="task-form__field-wrapper">
              <div className="task-form__input-wrapper">
              <FormInput label="Продукт" required={true} value={task.product} />
              </div>
              <div className="task-form__icon-button-wrapper">
                <IconButton icon="add" />
              </div>
            </div>
            <div className="task-form__field-wrapper">
              <FormInput label="Рабочие заметки" required={true} value={task.notes} />
            </div>
            <div className="task-form__field-wrapper">
              <FormInput label="Приоритет" required={true} value={task.priority} />
            </div>
            <div className="task-form__field-wrapper">
              <div className="task-form__input-wrapper">
                <FormInput label="Ответственный" required={true} />
              </div>
              <div className="task-form__icon-button-wrapper">
                <IconButton icon="add" />
              </div>
              <div className="task-form__icon-button-wrapper">
                <IconButton icon="search" />
              </div>
            </div>
            <div className="task-form__field-wrapper">
              <div className="task-form__input-wrapper">
                <FormInput label="Группа" required={true} />
              </div>
              <div className="task-form__icon-button-wrapper">
                <IconButton icon="add" />
              </div>
              <div className="task-form__icon-button-wrapper">
                <IconButton icon="search" />
              </div>
            </div>
            <div className="task-form__field-wrapper task-form__field-wrapper_full">
              <FormInput label="Комментарии" required={true} value={task.comments} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskForm