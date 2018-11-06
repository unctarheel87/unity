import React from 'react';
import { Icon } from 'react-materialize';
import './stockSearchBar.css';

function StockSearchBar(props) {

    return  (

      <div className="stock-search-bar">
        <h4>Stock Search</h4>
        <form className="search-stockbar-form">
          <input className="search-stockbar-input" placeholder="Enter company ticker "
                value={ props.value }
                onChange={ props.onChange } />
          <button onClick={ props.onClick }><Icon className="search-stockbar-button" small>search</Icon></button>
        </form>
      </div>
      
    );
}

export default StockSearchBar;