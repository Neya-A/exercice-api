import { useEffect, useState } from "react";
import "./index.css";
import UserCard from "./UserDef";

interface UserDetails {
  id: number;
  name: string;
  username: string;
}

export default function App() {
  let [userList, setUserList] = useState<UserDetails[]>([]);

  let url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setUserList(data);
      })
      .catch((error) => {
        console.log("ERROR: ", error);
      });
  }, [url]);

  // console.log(userList);

  return (
    <div className="App">
      {userList.map((data) => (
        <UserCard key={data.id} data={data} />
      ))}
    </div>
  );
}
