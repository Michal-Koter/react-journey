import {Fragment, useState, useEffect, Component} from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';

const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' },
];

class UserFinder extends Component {
    constructor() {
        super();
        this.state = {
            filteredUsers: DUMMY_USERS,
            searchTerm: "",
        }
    }

    // equivalent to useEffect with searchTerm as dependency
    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchTerm !== this.state.searchTerm) {
            this.setState({
                filteredUsers: DUMMY_USERS.filter((user) =>
                    user.name.toLowerCase().includes(this.state.searchTerm))
            });
        }
    }

    searchChangeHandler(event) {
        this.setState({searchTerm: event.target.value.toLowerCase()});
    }

    render() {
        return (
            <Fragment>
                <div className={classes.finder}>
                    <input type='search' onChange={this.searchChangeHandler.bind(this)} />
                </div>
                <Users users={this.state.filteredUsers} />
            </Fragment>
        );
    }
}

export default UserFinder;