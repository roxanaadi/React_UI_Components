import React, {Component} from 'react';
import './Popover.css';

// Popover
class Popover extends Component {

    constructor() {
        super()
        this.state = { 
            displayPopover: false
           }
      }

      changeDisplayState = () => {
        this.setState({
            displayPopover : !this.state.displayPopover 
        })
        console.log("display state: ", this.state.displayPopover );
    }

    render () {

        const contentDisplay = { display: this.state.displayPopover ? 'block' : 'none'};

        return (

       <div className="popover"> 

            <p onClick = {this. changeDisplayState} className="popoverClickText"> 
                {this.props.title}
            </p>

            <div style = {contentDisplay} className="popoverContent">
                {this.props.children}
            </div>

       </div>

    );

  }
  
}

export default Popover;