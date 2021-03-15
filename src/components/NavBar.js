import React, { Component } from 'react'
import Logo from '../images/logo.png'
// import Menu from '../images/menu-24px.svg'
 import MenuIcon from '@material-ui/icons/Menu';

// import {FaAlignRight} from 'react-icons/fa'
import { Link } from 'react-router-dom'



export default class Navbar extends Component {

    state ={
        isOpen: false
    }

    handleToggle = ()=>{
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
                <nav className='navbar'>
                    <div className='nav-center'>
                        <div className='nav-header'>
                            <Link to = '/'>
                                <img src={Logo} alt='logo' className='logo'/>
                            </Link>
                            <button type='button' className='nav-btn' onClick={this.handleToggle}>
                               <MenuIcon className='nav-icon'/>
                            </button>
                        </div>
                        <ul className={this.state.isOpen?'nav-links show-nav':'nav-links'}>
                            <li>
                                <a  href = '/' onClick={this.handleToggle}>Home</a>
                            </li>
                            <li>
                            <a href = '#about' onClick={this.handleToggle}>About</a>
                            </li>
                            <li>
                            <a href = '#contact' onClick={this.handleToggle}>Contact us</a>
                            </li>
                            <li>
                            <a href = '#mission' onClick={this.handleToggle}>Mission</a>
                            </li>
                        
                         </ul>

                    </div>
                </nav>
        
        )
    }
}

