import React from "react";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Logo from "../partials/Logo";
import { Routes, Route, BrowserRouter, NavLink } from "react-router-dom";

export default function Navigation() {
  let activeClassName = "underline";

  return (
    <BrowserRouter>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <NavLink to="/" className="flex items-center">
            <Logo className="mr-3 h-6 sm:h-9" />
          </NavLink>

          <div className="flex items-center">
            <a
              href="tel:5541251234"
              className="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline"
            >
              (555) 412-1234
            </a>
          </div>
        </div>
      </nav>

      <nav className="bg-blue-100 dark:bg-blue-700">
        <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
          <div className="flex items-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? `text-gray-900 dark:text-white ${activeClassName}`
                      : undefined
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? `text-gray-900 dark:text-white ${activeClassName}`
                      : undefined
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <a
                  href="/#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Team
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
