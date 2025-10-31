import GoalForm from './GoalForm';
import GoalsList from './GoalsList';

export default function GoalsPanel({ goals, onAdd, onToggle, onDelete }) {
    return (
        <section className="card full">
            <h3 style={{ marginTop: 0}}>Goals</h3>
            <GoalForm onAdd={onAdd} />
            <GoalsList items={goals} onToggle={onToggle} onDelete={onDelete} />
        </section>
    );
}