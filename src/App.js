import React, { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const loadUsers = async () => {
    const res = await fetch("https://reqres.in/api/users?page=1");
    const data = await res.json();
    console.log(data);
    setUsers(data.data);
  };
  loadUsers();
  useEffect(() => {
  }, []);

  return (
    <>
      <div className="min-h-screen bg-slate-800 text-center">
        <div className="inline-block">
          <h1 className="text-2xl text-white pt-3 font-serif">Hello,User!</h1>
          <h2 className="text-red-400 pt-8 text-2xl font-serif">Users:</h2>
          <ul className="flex text-white ">
            {users.map((element) => (
              <li><img className="pl-8 pt-20" src={element.avatar}/>
              <li key={element.id} className="pl-4 pt-4 text-cyan-300 ">
              {element.first_name+" "+element.last_name}
              <li className="text-cyan-500">
                {element.email}
              </li>
              </li>
              </li>
            
            ))}
          </ul>
        </div>
        <div className="text-white pt-60">Made by <span className="text-cyan-600">ReactJS</span></div>
      </div>
    </>
  );
}

export default App;
