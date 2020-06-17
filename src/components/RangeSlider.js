import React, {Component} from 'react';
import './RangeSlider.css';

class RangeSlider extends Component {

    constructor() {
        super()
        this.state = { 
            rangeValue: 50
           }
      }

      updateRangeValue = (event) => {
          this.setState ({
              rangeValue: event.target.value
          })
      }

    render () {

        return (
            <div className="sliderContainer">

                <input
                onChange = {this.updateRangeValue} 
                className="slider" 
                type="range" 
                min={0} 
                max={100}   
                step={10}
                value = {this.state.rangeValue}/>

                <p className="minMaxValues">
                    <span className="minValue">0</span>
                    <span className="maxValue">100</span>
                </p>
                
                <p className="sliderValue">
                    Value: <span>{this.state.rangeValue}</span>
                </p>
                
           </div>
    );

  }

}

export default RangeSlider;
