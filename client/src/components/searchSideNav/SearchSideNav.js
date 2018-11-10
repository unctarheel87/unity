import React from 'react';
import StockSearchBar from '../stockSearchBar';
import StockSearchSuggestions from '../StockSearchSuggestions';
import "./index.css"

function SearchSideNav(props) {

    return  (
      <div className="sideNavFlex">
        <StockSearchBar value={props.value}
          onChange={props.onChange}
          onClick={props.onClick}
        />
        <StockSearchSuggestions peers={props.peers} shortcutClick={props.shortcutClick}/>
      </div>
      
    );
}

export default SearchSideNav;