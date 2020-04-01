import React, { useState, useEffect } from "react";
import airtableAuth from "./utils/airtableAuth";

export const Home = () => {
  const [user, setUser] = useState("recpIjGF4N9Qm3D3I");
  const [userList, setUserList] = useState();
  const [userData, setUserData] = useState();
  const [input, setInput] = useState({
    fields: {
      user_name: "New User",
      password: "123",
      profile_picture: ["attachment"]
    }
  });
  const [putData, setPutData] = useState({
    records: [
      {
        id: "recpIjGF4N9Qm3D3I",
        fields: {
          user_name: "Update",
          password: "User",
          profile_picture: []
        }
      }
    ]
  });

  const handleChange = e => {
    e.preventDefault();
    setInput({ fields: { ...input, [e.target.name]: e.target.value } });
  };

  useEffect(() => {
    // Retrieve User List
    airtableAuth()
      .get("https://api.airtable.com/v0/appcaKbHDurIj9YWs/User")
      .then(res => {
        setUserList(res);
      });
    // Retrieve User
    airtableAuth()
      .get(`https://api.airtable.com/v0/appcaKbHDurIj9YWs/User/${user}`)
      .then(res => {
        setUserData(res);
      });
  }, []);

  useEffect(() => {
    console.log("User List", userList);
    console.log("User Data", userData);
  }, [userList, userData]);

  const createUser = e => {
    e.preventDefault();
    console.log(input);
    airtableAuth()
      .post("https://api.airtable.com/v0/appcaKbHDurIj9YWs/User", input)
      .then(res => console.log(res));
  };
  const updateUser = () => {
    airtableAuth()
      .put("https://api.airtable.com/v0/appcaKbHDurIj9YWs/User", putData)
      .then(res => console.log(res));
  };

  const deleteUser = () => {
    airtableAuth()
      .delete(
        "https://api.airtable.com/v0/appcaKbHDurIj9YWs/User?records[]=recpIjGF4N9Qm3D3I"
      )
      .then(res => console.log(res));
  };
  console.log(input);
  return (
    <div>
      <h1>Home Page</h1>
      <form onSubmit={createUser}>
        <input
          type="text"
          name="user_name"
          onChange={handleChange}
          value={input.user_name}
          placeholder="Username..."
        />
        <input
          type="text"
          name="password"
          onChange={handleChange}
          value={input.password}
          placeholder="Password..."
        />
        <input
          type="text"
          name="profile_picture"
          onChange={handleChange}
          value={input.profile_picture}
          placeholder="Profile Picture Link..."
        />
        <button>Submit</button>
      </form>
      <button onSubmit={updateUser}>Update User</button>
      <button onSubmit={deleteUser}>Delete User</button>
    </div>
  );
};
