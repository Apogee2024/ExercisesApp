import { Link } from "react-router-dom";
function Navigation(){
    return(
        <nav className="app-nav">
            <Link to="/">Home</Link>
            <Link to="/create">Create</Link>
            {/* <Link to="/edit">Edit</Link> */}
        </nav>
    )

}

export default Navigation;