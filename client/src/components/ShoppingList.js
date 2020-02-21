import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button, Row, Col} from 'reactstrap';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import { deleteItem } from '../actions/itemActions';

import PropTypes from 'prop-types';

class ShoppingList extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    }

    render () {
        const { items } = this.props.item;
        return (
            <Container style = {{backgroundColor: 'darkgray'}}>
                <h1>Shopping List</h1>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({_id, name, cost}) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Row>
                                        <Col>
                                            <Button
                                            style={{float: 'left'}}
                                            className="remove-btn"
                                            color="danger"
                                            size="sm"
                                            onClick={this.onDeleteClick.bind(this, _id)}
                                            >&times;</Button>
                                            <div>{name}</div>
                                        </Col>
                                        <Col>
                                            <div style={{float: 'right'}}>{'$' + cost}</div>
                                        </Col>
                                    </Row>      
                                </ListGroupItem>
                            </CSSTransition>
                        ))}    
                    </TransitionGroup>  
                </ListGroup>
            </Container>
        );
    }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(
    mapStateToProps,
    { getItems, deleteItem }
)(ShoppingList);