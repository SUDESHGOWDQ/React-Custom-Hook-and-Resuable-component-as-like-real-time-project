import PropTypes from "prop-types";
import './Search.css'

const Search = ({ setSearch }) => {
  return (
    <div className="Search">
      <input className="search-input" type="text" placeholder="Search Here" onChange={(e) => setSearch(e.target.value)} />
      <div className="Icon">
      <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

Search.propTypes = {
  setSearch: PropTypes.func.isRequired,
};

export default Search;
