import { useRouteError } from "react-router-dom";


const Error = ()=> {
    const err = useRouteError();
    console.log(err);

    return (
        <div>
            <h1>Something went wrong</h1>
            <h1>Find out the issue</h1>
            <h3>
                {err.status} : {err.statusText}
            </h3>
        </div>
    )
}

export default Error;