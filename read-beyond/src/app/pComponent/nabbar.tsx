import Link from 'next/link'; 
import "../specificcss/buttonHover.css" 
import "../specificcss/hover.css" 
import { FaSearch } from 'react-icons/fa';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// NavMenu Component
function NavMenu() {
  return (
    <NavigationMenuItem>
      <Link href="/docs" passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          Documentation
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
}

// Nabbar Component
function Nabbar() {
  return (
    <>
      <header className="text-gray-600 body-font bg-slate-200">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
              viewBox="0 0 24 24"
              aria-label="Logo"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl text-blue-600 font-bold">readBeyond</span>
          </Link>

          <NavigationMenu className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/getstart" className="mr-5 hover:text-blue-600 hover:font-medium cursor-pointer" aria-label="Get Started">
              Get Started
            </Link>
            <Link href="/categories" className="mr-5 hover:text-blue-600 hover:font-medium cursor-pointer" aria-label="Categories">
              Categories
            </Link>
            <NavMenu /> {/* Include the NavMenu here */}
            <Link href="/about" className="mr-5 hover:text-blue-600 hover:font-medium cursor-pointer" aria-label="About">
              About
            </Link>
          </NavigationMenu>

          <div className="flex items-center space-x-2 ml-4">
            <input
              type="search"
              placeholder="Search..."
              className="px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Search"
            />
            <FaSearch className="text-blue-600" />
          </div>

          <Link href="/login">
            <button className="inline-flex items-center text-white border-0 py-1 px-3 focus:outline-none bg-blue-500 hover:bg-blue-500 hover:text-white rounded text-base mt-4 md:mt-0 ml-4">
              Login
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
                aria-label="Login Icon"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Nabbar;
