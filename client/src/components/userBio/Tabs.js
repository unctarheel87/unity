import React from "react";
import Favorites from "./Favorites"
import Recents from "./Recents"
import Advisor from "./Advisor"

export default class Tabs extends React.Component {
    state = {
        tabPage: "Home"
    };

    handlePageChange = page => {
        this.setState({ tabPage: page });
        console.log(this.state.tabPage);
    };

    renderPage = () => {
        if (this.state.tabPage === "Favorites") {
            return <Favorites />
        } else if (this.state.tabPage === "Recents") {
            return <Recents />;
        } else if (this.state.tabPage === "Advisor") {
            return <Advisor />;
        }
    }

    render() {
        return (
            <div>
                <button
                    onClick={() => this.handlePageChange("Favorites")}
                    className={this.state.tabPage === "Favorites" ? "active" : "deactive"}
                > Favorites </button>
                <button
                    onClick={() => this.handlePageChange("Recents")}
                    className={this.state.tabPage === "Recents" ? "active" : "deactive"}
                > Recent Searches </button>
                <button
                    onClick={() => this.handlePageChange("Advisor")}
                    className={this.state.tabPage === "Advisor" ? "active" : "deactive"}
                > Advisor </button>
                {this.renderPage()}
            </div>

        )
    }
}