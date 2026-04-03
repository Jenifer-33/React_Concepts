import { useNavigate } from 'react-router-dom';
import users from './users'
const Home=()=>{
    const navigate=useNavigate()
    return(
        <div>
            {users.map((user)=>(
                <button   key={user.id} onClick={()=>navigate(`/profile/${user.id}`)}
              >View:{user.name}</button>
            ))}
        </div>
    )
};
export default Home;