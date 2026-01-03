import { useState,useEffect } from "react"

const FetchError=()=>{
const [users,setUsers]=useState([])
const[error,setError]=useState(null)
    useEffect(()=>{
      const FetchUsers= async ()=>{
        try{
         const res= await fetch("https://jsonplaceholder.typicode.com/users")
        if(!res.ok){
          throw new Error("Failed to fetch users")
        }
        {
          const data=await res.json()
          setUsers(data)
        }
        }catch(err){
        setError(err.message)
        }
      }
      FetchUsers();
    },[]);
       if(error) return <p style={{ color: "red" }}>{error}</p>;
    return(
        <div>
          { users? 
          <div>
            {users.map((user)=>(
                <div key={user.id}>
                {user.name} - {user.email}
               
              </div>
            ))}
          </div>
            :"Loading..."
            }
        </div>
    )
}
export default FetchError;