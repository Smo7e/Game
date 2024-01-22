import "./TaskSelection.css";

const TaskSelection: React.FC = () => {
    return (
        <div className="taskselection-Container">
            <div className="taskselection-timer">00 : 00</div>
            <div className="taskselection-question">Вопросы?</div>
            <div className="taskselection-answer">Ответы</div>
            <div className="taskselection-choice1">Ответ</div>
            <div className="taskselection-choice2">Ответ</div>
            <div className="taskselection-choice3">Ответ</div>
            <div className="taskselection-choice4">Ответ</div>
        </div>
    );
};
export default TaskSelection;
