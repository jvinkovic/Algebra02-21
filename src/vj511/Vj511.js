import React, { useState } from 'react';
import User from './User';

export default function Vj511() {
    const [ users, setUsers] = useState([{ name: 'Nikola', age: 40 },
                                            { name: 'Mate (solo)', age: 109 },
                                            { name: 'Štef', age: 61 }]);
    const [ str, setStr] = useState("Dobar dan");

    const [ obj, setObj] = useState({ k: [], x: 4, y: 'blabla'});

    const handleDodajGodine = () => {
        const newUsers = [];
        for(let i = 0; i < users.length; i++) {
            const newUsr = { name: users[i].name, age: users[i].age + 1};
            // const newUsr = { ...users[i], age: users[i].age + 1 };
            newUsers.push(newUsr);
        }

        setUsers(newUsers);
    }

    return (
        <div>
            <User usr={users[0]} />
            <User usr={users[1]} />
            <User usr={users[2]} />

            <button onClick={handleDodajGodine}>Dodaj godine</button>
        </div>);   
}