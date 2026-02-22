import { useState,useEffect } from "react";
import User from "./User.jsx";
import UserAPI from "./UserAPI.jsx";
import UserAPI2 from "./UserAPI2.jsx";

function App() {
    const [count, setCount] = useState(5);
    const [time, setTime] = useState(0)
    
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(t => t + 1);
        }, 1000);

        return () => clearInterval(interval);
    },[]);

    return(
        <>
            <section>
                <h1>Hello World!</h1>
                <h2>Props Example</h2>

                <User name="Limon" age={25} />
                <User name="Tarunya" age={39} />
            </section>

            <section>
                <h1>Counter: {count}</h1>

                <button onClick={() => setCount(count+1)}>Increase</button>
                <button onClick={() => setCount(count-1)}>Decrease</button>
            </section>

            <section>
                <h2>Seconds: {time}</h2>
            </section>

            <section>
                <UserAPI />
                <UserAPI2 />
            </section>
            
        </>

    );
};

export default App;