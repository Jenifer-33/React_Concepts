import { useState } from "react";

const Form=()=>{
    const[form,setForm]=useState({
        regNo:"",
        name:"",
        batch:"",
        department:"",
        email:""

    });    
       const[message,setMessage]=useState("")
       const handleChange=(e)=>{
       const key=e.target.name
       setForm({...form,[key]:e.target.value})
    };  
        const handleSubmit=(e)=>{
        e.preventDefault();
        if(!form.email){
            setMessage("email is required")
        }
        else{
            setMessage("From is submitted successfully")
        }
    }     
    return(
          <form className="form-field" onSubmit={handleSubmit} >
        <div>
            <label htmlFor="regNo">Register no:</label>
            <input id="regNo" name="regNo" value={form.regNo} onChange={e=>handleChange(e)}/>
            </div>
        <div>
            <label htmlFor="name">Full Name:</label>
            <input id="name" name="name" value={form.name} onChange={e=>{handleChange(e)}}/>
            </div>
         <div>
            <label htmlFor="batch">Batch:</label>
            <input id="batch" name="batch" value={form.batch} onChange={e=>handleChange(e)}/>
            </div>
          <div>
            <label htmlFor="department">Department:</label>
            <input id="department" name="department" value={form.department} onChange={e=>handleChange(e)}/>
            </div>
           <div>
            <label htmlFor="email">Email:</label>
            <input id="email" name="email" value={form.email} onChange={e=>handleChange(e)}/>
            </div>
            <button type="submit" onClick={()=>alert("button in clicked")}>Submit Form</button>
            <p>{message}</p>
            

            
      </form>
    )
}
export default Form;