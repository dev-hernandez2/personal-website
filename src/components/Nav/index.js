import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//logo
import logo from '../../assets/img/logo.svg'


class Nav extends Component {
    
    state = {
        isActive: false,
    }

    menuToggle = () => {
        const currentState = this.state.isActive;
        this.setState({
            isActive: !currentState
        })
        
    }

  render() {

      const classActive = (this.state.isActive ? 'is-active' : '')

    return (

            <nav className="navbar is-transparent navbar-main">
                <div className="container">
                    <div className="navbar-brand">
                        <Link className="logo" to="/">
                            <img src={logo} alt="Logo" width="50"/>
                        </Link>
                        <div className={"navbar-burger burger "  + classActive } onClick={ this.menuToggle.bind(this)} data-target="navbar-menu">
                        <span></span>
                        <span></span>
                        <span></span>
                        </div>
                    </div>
                    <div id="navbar-menu" className={"navbar-menu " + classActive }>
                        <div className="navbar-end">
                            <Link className="navbar-item" to="/about">About</Link>
                            <Link className="navbar-item" to="/blog">Blog</Link>
                        </div>
                    </div>
                </div>
            </nav>

    )
  }
}

export default Nav
