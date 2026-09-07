"use client";
import { useState } from "react";

export interface CounterProps {
    description: string,
    defaultCount: number,
}

export default function Counter({ description, defaultCount}: CounterProps){
    const [count, setCount] = useState(defaultCount);
    const [incrementor, setIncrementor] = useState(1);

    return(
        <div>
            <h2>
                DESC: {description} - DC: {defaultCount}
            </h2>
            <label>
                Incrementor:
                <input value={incrementor} onChange={(event) => {
                    setIncrementor(parseInt(event.target.value) || 0)
                }} type="number" />
            </label>
            
            <br/>

            <button aria-label="subtract from counter" name="-" onClick={() => setCount(count - incrementor)}>-</button>
            <p>Current Count: {count} </p>
            <button aria-label="add to counter" name="+" onClick={() => setCount(count + incrementor)}>+</button>
        </div>
    )
}