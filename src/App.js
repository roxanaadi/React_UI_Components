import React, {Component} from 'react';
import './App.css';
import DropdownMenu from './components/DropdownMenu';
import './components/DropdownMenu.css';

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
             blabla 
        </DropdownMenu>

      </div>
    );

  }
  
}

export default App;
