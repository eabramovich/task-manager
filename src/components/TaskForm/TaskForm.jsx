import React from "react";
import Button from "../UI/Button/Button";
import FormField from "../UI/FormField/FormField.jsx";
import Input from "../UI/Input/Input.jsx";
import FormInput from "../UI/FormInput/FormInput";
import IconButton from "../UI/IconButton/IconButton";
import SelectField from "../UI/SelectField/SelectField.jsx";
import SearchField from "../UI/SearchField/SearchField.jsx";
import DateInput from "../UI/DateInput/DateInput.jsx";
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
              <FormField label="Тема" required={true}>
                <Input required={true} value={task.title} />
              </FormField>
            </div>
            <div className="task-form__field-wrapper">
              <FormField label="Статус">
                <Input required={true} value={task.status} />
              </FormField>
            </div>
            <div className="task-form__field-wrapper">
              <FormField label="Описание">
                <Input required={true} value={task.description} />
              </FormField>
            </div>
            <div className="task-form__field-wrapper">
              <FormField label="Продукт">
                <SearchField value={task.product}/>
              </FormField>
            </div>
            <div className="task-form__field-wrapper">
              <FormField label="Рабочие заметки">
                <Input required={true} value={task.notes} />
              </FormField>
            </div>
            <div className="task-form__field-wrapper">
              <FormField label="Приоритет">
                <Input required={true} value={task.priority} />
              </FormField>
            </div>
            <div className="task-form__field-wrapper">
              <FormField label="Ответсвенный">
                <SelectField allowMultiple={false} options={task.responsible} />
              </FormField>
            </div>
            <div className="task-form__field-wrapper">
              <FormField label="Группа">
                <SelectField allowMultiple={false} options={task.group} />
              </FormField>
            </div>
            <div className="task-form__field-wrapper task-form__field-wrapper_full">
              <FormField label="Комментарии">
                <Input value={task.comments} />
              </FormField>
            </div>
            <div className="task-form__field-wrapper task-form__field-wrapper_full">
              <FormField label="Согласующие">
                <SelectField options={task.coordinating} />
              </FormField>
            </div>
            <div className="task-form__field-wrapper">
              <FormField label="Когда открыто">
                <DateInput/>
              </FormField>
            </div>
            <div className="task-form__field-wrapper">
              <FormField label="Когда создано">
                <Input type="date" />
              </FormField>
            </div>
            <div className="task-form__field-wrapper">
              <FormField label="Кем открыто">
                <SelectField allowMultiple={false} options={task.openedBy} />
              </FormField>
            </div>
            <div className="task-form__field-wrapper">
              <FormField label="Кем создано">
                <SelectField allowMultiple={false} options={task.createdBy} />
              </FormField>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskForm