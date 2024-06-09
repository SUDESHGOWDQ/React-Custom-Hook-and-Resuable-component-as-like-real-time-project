import PropTypes from "prop-types";
import "./DataItems.css";

const DataItems = ({ data, debouncedSearch, selectedOption }) => {
  const sortedData = [...data]; // Create a copy of the original data array

  // Sort the data based on the selectedOption
  // Sort the data based on the selectedOption
sortedData.sort((a, b) => {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  if (selectedOption === "A to Z") {
    return nameA.localeCompare(nameB);
  } else if (selectedOption === "Z to A") {
    return nameB.localeCompare(nameA);
  } else if (selectedOption === "None") {
    // Maintain the original order
    return 0;
  }
  // If selectedOption is neither "A to Z", "Z to A", nor "None", maintain the order
  return 0;
});


  return (
    <div className="Data-items">
      <table border={1}  cellPadding={"10px"}>
        <thead>
          <tr>
            <td>
              <b>SlNo</b>
            </td>
            <td>
              <b>Name</b>
            </td>
            <td>
              <b>Email</b>
            </td>
            <td>
              <b>Phno</b>
            </td>
            <td>
              <b>Place</b>
            </td>
          </tr>
        </thead>
        {sortedData
          .filter((item) =>
            item.name.toLowerCase().includes(debouncedSearch.toLowerCase())
          )
          .map((item, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.address.city}</td>
                </tr>
              </tbody>
            );
          })}
      </table>
    </div>
  );
};

DataItems.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  debouncedSearch: PropTypes.string.isRequired,
  selectedOption: PropTypes.oneOf(["A to Z", "Z to A"]).isRequired,
};

export default DataItems;
