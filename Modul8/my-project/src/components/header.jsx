import Logo from "../assets/Logo.svg";

export default function Header() {
  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <img src={Logo} alt="Logo" className="hidden md:h-16 md:w-16" />
          <h1 className="text-sm md:text-2xl font-bold">Network Laboratory</h1>
        </div>
        <ul className="flex space-x-2 md:space-x-4 text-sm md:text-lg font-semibold p-4">
          <li className="hover:text-gray-200 cursor-pointer">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-gray-200 cursor-pointer">
            <a href="#sbd">SBD</a>
          </li>
          <li className="hover:text-gray-200 cursor-pointer">
            <a href="#dmj">DMJ</a>
          </li>
          <li className="hover:text-gray-200 cursor-pointer">
            <a href="#os">OS</a>
          </li>
          <li className="hover:text-gray-200 cursor-pointer">
            <a href="#os">NTLAB</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
