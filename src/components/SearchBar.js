import React, {useState} from 'react';

const SearchBar = () => {
    const [keyword, setKeyword] = useState([]);
  return (
    
   <input
   value={keyword}
   placeholder={"Search Here"}
   onChange={(e) => setKeyword(e.target.value)}/>
     
    
  );
}

export default SearchBar;