import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
  return (
    <div className= 'pa2 '>
      <input
      aria-label= 'search robots'
      className='pa3 ba ba-green bg-lightest-blue'
       type='search' id='input' placeholder='search robots' onChange={searchChange} />
    </div>
  );
};

export default SearchBox;
