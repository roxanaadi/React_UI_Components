import React, {Component} from 'react';
import './CollapsibleAccordion.css';

// Collapsible Accordion 
class Tabs extends Component {

    constructor() {
        super()
        this.state = { 
            displayAccordion: false,
           }
      }

      changeDisplayState = () => {
          this.setState({
              displayAccordion : !this.state.displayAccordion 
          })
        //   console.log("state display: ", this.state.displayAccordion);
      }

    render () {

        const contentDisplay = { display: this.state.displayAccordion ? 'block' : 'none'};

        return (
            <div className="accordionContainer">

                <div className="buttonContainer">
                    <button onClick = {this.changeDisplayState} type="button" className="btnStyle">
                        {this.props.title}
                    </button>
                </div>

                <div style = {contentDisplay} className="accordionContent">
                    {this.props.children}
                </div>
    
        </div>
    );

  }
  
}

export default Tabs;