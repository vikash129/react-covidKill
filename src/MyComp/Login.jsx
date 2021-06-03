import React, { Component } from 'react'
import {Redirect} from 'react-dom'
import {Todos} from './Todos'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email: ''

        }

    }


    login(e) {
        e.preventDefault()

        let url = 'http://localhost:8000/login?q=' + this.state.username


        fetch(url).then((response) => {

            response.json().then((result) => {
                console.log(result)

                if (result.length) {
                    localStorage.setItem( 'login' , this.state.username )

                    alert(`${this.state.username} successfully loged in`)


                    window.location.href = '/'

                }
                else {
                    { alert('no username found') }

                }
            }
            )
        })

    }

    signup(e) {
        e.preventDefault()

        let url = 'http://localhost:8000/login'

        let options = {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(this.state)
        }

        try {
            fetch(url, options).then((response) => {

                response.json().then((result) => {

                    console.log(this.state)


                    localStorage.setItem( 'login' , this.state.username )

                    alert(` ${this.state.username} .. successfull sign up`)


                }
                )
            })

        }
        catch (e) {
            console.log(e)
        }
    }


    render() {



        return (
            <div className="d-flex justify-content-center">

                <form className='container mt-3 d-flex  flex-column align-items-center' >

                    <h1>Login</h1>


                    <div className="form-group">

                        username : <input type="text" className="form-control mx-2" name="" id="name" aria-describedby="helpId" placeholder="Username " onChange={(e) => { this.setState({ username: e.target.value }) }} />
                    </div>


                    <div className="form-group">

                        email :  <input type="text" className="form-control mx-2" name="" id="pwd" aria-describedby="helpId" placeholder="search todo" onChange={(e) => { this.setState({ email: e.target.value }) }} autoComplete='dd' />
                    </div>
                    <button type="submit" className="btn btn-outline-primary mt-2" onClick={(e) => { this.login(e) }}> Login </button>

                </form>



                <form className='container mt-3 d-flex align-items-center flex-column' >

                    <h1>Sign Up</h1>

                    <div className="form-group">

                        name <input type="text" className="form-control mx-2" name="" id="name" aria-describedby="helpId" placeholder="Username " onChange={(e) => { this.setState({ username: e.target.value }) }} />
                    </div>


                    <div className="form-group">

                        email  <input type="text" className="form-control mx-2" name="" id="pwd" aria-describedby="helpId" placeholder="Enter email " onChange={(e) => { this.setState({ email: e.target.value }) }} autoComplete='dd' />
                    </div>
                    <button className="btn btn-outline-primary mt-2" onClick={(e) => { this.signup(e) }}> Create Account </button>

                </form>





            </div>


        )
    }
}

export default Login
