import React from "react";
import { Link } from "react-router-dom"
import { Button, Card } from "react-materialize"
import "./index.css"
import styled from "styled-components"

const StyledButton = styled(Button)`
    &{
      margin-left: 20px;
      border: 1px solid #336780;
      color: #336780 !important;
      background-color: #fff;
      border-radius: 5px;
      // border-radius: 12px;
    }
    &:hover{
      background: #336780;
      color: #fff !important;
    }
`


export default class RequireSignIn extends React.Component {

    handleType = () => {
        if (this.props.type === "notUser") {
            return <p> Must sign in as a User to view your User Dashboard. </p>
        } else if (this.props.type === "notAdvisor")
            return <p> Must sign in as an Advisor to view your Advisor Dashboard. </p>
    }
    render() {
        return (
            <div className="deniedContainer container">
                <Card className="deniedCard">
                    <div className="deniedHeader">
                        {this.handleType()}
                    </div>
                    <Link to="/">
                        <StyledButton>
                            Return to Home Page
                        </StyledButton>
                    </Link>
                </Card>
            </div>
        )
    }
}