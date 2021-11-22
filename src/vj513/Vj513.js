import React, { useState } from 'react';
import User from './User';

export default function Vj513() {
    const [ users, setUsers] = useState([{ id: 10, name: 'Nikola', age: 40 },
                                            { id: 20,  name: 'Pero', age: 18 },
                                            { id: 30,  name: 'Mate', age: 109 },
                                            { id: 40,  name: 'Štef', age: 61 },
                                            { id: 17,  name: 'Ivica', age: 79 }]);
    const handleRename = (newName, idx) => {
        const newUsers = [...users];
        newUsers[idx].name = newName;

        setUsers(newUsers);
    }

    return (
        <div>
            {/* <User usr={users[0]} onRename={(ime) => handleRename(ime, 0)} /> */}

            {users.map((user, index) =>
                    <User key={user.id} usr={user} onRename={(ime) => handleRename(ime, index)} />
            )}
        </div>);   
}