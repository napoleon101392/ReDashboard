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
            <ul className="header">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}