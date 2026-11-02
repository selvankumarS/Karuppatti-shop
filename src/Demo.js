import axios from "axios";
import { useEffect, useState } from "react";

function Demo() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
console.log(data);

  return (
    <div>
      {data.map((user) => (
      
        <p key={user.id}>{user.name}</p>
        
      ))}
    </div>
  );
}

export default Demo