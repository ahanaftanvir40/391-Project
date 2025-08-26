import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { useState } from "react";
import { useTheme } from "@/store/themeProvider";
import { Button } from "@/components/ui/button";
import { Car, Menu, Sun, Moon } from "lucide-react";

function Header() {
  const { user } = useAuth();
  const { setTheme, theme } = useTheme();

  let navigate = useNavigate();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const [theme, setTheme] = useState(
  //   localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  // );

  // useEffect(() => {
  //   localStorage.setItem("theme", theme);
  //   const localTheme = localStorage.getItem("theme");
  //   document.querySelector("html").setAttribute("class", localTheme);
  // }, [theme]);

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const handleToggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionClick = () => {
    setDropdownOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");

    navigate("/login");
    window.location.reload();
  };

  return (
    <header className="border-b bg-white/95 backdrop-blur dark:bg-slate-900/95 dark:supports-[backdrop-filter]:bg-slate-900/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 mx-auto max-w-7xl">
        <div className="flex items-center space-x-2">
          <Car className="h-8 w-8 text-orange-600" />
          <Link
            to="/"
            className="text-2xl font-bold text-gray-900 dark:text-white"
          >
            WheelzOnRent
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            to="/WheelHub"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            WheelHub
          </Link>
          {localStorage.getItem("authToken") && (
            <Link
              to="/userdashboard"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Dashboard
            </Link>
          )}
        </nav>

        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={handleTheme}
            className="h-9 w-9"
          >
            {theme === "light" ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
          </Button>

          {/* Auth Section */}
          {!localStorage.getItem("authToken") ? (
            <>
              <Button variant="ghost" className="hidden md:inline-flex">
                <Link to="/login">Sign In</Link>
              </Button>
              <Button className="bg-orange-600 hover:bg-orange-700">
                <Link to="/signup" className="text-white">
                  Get Started
                </Link>
              </Button>
            </>
          ) : (
            <div className="relative">
              <Button
                variant="ghost"
                className="flex items-center space-x-2 h-auto p-2"
                onClick={handleToggleDropdown}
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src={`http://localhost:3000/public/images/user-avatars/${user.avatar}`}
                  alt="Profile Avatar"
                />
                <span className="hidden md:flex text-gray-700 dark:text-gray-300">
                  Profile
                </span>
                <svg
                  className="w-4 h-4 text-gray-500 hidden md:flex"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </Button>
              {dropdownOpen && (
                <ul className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700 z-50">
                  <li>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                      onClick={handleOptionClick}
                    >
                      Profile
                    </Link>
                  </li>
                  {user.isAdmin && (
                    <li>
                      <Link
                        to="/admin"
                        className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                        onClick={handleOptionClick}
                      >
                        Admin Dashboard
                      </Link>
                    </li>
                  )}
                  <li>
                    <button
                      onClick={() => {
                        handleLogout();
                        handleOptionClick();
                      }}
                      className="w-full text-left block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
          )}

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-gray-700">
          <nav className="flex flex-col space-y-2 p-4">
            <Link
              to="/"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/WheelHub"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              WheelHub
            </Link>
            {localStorage.getItem("authToken") && (
              <Link
                to="/userdashboard"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
            )}
            {!localStorage.getItem("authToken") && (
              <>
                <Link
                  to="/login"
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="text-orange-600 hover:text-orange-700 transition-colors py-2 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
