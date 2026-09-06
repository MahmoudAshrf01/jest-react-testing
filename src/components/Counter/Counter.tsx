"use client";
import { useState } from "react";

export interface CounterProps {
    description: string,
    defaultCount: number,
}

export default function Counter({ description, defaultCount}: CounterProps){
    const [count, setCount] = useState(defaultCount);

    return(
        <div>
            <h2>
                DESC: {description} - DC: {defaultCount}
            </h2>

            <button name="-" onClick={() => setCount(count - 1)}>-</button>
            <p>Current Count: {count} </p>
            <button name="+" onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}