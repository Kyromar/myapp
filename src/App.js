import React, { Component } from 'react';
import MyComponent from './MyComponent';
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { titre: "titre" }
        this.onclick = this.onclick.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event) {
            event.preventDefault();

            console.log(this.input.value);
            this.setState({ titre: this.input.value })
        }
        /*onChange(event) {}*/
    onclick() {
        this.setState({ titre: 'nouveau titre ' });
    }
    render() {
        return ( <
            div className = "App" >
            <
            h2 onClick = { this.onclick } > { this.state.titre } < /h2> <
            form onSubmit = { this.onSubmit } >
            <
            input ref = { input => this.input = input }
            /> </form >
            <
            MyComponent title =" this is a new component "
            name = "kyri_omar"
            onClick = {
                this.onclick
            }
            / > 
            < /div >
        );
    }
}

export default App;