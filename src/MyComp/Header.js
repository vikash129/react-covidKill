import React from 'react'
import '../index.css';

// import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import logo from './logo.png';

export default function Header() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark" >
            
            <Link className="navbar-brand" to="/"><img src ={logo} alt='logo'className = 'App-logo'/> The-CovidKiller</Link>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"></button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Country-Wise-Data <span className="sr-only">(current)</span></Link>
                    </li>

                    <li className="nav-item">
                    <Link className="nav-link" to="/statewise">State-Wise-Data</Link>
                    </li>

                  
                    
                </ul>

        

            </div>

        </nav>

    )
}

// Header.propTypes = {
//     title : PropTypes.string.isRequired,
//     searchBar : PropTypes.bool.isRequired
// }

// Header.defaultProps = {
//     title : 'default title'
// }



