import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Nav extends Component {
    
    constructor() {
        super()
        this.menuToggle = this.menuToggle.bind(this);
    }

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
                        <Link className="navbar-item" to="/">
                            <img src="" alt="Logo" width="112" height="28"/>
                        </Link>
                        <div className={"navbar-burger burger "  + classActive } onClick={this.menuToggle} data-target="navbar-menu">
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
