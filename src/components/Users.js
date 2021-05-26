import React, { Component } from "react";
import { connect } from 'react-redux'

import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import {
    setUser, unsubUser
} from "../store/actionsCreators/UserActionCreator";

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: 0
        }


    }

    renderLoginForm = () => {
        return (
            <>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="6">
                            <p className="h4 text-center mb-4">Sign in</p>
                            <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                                Your name
        </label>
                            <input type="text" id="defaultFormLoginEmailEx" className="form-control" value={this.state.name}
                                onChange={(e) => {
                                    this.setState({
                                        name: e.target.value
                                    })
                                }}
                            />
                            <br />
                            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                                Your age
        </label>
                            <input type="number" id="defaultFormLoginPasswordEx" className="form-control" value={this.state.age}
                                onChange={(e) => {
                                    this.setState({
                                        age: e.target.value
                                    })
                                }}
                            />
                            <div className="text-center mt-4">
                                <button onClick={() => { this.handleSetUsers() }} >Subscribe</button>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </>
        )
    }

    handleSetUsers = () => {
        this.props.setUserfunct(this.state.name, this.state.age)
    }

    handleUnsubscribeUser = () => {
        this.props.unsubUserfunct()
    }

    render() {
        return (
            <React.Fragment>
                {this.props.userName != "N-A" ? (
                    <>
                        <p>Current subscribed user is: </p>
                        <b>Name:    </b><p>{this.props.userName}</p>
                        <b>Age:    </b><p>{this.props.age}</p>
                        <button onClick={() => { this.handleUnsubscribeUser() }} >Unsubscribe</button>
                    </>
                ) : this.renderLoginForm()}
            </React.Fragment>
        )
    }

}




const mapStateToProps = (state, ownProps) => ({
    userName: state.MyReducer.userName,
    age: state.MyReducer.userAge
})

const mapDispatchToProps = (dispatch) => {
    return {
        setUserfunct: (name, age) => dispatch(setUser(name, age)),
        unsubUserfunct: () => dispatch(unsubUser())
    }

};

// We normally do both in one step, like this:
export default connect(mapStateToProps, mapDispatchToProps)(Users)

//export default Users
