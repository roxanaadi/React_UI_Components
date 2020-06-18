import React, {Component} from 'react';
import './Tabs_UI.css';

class Tabs_UI extends Component {

    constructor(props) {
            super(props);
            this.state = { 
                openTabName: 'tab1'
            }
    }

    changeState = (newTabName) => {
        this.setState({ 
            openTabName: newTabName
        })
    }
    
    render () {

            return (

                <div className="tabsContainer">

                    <div className="tab">
                    {/* <button onClick = { () => this.updateState(id)} className="buttonStyle">Tab 1</button> */}
                    <button onClick={ () => this.changeState('tab1') } className="buttonStyle">Tab 1</button>
                    <button onClick={ () => this.changeState('tab2') } className="buttonStyle">Tab 2</button>
                    <button onClick={ () => this.changeState('tab3') } className="buttonStyle">Tab 3</button> 
                    </div>


    
                    <div className={`tabContent ${this.state.openTabName === 'tab1' ? "show" : "hide" }`}>
                            <h3> Tab 1 - #Random Text Generated</h3>
                            <p>
                            Luckily friends do ashamed to do suppose. Tried meant mr smile so. Exquisite behaviour
                            as to middleton perfectly. Chicken no wishing waiting am. Say concerns dwelling graceful
                            six humoured. Whether mr up savings talking an. Active mutual nor father mother exeter change six did all. 
                            </p>
                    </div>
                    <div className={`tabContent ${this.state.openTabName === 'tab2' ? "show" : "hide" }`}>
                            <h3> Tab 2 - #Random Text Generated</h3>
                            <p>
                            Betrayed cheerful declared end and. Questions we additions is extremely incommode. Next half add call them eat face. Age lived smile six defer bed their few. Had admitting concluded too behaviour him she. Of death to or to being other. 
                            </p>
                    </div>

                    <div className={`tabContent ${this.state.openTabName === 'tab3' ? "show" : "hide" }`}>
                            <h3> Tab 3 - #Random Text Generated</h3>
                            <p>
                            Ecstatic advanced and procured civility not absolute put continue. Overcame breeding or my concerns removing desirous so absolute. My melancholy unpleasing imprudence considered in advantages so impression. Almost unable put piqued talked likely houses her met. Met any nor may through resolve entered. An mr cause tried oh do shade happy. 
                            </p>
                    </div>

                </div>
    );

  }
  
}

export default Tabs_UI;