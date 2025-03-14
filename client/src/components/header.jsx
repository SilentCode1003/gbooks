function Header({ toggleSidebar }) {
    return (
      <header className="bg-white shadow-md p-4 flex items-center justify-between">
        <button
          onClick={toggleSidebar}
          className="text-gray-800 rounded-lg bg-white font-semibold hover:bg-gray-100 p-2"
        >
          ☰
        </button>
        <h1 className="text-xl font-semibold">Admin Dashboard</h1>
      </header>
    );
  }
  
  export default Header;
  