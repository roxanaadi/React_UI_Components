import React, {Component} from 'react';
import './DropdownMenu.css';
import ReactDOM from 'react-dom';


class DropdownMenu extends Component {

        constructor() {
          super()
          this.state = { 
              displayDropdownMenu: false,
              isRed: true
             }

             this.menuRef = null
        }

          changeDisplay = (event) => {
            this.setState ({
                displayDropdownMenu : !this.state.displayDropdownMenu
            })
        }

    componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, true);
    } 

    componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside, true);
    } 

    handleClickOutside = event => {
    
        if (!this.menuRef || !this.menuRef.contains(event.target)) {
            this.setState({
                displayDropdownMenu: false
        });
    }
}


  render () {
     
     const displayMenu = this.state.displayDropdownMenu;
     const menuDisplayStyle =  this.state.displayDropdownMenu ? 'block' : 'none';
     const menuStyle = { display: menuDisplayStyle }

    return (

            <div  ref={ (node) => this.menuRef = node} className="menuContainer" onClick = {this.changeDisplay}>

            <span> {this.props.title}</span> 

                 <ul style = {menuStyle} className="dropdown">
                     {this.props.children} 
                 </ul> 
                
            </div>

    );

  }
  
}

export default DropdownMenu;
