import React from 'react';

const SearchList = ({searchList=[]}) => {
  return (
    <>
    { searchList.map((data) => {
        if (data) {
          return (
            <div >
              <h1>{data.name}</h1>
	    </div>	
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default SearchList;