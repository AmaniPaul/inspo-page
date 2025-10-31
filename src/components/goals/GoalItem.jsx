export default function GoalItem({ goal, onToggle, onDelete}) {
    return (
        <li className="row" style={{ justifyContent: 'space-between'}}>
            <label className="row" style={{gap:8, flex:1}}>
                <input 
                    type="checkbox"
                    className="checkbox"
                    checked={goal.done}
                    onChange={() => onToggle(goal.id)}
                    aria-label={'Toggle goal ${goal.text}'}
                />
                <span className={goal.done ? 'line-through' : ''}>{goal.text}</span>
            </label>
            <button className="del" onClick={() => onDelete(goal.id)} aria-label={'Delete goal ${goal.text}'}>✕</button>
        </li>
    );
}