import Contact from '../pages/Contact'
import Home from '../pages/Home'
import {
    Routes,
    Route,
    BrowserRouter,
    NavLink,
} from "react-router-dom";

export default function Navigation() {
    return (
        <BrowserRouter>
            <div className="navbar">
                <div className="flex-1">
                    <NavLink to="/" className="btn btn-ghost normal-case text-xl">Logo</NavLink>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}