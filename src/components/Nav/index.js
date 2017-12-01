import React, { Component } from 'react';


class Nav extends Component {
    
    constructor() {
        super();
        this.menuToggle = this.menuToggle.bind(this);
    }

    state = {
        isActive: false,
    }

    menuToggle = () => {
        const current = this.state.isActive;
        this.setState({
            isActive: !current
        });
        
    }

  render() {

      const classActive = (this.state.isActive ? 'is-active' : '');

    return (
        <nav className="navbar is-transparent navbar-main">
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://hernandez2.com">
                    <img src="" alt="Logo" width="112" height="28"/>
                    </a>
                    <div className={"navbar-burger burger "  + classActive } onClick={this.menuToggle} data-target="navbar-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                </div>
                <div id="navbar-menu" className={"navbar-menu " + classActive }>
                <div className="navbar-end">
                    <a className="navbar-item" href="/about"> About </a>
                    <a className="navbar-item" href="/blog"> Blog </a>
                </div>
                </div>
            </div>
        </nav>
    );
  }
}

export default Nav;
