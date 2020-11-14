import React from 'react'
import {Fragment, NavLink} from 'reactstrap';
import {connect } from 'react-redux';
import {logout} from '../../actions/authActions';
import PropTypes from 'prop-types';

export class Logout extends React.Component {
    static propTypes = {
        logout: PropTypes.func.isRequired
    };
    render () {
        return <div>
                <NavLink onClick={this.props.logout} href="#">Logout</NavLink>
        </div>;
    }
}
export default connect (null, {logout})(Logout);