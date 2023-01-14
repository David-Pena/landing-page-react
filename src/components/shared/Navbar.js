/* eslint-disable jsx-a11y/anchor-is-valid */
const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="https://flowbite.com/" className="flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap">My Company</span>
        </a>
        <button type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col py-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            <li>
              <a href="#" className="block mt-2 py-2 pl-3 pr-4 text-white bg-blue-700 hover:text-blue-500 rounded md:bg-transparent md:text-blue-700 md:p-0">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block mt-2 py-2 pl-3 pr-4 text-white bg-blue-700 hover:text-blue-500 rounded md:bg-transparent md:text-blue-700 md:p-0">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="block mt-2 py-2 pl-3 pr-4 text-white bg-blue-700 hover:text-blue-500 rounded md:bg-transparent md:text-blue-700 md:p-0">
                About Us
              </a>
            </li>
            <li>
              <button type="button" className="py-2 px-4 text-white bg-blue-700 hover:bg-blue-500">Contact Us</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;