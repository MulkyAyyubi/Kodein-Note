export const Navbar = ({ onSearch }) => {

  return (
    <div className="flex flex-row justify-between px-36 py-7">
      <img src="logo.svg" alt="logo" />
      <div className="flex w-48 rounded-lg bg-gray-100">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full border-none bg-transparent px-4 py-1 text-black outline-gray-300 rounded-lg font-normal"
        />
      </div>
    </div>
  );
};

export default Navbar;
