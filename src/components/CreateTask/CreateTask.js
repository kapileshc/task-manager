import React from "react";
import { useState } from "react/cjs/react.development";



function CreateTask({ addTask }) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTask(value);
        setValue("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                placeholder="Add a new task"
                onChange={e => setValue(e.target.value)}
            />
            <div className="justify-content-center">
            <button type="submit" className='btn btn-secondary sub_btn'>Add Task</button>
            </div>
        </form>
    );
}

export default CreateTask;