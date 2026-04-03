//-----parent component-------//
import { useState, useEffect } from "react";
import { API_URLS } from "../utils";
import UserCard from "./UserCard";
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(API_URLS);
        if (!res.ok) {
          throw new Error("failed to fetch user,please try again later.");
        }
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const filteredUser = users.filter((user) =>
    user.name[0].toLowerCase().startsWith(search.toLowerCase())
  );

  if (error) return <h2 style={{ color: "red" }}>{error}</h2>;
  if (loading)
    return (
      <div className=" text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  return (
    <div className="container">
      <h1 className="text-center mb-4" style={{ color: "indigo" }}>
        User List:
      </h1>
      <div className="d-flex justify-content-center">     
      <input
        type="text"        
        placeholder="search by name..."
        value={search}
        style={{width:"40%"}}
        className=" form-control mb-4"
        onChange={(e) => setSearch(e.target.value)}
      />
      </div>
      <div className="row ">
        {filteredUser.map((user) => (
          <div className="col-md-4 mb-4">
            <UserCard key={user.id} user={user} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default UserList;


