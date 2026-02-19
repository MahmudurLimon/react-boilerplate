import { useState,useEffect } from "react";

function User({name,age}){
    const [count, setCount] = useState(age);
    useEffect(()=> {
        console.log("Count changed: ", count);
    },[count])
    
    return(
        <div>
            <h2>Name: {name}</h2>
            <p>Age: {count}</p>

            <button onClick={()=> setCount(count+1)}>Increase</button>
            <button onClick={()=> setCount(count-1)}>Decrease</button>
        </div>
    );
};

export default User;