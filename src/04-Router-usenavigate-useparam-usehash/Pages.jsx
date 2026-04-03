import Home from './Home';
import Profile from './Profile'
import {Routes,Route} from 'react-router-dom'
const Pages=()=>{
return(
    <div>
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/profile/:id" element={<Profile/>}/>
   </Routes>
    </div>
)
}
export default Pages;