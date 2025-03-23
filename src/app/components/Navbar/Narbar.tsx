import React from 'react';


const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-4 sticky top-0 z-10">
        <div className="mx-auto flex items-center justify-between">


            <div className="flex">
                <a href="/" className="text-white px-4 rounded focus:outline-none focus:ring-4 focus:ring-white border-1 border-transparent hover:border-white transition-all">Home</a>
                <a href="/PDFs/Samuel Imlig Resume.pdf" className="text-white px-4 rounded focus:outline-none focus:ring-4 focus:ring-white border-1 border-transparent hover:border-white transition-all">Resume</a>
                <a href="#" className="text-white px-4 rounded focus:outline-none focus:ring-4 focus:ring-white border-1 border-transparent hover:border-white transition-all">About</a>
                
            </div>

        </div>
        </nav>
    )
}

export default Navbar;