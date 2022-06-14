import axios from "axios";
import { React, useState, useEffect } from "react";
import User from "../User/User";
import "./UserList.css";
const UserList = () => {
  const [listOfUSer, setListOfUSer] = useState([]);
  const getData = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    setListOfUSer(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1
        style={{
          color: "#202020",
          fontFamily: "Cursive",
        }}
        className="title"
      >
        Users List
      </h1>
      <div className="uselist">
        {listOfUSer.map((el) => (
          <User key={el.id} userEl={el} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
