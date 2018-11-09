import React from 'react';
import { Icon, Button, Card } from 'react-materialize';
import './stockSearchBar.css';
import styled from "styled-components";

const StyledButton = styled(Button)`
    &&&&&&{
      margin-left: 20px;
      border: 2px solid #336780;
      color: #336780;
      background-color: #fff;
      border-radius: 12px;
    }
    &:hover{
      background: #336780;
      color: #fff;
    }
`
function StockSearchBar(props) {

  return (
    <Card>
      <div className="stock-search-bar">
        <h5 className="stockSearchTitle">Stock Search</h5>
        <form className="search-stockbar-form">
          <input className="search-stockbar-input" placeholder="     Enter company ticker"
            value={props.value}
            onChange={props.onChange} />
          <StyledButton className="search-stockbar-button" onClick={props.onClick}><Icon className="btn primary">search</Icon></StyledButton>
        </form>
      </div>
      </Card>
    
  );
}

export default StockSearchBar;