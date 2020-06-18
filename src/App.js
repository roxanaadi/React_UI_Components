import React, {Component} from 'react';
import './App.css';
import DropdownMenu from './components/DropdownMenu';
import './components/DropdownMenu.css';
import CollapsibleAccordion from './components/CollapsibleAccordion';
import './components/CollapsibleAccordion.css';
import RangeSlider from './components/RangeSlider';
import './components/RangeSlider.css';
import Popover from './components/Popover';
import Modal from './components/Modal';
import './components/Modal.css'

class App extends Component {
  render () {

    return (
      <div className="App">

        <h3 className="title">Dropdown Menu</h3>
        
        <DropdownMenu title="HOME">
            <li>#Home</li>
        </DropdownMenu>
        <DropdownMenu title="List">
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
        </DropdownMenu>
        <DropdownMenu title="About"> 
            <li>#About</li>
        </DropdownMenu>
        <DropdownMenu title="Contact"> 
            <li>Name: Jane Doe</li>
            <li>Number: 123456</li>
        </DropdownMenu>
        <DropdownMenu title="Newsletter">
            <li> blabla </li>
        </DropdownMenu>

        <h3 className="title">Collapsible Accordion</h3>

        <CollapsibleAccordion title="Accordion 1">
            <h3> Section 1 - #Random Text Generated</h3>
            <p>
                Luckily friends do ashamed to do suppose. Tried meant mr smile so. Exquisite behaviour as 
                to middleton perfectly. Chicken no wishing waiting am. Say concerns dwelling graceful six 
                humoured. Whether mr up savings talking an. Active mutual nor father mother exeter change six did all. 
            </p>
          </CollapsibleAccordion>

        <CollapsibleAccordion title="Accordion 2">
            <h3> Section 2 - #Random Text Generated</h3>
            <p>
                Betrayed cheerful declared end and. Questions we additions is extremely incommode. Next half add call
                them eat face. Age lived smile six defer bed their few.
                Had admitting concluded too behaviour him she. Of death to or to being other. 
            </p>
        </CollapsibleAccordion>
        <CollapsibleAccordion title="Accordion 3">
            <h3> Section 3 - #Random Text Generated</h3>
            <p>
                Ecstatic advanced and procured civility not absolute put continue. Overcame breeding or my concerns
                removing desirous so absolute. My melancholy unpleasing imprudence considered in advantages so impression. 
                Almost unable put piqued talked likely houses her met. Met any nor may through resolve entered. An mr
                cause tried oh do shade happy.  
            </p>
        </CollapsibleAccordion> 

        <h3 className="title">Popover</h3>

        <Popover title="Some text you can click on.">
            <h4>Title</h4>
            <p>
                This is a popover. Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas pretium aenean pharetra
                magna ac. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis.
            </p>
        </Popover>

        <h3 className="title">RangeSlider</h3>

        <RangeSlider/>

        <Modal/>

      </div>
    );

  }
  
}

export default App;
