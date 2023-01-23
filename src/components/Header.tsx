import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="sticky inset-x-0 top-0 z-50 left-0 bg-white text-gray-500 font-nanumLight">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          to="/"
        >
          <span className="ml-5 text-2xl text-sky-500 font-nanumBold">
            Hufstory
          </span>
        </Link>
        <nav className="md:ml-auto flex flex-nowrap items-center text-base justify-center">
          <Link to="/about" className="mr-5 hover:text-gray-700">
            ABOUT
          </Link>
          <Link to="/activity" className="mr-5 hover:text-gray-700">
            ACTIVITY
          </Link>
          <Link to="/teams" className="mr-5 hover:text-gray-700">
            TEAMS
          </Link>
          <Link to="/recruit" className="mr-5 hover:text-gray-700">
            RECRUIT
          </Link>
          <Link to="/blog" className="mr-5 hover:text-gray-700">
            BLOG
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
