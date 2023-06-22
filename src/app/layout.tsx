"use client";
import { useState } from "react";
import "../styles/globals.css";
import Providers from "./providers";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import { RiLogoutBoxLine } from "react-icons/ri";
import {
  FaBook,
  FaHandsHelping,
  FaHeart,
  FaHireAHelper,
  FaHome,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaUserAlt,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <html lang="en">
      <body className="overflow-hidden">
        {/* sidebar */}
        <div
          className={
            `sidebar fixed transition-all duration-300 top-0 bg-white z-40 p-10 h-screen ` +
            (isSidebarOpen ? "translate-x-0" : "-translate-x-full")
          }
        >
          <ul className="flex flex-col gap-3">
            <Link
              className="flex items-center gap-3 text-xl hover:bg-slate-100 p-2 px-4 rounded-md"
              href="/"
            >
              <FaHome className="text-button text-2xl" />
              <span>Home</span>
            </Link>
            <Link
              className="flex items-center gap-3 text-xl hover:bg-slate-100 p-2 px-4 rounded-md"
              href="/"
            >
              <FaMapMarkerAlt className="text-button text-2xl" />
              <span>Destination</span>
            </Link>
            <Link
              className="flex items-center gap-3 text-xl hover:bg-slate-100 p-2 px-4 rounded-md"
              href="/"
            >
              <FaUserAlt className="text-button text-2xl" />
              <span>Profile</span>
            </Link>
            <Link
              className="flex items-center gap-3 text-xl hover:bg-slate-100 p-2 px-4 rounded-md"
              href="/"
            >
              <FaBook className="text-button text-2xl" />
              <span>About Us</span>
            </Link>
            <Link
              className="flex items-center gap-3 text-xl hover:bg-slate-100 p-2 px-4 rounded-md"
              href="/"
            >
              <FaHeart className="text-button text-2xl" />
              <span>Favourites</span>
            </Link>
            <Link
              className="flex items-center gap-3 text-xl hover:bg-slate-100 p-2 px-4 rounded-md"
              href="/"
            >
              <FaPaperPlane className="text-button text-2xl" />
              <span>Plans</span>
            </Link>
            <Link
              className="flex items-center gap-3 text-xl hover:bg-slate-100 p-2 px-4 rounded-md"
              href="/"
            >
              <FaPaperPlane className="text-button text-2xl" />
              <span>Shared Plans</span>
            </Link>
            <Link
              className="flex items-center gap-3 text-xl hover:bg-slate-100 p-2 px-4 rounded-md"
              href="/"
            >
              <FaHandsHelping className="text-button text-2xl" />
              <span>Help</span>
            </Link>
            <Link
              className="flex items-center gap-3 text-xl hover:bg-slate-100 p-2 px-4 rounded-md"
              href="/"
            >
              <FaHireAHelper className="text-button text-2xl" />
              <span>Experience</span>
            </Link>
            <Link
              className="flex items-center gap-3 text-xl hover:bg-slate-100 p-2 px-4 rounded-md"
              href="/"
            >
              <RiLogoutBoxLine className="text-button text-2xl" />
              <span>Logout</span>
            </Link>
          </ul>
        </div>

        <div className="bg-br">
          <div className="bg-button flex px-5 h-20 border-b border-black items-center justify-between">
            <div className="logo">
              <Image
                src="/logo.png" // Replace with the path to your logo image in the public folder
                alt="logo"
                width={200} // Specify the desired width of the image
                height={200} // Specify the desired height of the image
              />
            </div>

            <button className="text-3xl text-white" onClick={toggleSidebar}>
              {isSidebarOpen ? <AiOutlineClose /> : <AiOutlineBars />}
            </button>
          </div>
          <style jsx>{`
            .navbar-container {
              display: flex;
              align-items: center;
              padding: 10px;
            }

            .bg-br {
              background-color: #e9e8e8;
            }

            .sidebar {
              position: fixed;
              top: 96px;
              right: -200px; /* Adjust the width of the sidebar here */
              width: 200px; /* Adjust the width of the sidebar here */
              height: 100vh;
              background-color: #ffffff;
              transition: right 0.3s ease-in-out;
              overflow-y: auto;
            }

            .sidebar.open {
              right: 0;
            }

            .sidebar ul {
              list-style-type: none;
              padding: 0;
              margin: 0;
            }

            .sidebar li {
              padding: 10px;
              border-bottom: 1px solid #eaeaea;
            }

            .sidebar a {
              display: flex;
              align-items: center;
              text-decoration: none;
              color: #333333;
            }

            .sidebar-toggle {
              position: fixed;
              top: 100px;
              right: 20px;
              background-color: transparent;
              border: none;
              color: ;
              font-size: 24px;
              cursor: pointer;
            }
          `}</style>
        </div>
        <main className="h-full w-full overflow-y-scroll">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
