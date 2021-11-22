import React, { useState } from 'react';
import User from './User';

export default function Vj512() {
    const [ users, setUsers] = useState([{ name: 'Nikola', age: 40 },
                                            { name: 'Mate (solo)', age: 109 },
                                            { name: 'Štef', age: 61 }]);   
    const handleRename = (newName) => {
        // NE
        // users[0].name = newName;
        
        const newUsers = [...users];
        newUsers[0].name = newName;

        setUsers(newUsers);
    }

    return (
        <div>
            <User usr={users[0]} onRename={handleRename} />
            <User usr={users[1]} />
            <User usr={users[2]} />
        </div>);   
}