import { useState,useEffect } from "react";

function UserAPI() {
    const [users,setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUsers(data))
    },[]);

    return(
        <>
            <div>
                <h1>Users List</h1>
                {users.map(user => (
                    <p key={user}>{user.name}::{user.email}</p>
                ))}
            </div>
        </>
    );
};

export default UserAPI