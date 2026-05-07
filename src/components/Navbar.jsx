const Navbar = () => {
  return (
    <nav className="bg-white text-black p-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold">DEW Catering</h1>
        <ul className="flex space-x-4 font-medium">
          <li>
            <a href="/plans" className="hover:underline-green-700">
              Plans
            </a>
          </li>
          <li>
            <a href="/how-it-works" className="hover:underline">
              How it Works
            </a>
          </li>
          <li>
            <a href="/about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="/sustainability" className="hover:underline">
              Sustainability
            </a>
          </li>
        </ul>
        <div className="flex space-x-4">
          <button className="bg-gray-600 hover:bg-gray-700 cursor-pointer text-white font-bold py-2 px-4 rounded">
            Log In
          </button>
          <button className="bg-[#22C55E] hover:bg-green-700 cursor-pointer text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
