import { useState} from "react";
import Search from "./components/Search/Search";
import useDebounce from "./Hooks/useDebounce"; // Importing the custom hook
import DataItems from "./components/DataItems/DataItems";
import Filter from "./components/Filter/Filter";
import "./App.css";
import Loader from "./ResuableComponent/Loader";
import useFetch from "./Hooks/useFetch"; // Importing the useFetch custom hook

const Home = () => {
  const [search, setSearch] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const debouncedSearch = useDebounce(search, 500); // Using the custom hook
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

  const handleApplyFilter = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="App">
      <div className="main-container">
        <div className="search-component">
          <Search setSearch={setSearch} />
        </div>
        <div className="Filter-Component">
          <Filter onApply={handleApplyFilter} />
        </div>
      </div>
      {loading ? (
        <div>
          <Loader/>
        </div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <DataItems
          selectedOption={selectedOption}
          data={data}
          debouncedSearch={debouncedSearch}
        />
      )}
    </div>
  );
};

export default Home;
