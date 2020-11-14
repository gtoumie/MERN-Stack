import React, { Component } from 'react';
import { Contaner, Button, ListGroup, ListGroupItem, Container } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v1 as uuid } from 'uuid';

import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions'
import itemReducer from '../reducers/itemReducer';
import PropTypes from 'prop-types';


class ShoppingList extends Component {
    static propTypes = {
        getItems: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
        isAuthenticated: PropTypes.bool
    }
    componentDidMount() {
        this.props.getItems();
    }
    onDeleteHandler = (id) => {
        this.props.deleteItem(id);
    }
    render() {
        const { items } = this.props.item;
        return (
            <Container>
                {/* <Button
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={() => {
                        const name = prompt('Enter item name:');
                        if (name) {
                            this.setState((state) => ({
                                items: [...items, { id: uuid(), name }]
                            }))
                        }
                    }}
                >Add Item</Button> */}

                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({ _id, name }) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    {this.props.isAuthenticated ? (<Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={() => this.onDeleteHandler(_id)}>&times;</Button>) : null }
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList);
