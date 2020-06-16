import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-3">User Management</h1>
                <p className="lead">using reactjs with json</p>
                <hr className="my-2" />
            </div>
        );
    }
}

export default Header;