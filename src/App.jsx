import react from "react";
// import ErrorPage from "./ErrorHandling/ErrorPage";
import UserList from "./03-props-usestate-useeffect-userlist/UserList";
import Pages from "./04-Router-usenavigate-useparam-usehash/Pages";
import {BrowserRouter} from 'react-router-dom'
import Form from './02-EventHandling/Form'
import FormInputs from "./02-EventHandling/FormInputs";

// import FetchError from "./ErrorHandling/FetchError"

function App() {
  return (
    <div>
    {/* <Form/> */}
    <FormInputs/>
      {/* <ErrorPage /> */}
      {/* <FetchError/> */}
      {/* <UserList/> */}
      {/* <BrowserRouter>
      <Pages/>
      </BrowserRouter> */}
    </div>
  );
}
export default App;
