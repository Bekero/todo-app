import { NavLink } from "react-router-dom";

export function AppHeader() {

    return (
        <div className="app-header main-layout">
            <div className="header-container">
                <div className="main-logo-header">My Todos</div>
                {/* <nav>
                    <NavLink to=''>Home</NavLink>
                    <NavLink>About Us</NavLink>
                    <NavLink>Contact Us</NavLink>
                    <NavLink to="tasks">Tasks for project</NavLink>
                </nav> */}
            </div>
        </div>
    )
}