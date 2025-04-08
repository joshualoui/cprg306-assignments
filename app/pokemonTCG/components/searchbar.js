const SearchBar = ({ onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };
  return (
    <input
      type="text"
      placeholder="Search Pokémon cards..."
      onChange={handleChange}
      className="border rounded p-2 text-blue-700"
    />
  );
};
export default SearchBar;
