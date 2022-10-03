import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    setUsers(await response.json());
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <div className="container-fluid mt-5">
          <h1 className="text-center">Github Users</h1>
        <div className="row">
          {users.map((currUser) => {
            return (
              <div className="col-4 mt-5" key={currUser.id}>
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={currUser.avatar_url}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{currUser.login}</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UseEffect;
