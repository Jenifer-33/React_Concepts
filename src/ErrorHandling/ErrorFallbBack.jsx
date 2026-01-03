const ErrorFallBack=({error,resetErrorBoundary})=>{
    return(
        <div>
            <h3>Something went wrong,please try again later</h3>
            <p  style={{ color: "red" }} >{error.message}</p>
            <button onClick={resetErrorBoundary}>Retry</button>
        </div>
        
    )
}
export default ErrorFallBack;