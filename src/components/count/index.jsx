import { useState } from 'react'
export default function CountComponent(){
    const [count_1, setCount] = useState(0)
    
    return(
        <div className = "card-section">
            <br></br><h3>Keep on counting!!!</h3>
            <button onClick={() => setCount((count_1) => count_1 + 1)}>
            count: {count_1} 
            </button>
        </div>
    )
}