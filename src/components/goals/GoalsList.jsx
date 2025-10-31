import GoalItem from './GoalItem';

export default function GoalsList({ items, onToggle, onDelete}) {
    if (!items.length) {
        return <p className="small">No goals yet. Add one!</p>;
    }
    return (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8}}>
            {items.map(g => (
                <GoalItem key={g.id} goal={g} onToggle={onToggle} onDelete={onDelete} />
            ))}
        </ul>
    );
}