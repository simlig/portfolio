import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';


const Navbar = () => {
    return (
        <nav className="bg-blue-700 p-4 sticky top-0 z-10 border-b-1 border-b-gray-500">
            <div className="mx-auto flex items-center justify-between">
                <div className="flex">
                    <Link href="/" className="text-white px-4 rounded focus:outline-none focus:ring-4 focus:ring-white border-1 border-transparent hover:border-white transition-all">Home</Link>
                    <Link href="/PDFs/Samuel Imlig Resume.pdf" className="text-white px-4 rounded focus:outline-none focus:ring-4 focus:ring-white border-1 border-transparent hover:border-white transition-all">Resume</Link>
                    <Link href="#" className="text-white px-4 rounded focus:outline-none focus:ring-4 focus:ring-white border-1 border-transparent hover:border-white transition-all">About</Link>
                    <Link href = "#" className="text-white px-4 rounded focus:outline-none focus:ring-4 focus:ring-white border-1 border-transparent hover:border-white z-20">
                        <FontAwesomeIcon icon={faLinkedin} className={"h-6"} />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;