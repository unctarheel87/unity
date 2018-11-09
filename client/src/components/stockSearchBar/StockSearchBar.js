import React from 'react';
import { Icon } from 'react-materialize';
import './stockSearchBar.css';

function StockSearchBar(props) {

    return  (

      <div className="card">
        <div className="card-content">
          <div className="stock-search-bar">
            <h5>Stock Search</h5>
            <form className="search-stockbar-form">
              <input className="search-stockbar-input" placeholder="Enter company ticker "
                    value={ props.value }
                    onChange={ props.onChange } />
              <button className="search-stockbar-button btn sc-bdVaJa gVMrss" onClick={ props.onClick }><Icon>search</Icon></button>
            </form>
          </div>
        </div>
      </div>
      
    );
}

export default StockSearchBar;