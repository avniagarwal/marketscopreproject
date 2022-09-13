import React, { useState } from "react";
import "./Search.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

function Search({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  // const filterData = (value) => {
  //   const lowercasedValue = value.toLowerCase().trim();
  //   if (lowercasedValue === "") setData(dataList);
  //   else {
  //     const filteredData = dataList.filter(item => {
  //       return Object.keys(item).some(key =>
  //         excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
  //       );
  //     });
  //     setData(filteredData);
  //   }
  // }
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.client.toLowerCase().includes(searchWord.toLowerCase());
      return value.industry.toLowerCase().includes(searchWord.toLowerCase());
      return value.functionality.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchOutlinedIcon />
          ) : (
            <CloseOutlinedIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_blank">
                <p>{value.client} </p>
                <p>{value.industry} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Search;