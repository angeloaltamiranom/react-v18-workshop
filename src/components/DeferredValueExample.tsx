import { useState } from "react";

export const DeferredValueExample = () => {
    const [input, setInput] =  useState('');

    const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setInput(ev.target.value);
    }

    return (
    <div>
        <input
            type="text"
            value={input}
            onChange={handleChange}
            placeholder="Search users..."
        />
    </div>
    );
}