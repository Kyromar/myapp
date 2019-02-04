import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes ={
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onClick:PropTypes.fun
}
const defaultProps = {
    name:" fuck u bitch "
}
class MyComponent extends Component {



    render() {
        const { title, name, onClick } = this.props;
        return ( <
            div className = "MyComponent" >

            <
            h1 > { title } < /h1>  <
            h2 onClick = { onClick }> {
                name 
            } <
            /h2>  < /
            div >
        )
    }
}
MyComponent.defaultProps=defaultProps;
MyComponent.propTypes=propTypes;

export default MyComponent;