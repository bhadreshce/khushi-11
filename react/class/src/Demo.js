import React, { Component } from 'react'

export default class Demo extends Component {

    constructor() {

        super()
        this.state = { count: 0 }
    }



    componentDidMount() {
        console.log('hii this is called');

    }
    static getDerivedStateFromProps(props, state) {
        const newState = {
            count: props.value
        }

        return newState
    }

    componentWillUnmount() {
        console.log('component will unmount');

    }

    Increement() {
        this.setState((prevState) => ({ count: prevState.count + 1 }));

    }
    Decreement() {
        this.setState((prevState) => ({ count: prevState.count - 1 }));
    }

    render() {
        return (
            <>
                <button onClick={() => {
                    this.Increement()
                }}>Increemet</button>
                <h1>{this.state.count}</h1>
                <button onClick={() => {
                    this.Decreement()
                }}>Decreement</button>
            </>
        )
    }
}
