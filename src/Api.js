import axios from "axios";
import { useState } from "react";
export default function App() {
  const [users, setUsers] = useState([]);
  const fetchData = (e) => {
    axios({
      method: "GET",
      url: "https://reqres.in/api/users?page=2",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "example.com",
        "x-rapidapi-key": process.env.RAPIDAPI_KEY,
      },
      params: {
        search: "parameter",
      },
    })
      .then((res) => {
        console.log(res.data.data);
        setUsers(res.data.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button onClick={(e) => fetchData(e)}>Click here</button>
      <div>
        {users.map((item) => (
          <div
            key={item.id}
          >{`${item.id}- ${item.first_name} ${item.last_name}`}</div>
        ))}
      </div>
    </div>
  );
}
