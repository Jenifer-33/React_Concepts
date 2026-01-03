import {ErrorBoundary} from 'react-error-boundary';
import ErrorFallBack from "./ErrorFallbBack";
const ThrowError=()=>{
    throw new Error("Error has occured,click retry ")
}
const ErrorPage=()=>{
    return(
        <ErrorBoundary FallbackComponent={ErrorFallBack}>
         <ThrowError/>
        </ErrorBoundary>
    )
}
export default ErrorPage;