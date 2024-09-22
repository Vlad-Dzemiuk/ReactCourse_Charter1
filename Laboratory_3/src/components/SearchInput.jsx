const SearchInput = ({ searchValue, setSearch }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        value={searchValue}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchInput;
