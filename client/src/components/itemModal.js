import React, { Component } from 'react';
import {
    Button,
    Modal, 
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

class ItemModal extends Component {
    state = {
        modal: false, // represents if the modal is open or not
        name: '',
        cost: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmit = (event) => {
        event.preventDefault();

        const newItem = {
            name: this.state.name,
            cost: this.state.cost
            // TODO add nutrition data, price, etc here...
        }

        //Add item vie addItem action
        this.props.addItem(newItem);

        //Close the modal
        this.toggle();
    }

    render() {
        return(
            <div>
                <Button
                color = "dark"
                style = {{marginTop: '1rem', marginBottom: '1rem'}}
                onClick = {this.toggle}
                >Add Item</Button>

                <Modal
                isOpen = {this.state.modal}
                toggle = {this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add To Shopping List</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for='item'>New Item</Label>

                                <Input 
                                style = {{marginBottom: '1em'}}
                                type="text"
                                name="name"
                                id="item"
                                placeholder="Add Shopping item"
                                onChange={this.onChange}
                                />

                                <Input 
                                style = {{marginBottom: '1em'}}
                                type="text"
                                name="cost"
                                id="cost"
                                placeholder="Item price"
                                onChange={this.onChange}
                                />

                                <Button
                                color="dark"
                                style={{marginTop: '2rem'}}
                                block
                                >Add Item</Button>

                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    item: state.item
})

export default connect(mapStateToProps, { addItem })(ItemModal);