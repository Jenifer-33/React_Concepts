import { useState } from "react";

const FormInputs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    gender: "",
    languages:[],
    location: "",
    password: "",
    confirmPassword: "",
    error: "",
  });
  const handleChange = (e) => {
   const {name,value,checked,type}=e.target
   if(type=="checkbox"){
    setForm({...form,languages:checked?[...form.languages,value]:form.languages.filter((lang)=>lang!==value)})
   }else{
         setForm({ ...form, [e.target.name]: e.target.value });
   }
  };
  return (
    <form>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          placeholder="Enter your name"
          value={form.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Gender:</label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={form.gender == "Male"}
          onChange={handleChange}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={form.gender == "Female"}
          onChange={handleChange}
        />
        Female
        <input
          type="radio"
          name="gender"
          value="Others"
          checked={form.gender == "Others"}
          onChange={handleChange}
        />
        Others
      </div>
      <div>
        <label htmlFor="location">Location:</label>
        <select id="location" name="location" value={form.location} onChange={handleChange}>
          <option value="">Select location</option>
          <option value="TamilNadu">TamilNadu</option>
          <option value="Kerala">Kerala</option>
          <option value="Karnataka">Karnataka</option>
          <option value="AndraPradesh">AndraPradesh</option>
          <option value="Telugana">Telugana</option>
        </select>
      </div>
      <div>
        <label>Preferred Language:</label>
        <input type="checkbox" value="Tamil" name="languages" checked={form.languages.includes("Tamil")} onChange={handleChange} />Tamil
        <input type="checkbox" value="English" name="languages" checked={form.languages.includes("English")} onChange={handleChange}/>English
        <input type="checkbox" value="Malayalam" name="languages" checked={form.languages.includes("Malayalam")} onChange={handleChange}/>Malayalam
        <input type="checkbox" value="Telugu" name="languages" checked={form.languages.includes("Telugu")} onChange={handleChange}/>Telugu
        <input type="checkbox" value="Others" name="languages" checked={form.languages.includes("Others")} onChange={handleChange}/>Others
        <p>{form.languages.join(",")}</p>
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" value={form.password} name="password" onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input id="confirmPassword" type="password" value={form.password} name="password" onChange={handleChange}/>
      </div>
    </form>
  );
};
export default FormInputs;
