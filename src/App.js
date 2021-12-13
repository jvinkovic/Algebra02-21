import React, {useState} from 'react';
import {usersDb} from './UsersDb';
import User from './User';

  usersDb.forEach(element => {
    element["promjenaIkonice"] = true;
  });

function App() {

  const [users, setUsers] = useState (
    usersDb
  );
    const [filteredUsers, setFilteredUsers] = useState([]);
  const [clickedLetter, setClickedLetter] = useState('');

  const alphabetLetters = 'abcdefghijkln';

  const filterUsers = (letter) => {
    setClickedLetter(letter);
    
    const filtered = users.filter(u => u.prezime.toLowerCase().startsWith(letter));
    console.log(filtered);
    console.log(users);
    setFilteredUsers(filtered);
  };

  const handleInputChange = (event, letter, index, arg) => {
    const newUsers = {...users};
    let str = event.target.value.trimStart();     
    newUsers[letter][index][arg] = str;
    setUsers(newUsers);
  }

  const handleIconChange = (letter, index) => {
    const newUsers = {...users};
    const icn = newUsers[letter][index].promjenaIkonice;
    newUsers[letter][index].promjenaIkonice = !icn;

    setUsers(newUsers);
  }

  const handleDeleteUser = (letter, id) => {
    const newUser = users[letter].filter(user => user.id !== id);
    const newUsers = {...users};
    newUsers[letter] = newUser;
    setUsers(newUsers);
    filterUsers(clickedLetter);

  }
  
  return (
    <div>
     {alphabetLetters.split('').map((letter) => ( 
       <button
        key={letter} 
        onClick={() => filterUsers(letter)}>{letter}</button>
     ))}
     {clickedLetter && filteredUsers.map((user,index) => (
        <User
          key={user.id}
          name={user.ime}
          surname={user.prezime}
          tel={user.tel}
          onNameChange = {event => handleInputChange(event, clickedLetter, index, "ime")}
          onSurnameChange = {event => handleInputChange(event, clickedLetter, index, "prezime")}
          onTelChange = {event => handleInputChange(event, clickedLetter, index, "tel")}
          onIconClick = {() => handleIconChange(clickedLetter, index)}
          editable={user.promjenaIkonice}
          onDelete = {() => handleDeleteUser(clickedLetter, user.id)}
        />
      ))}
    </div>
  );
}

export default App;