import React, {Component} from 'react';
import './App.css';
import DropdownMenu from './components/DropdownMenu';
import './components/DropdownMenu.css';
import Tabs from './components/CollapsibleAccordion';
import './components/CollapsibleAccordion.css';

class App extends Component {
  render () {

    return (
      <div className="App">
        
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

        <Tabs title="Tab 1">
            <h3> Tab 1 - #Random Text Generated</h3>
            <p>
            Luckily friends do ashamed to do suppose. Tried meant mr smile so. Exquisite behaviour as 
            to middleton perfectly. Chicken no wishing waiting am. Say concerns dwelling graceful six 
            humoured. Whether mr up savings talking an. Active mutual nor father mother exeter change six did all. 
            </p>
        </Tabs>
        <Tabs title="Tab 2">
            <h3> Tab 2 - #Random Text Generated</h3>
            <p>
            Betrayed cheerful declared end and. Questions we additions is extremely incommode. Next half add call
             them eat face. Age lived smile six defer bed their few.
             Had admitting concluded too behaviour him she. Of death to or to being other. 
            </p>
        </Tabs>
        <Tabs title="Tab 3">
            <h3> Tab 3 - #Random Text Generated</h3>
            <p>
            Ecstatic advanced and procured civility not absolute put continue. Overcame breeding or my concerns
             removing desirous so absolute. My melancholy unpleasing imprudence considered in advantages so impression. 
             Almost unable put piqued talked likely houses her met. Met any nor may through resolve entered. An mr
             cause tried oh do shade happy.  
            </p>
        </Tabs>     

      </div>
    );

  }
  
}

export default App;
