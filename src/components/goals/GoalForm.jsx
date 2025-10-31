import {useState} from 'react';

export default function GoalForm({onAdd}) {
    const[text, setText] = useState('');

    function submit(e) {
        e.preventDefault();
        const t = text.trim();
        if (!t) {
            return;
        }
        onAdd(t);
        setText('');

        return (
            <form onSubmit={submit} className="row" style={{gap: 8, marginBottom: 12}}>
                <input
                    value={text}
                    onChange={e=>setText(e.target.value)}
                    placeholder="Write a goal..."
                    aria-label="Goal text"
                    style={{flex:1}}
                />
                <button type="submit">Add</button>
            </form>
        )
    };
}