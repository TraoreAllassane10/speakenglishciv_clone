import { Mail, Menu, Phone, X } from "lucide-react";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const menuItems = [
  {
    label: "Acceuil",
    url: "/",
  },
  {
    label: "Coaching",
    url: "/coaching",
  },
  {
    label: "Traduction",
    url: "/traduction",
  },
  {
    label: "Test de Niveau",
    url: "/test-niveau",
  },
  {
    label: "Contact",
    url: "/contact",
  },
];

const Header = () => {
  const location = useLocation();

  const [openMobile, setOpenMobile] = useState(false);

  return (
    <div className="sticky top-0 z-50 backdrop-blur-md">
      {/* Top Header */}
      <div className="hidden md:block bg-header-top">
        <div className="flex justify-between md:mx-4 lg:mx-20 py-2">
          <div className="flex gap-4 text-sm">
            <p className="flex gap-2 place-items-center">
              <Phone size={18} className="text-white" />{" "}
              <span className="text-white font-semibold">
                +225 07 97 72 12 70
              </span>
            </p>
            <span className="flex gap-2 place-items-center">
              <Mail size={18} className="text-white" />{" "}
              <span className="text-white font-semibold">
                speakenglishciv@gmail.com
              </span>
            </span>
          </div>

          <div>
            <span className="text-white font-semibold">
              Coaching en Anglais & Traduction Certifiée
            </span>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex justify-between place-items-center md:mx-4 lg:mx-20 bg-white">
        {/* Logo */}
        <Link to="/" className="flex gap-4 place-items-center">
          <img src={logo} alt="Logo" width={80} height={80} />
          <span className="space-x-1 font-bold text-sm sm:text-lg lg:text-xl">
            <span className="text-primary">SPEAK</span>
            <span className="text-secondary">ENGLISH</span>
            <span className="text-primary">CI</span>
          </span>
        </Link>

        {/* Menu items */}
        <div className="hidden lg:flex gap-2">
          {menuItems.map((item) => (
            <li className="list-none ">
              <Link
                to={item.url}
                className={`${
                  location.pathname === item.url
                    ? "text-primary  hover:text-primary bg-orange-50"
                    : "text-foreground hover:bg-gray-100"
                }  px-4 py-2  rounded-xl transition font-medium`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </div>

        <div className="hidden lg:block">
          <button className="px-8 py-3 inline-flex items-center justify-center bg-secondary hover:bg-blue-800 text-white rounded-full font-semibold transition-all duration-300 focus-visible:ring-2 shadow-lg shadow-blue-250 hover:-translate-y-0.5 active:scale-[0.98]">
            Commander une traduction
          </button>
        </div>

        {/* Menu Mobile */}
        <div>
          <button
            onClick={() => setOpenMobile((v) => !v)}
            className="lg:hidden hover:bg-gray-100 p-3 rounded-xl transition-all "
          >
            {openMobile ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {openMobile && (
        <div className="mx-4 overflow-hidden transition-all duration-300 ease-in-out">
          <hr className="my-4 border-gray-200" />
          <div className="flex flex-col lg:hidden gap-4 mb-4">
            {menuItems.map((item) => (
              <li className="list-none ">
                <Link
                  to={item.url}
                  className={`${
                    location.pathname === item.url
                      ? "text-primary  hover:text-primary bg-orange-50"
                      : "text-foreground hover:bg-gray-100"
                  }  px-4 py-2  rounded-xl transition font-medium block w-full`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </div>

          <div className="block lg:hidden">
            <button className="px-8 py-3 w-full inline-flex items-center justify-center bg-secondary hover:bg-blue-800 text-white rounded-full font-semibold transition-all duration-300 focus-visible:ring-2 shadow-lg shadow-blue-250 hover:-translate-y-0.5 active:scale-[0.98]">
              Commander une traduction
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
