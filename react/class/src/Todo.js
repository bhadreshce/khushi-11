import React, { Component } from 'react'

export default class Todo extends Component {
    constructor() {
        super()
        this.state = { todo: [], IndexId: null }
    }
    addData() {
        // console.log('hii');
        let inpt = document.getElementById('inpt').value
        // console.log(inpt);

        if (this.state.IndexId == null) {
            this.setState({ todo: [...this.state.todo, inpt] })
            console.log(this.state.todo);
            document.getElementById('inpt').value = ''
        } else {
            let newTodo = [...this.state.todo]
            newTodo[IndexId] = inpt
            this.setState({ todo: newTodo })
            document.getElementById('inpt').value = ''
        }

    }

    deleteData(index) {
        let newTodo = [...this.state.todo]
        newTodo.splice(index, 1)
        this.setState({ todo: newTodo })
    }

    updateData(result, index) {

        document.getElementById('inpt').value = result
        this.setState({
            IndexId: index
        })
    }

    componentDidUpdate() {
        console.log(this.state.todo);

    }
    render() {
        return (
            <>
                <input type="text" id='inpt' />
                <button onClick={() => {
                    this.addData()
                }}>{this.state.IndexId == null ? 'Add Data' : 'Update Data'}</button>
                {this.state.todo.map((result, index) => {
                    return (
                        <>
                            <h1 key={index}>{result}</h1>
                            <button onClick={() => {
                                this.deleteData(index)
                            }}>Delete</button>
                            <button onClick={() => {
                                this.updateData(result, index)
                            }}> Update</button>
                        </>
                    )
                })}
            </>
        )
    }
}
