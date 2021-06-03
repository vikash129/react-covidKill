import React, { Component } from 'react'

export default class DateTime extends Component {

    constructor(props) {
    super(props)
        this.state = { date : new Date() }
    }

    componentDidMount(){
        this.timerId = setInterval( () =>    this.tick()    ,1000   )
    }

    componentWillUnmount(){
        clearInterval(this.timerId)
    }

    tick(){
        this.setState({date : new Date()})
    }

    render() {
        return (
            <div className = 'd-inline bg-white text-danger border-outline-danger p-2' style = {{fontSize : '1rem' , borderRadius : '1rem' , fontWeight:'1rem'}}>
                {this.state.date.toLocaleString()}
            </div>
        )
    }
}
