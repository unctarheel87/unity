import React from 'react';
import StockSearchBar from '../stockSearchBar';
import StockSearchSuggestions from '../StockSearchSuggestions';

function SearchSideNav(props) {

    return  (
      <div>
        <StockSearchBar value={props.value}
          onChange={props.onChange}
          onClick={props.onClick}
        />
        <StockSearchSuggestions peers={props.peers} />
      </div>
      
    );
}

export default SearchSideNav;