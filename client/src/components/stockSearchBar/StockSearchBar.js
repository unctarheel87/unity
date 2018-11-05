import React from 'react';
import { Icon } from 'react-materialize';
import './stockSearchBar.css';

function StockSearchBar(props) {

    return  (

      <div className="stock-search-bar">
        <h3>Stock Search</h3>
        <form className="search-stockbar-form">
          <input className="search-stockbar-input" placeholder="Enter company ticker "
                value={ props.value }
                onChange={ props.onChange } />
          <button className="search-stockbar-button" onClick={ props.onClick }><Icon className="btn primary">search</Icon></button>
        </form>
      </div>
      
    );
}

export default StockSearchBar;