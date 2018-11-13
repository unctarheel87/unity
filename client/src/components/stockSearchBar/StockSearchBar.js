import React from 'react';
import { Icon, Button, Card } from 'react-materialize';
import './stockSearchBar.css';
import styled from "styled-components";

function StockSearchBar(props) {

    return  (
     <Card className='card-box z-depth-4'>  
      <div className="card">
        <div className="card-content">
          <div className="stock-search-bar">
            <h5 className="stock-search-title">Stock Search</h5>
            <form className="search-stockbar-form">
              <input className="search-stockbar-input" placeholder="Company ticker"
                    value={ props.value }
                    onChange={ props.onChange } />
              <button className="search-stockbar-button btn sc-bdVaJa gVMrss" onClick={ props.onClick }><Icon>search</Icon></button>
            </form>
          </div>
        </div>
      </div>
      </Card>
    
  );
}

export default StockSearchBar;