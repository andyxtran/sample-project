import React, { Component } from 'react';
import '../css/App.css';
import AddComponent from './AddComponent';
import TotalSum from './TotalSum';
import localImg from '../ReactION-logo.png';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      componentsArray: [],
      totalSum: 0,
    }
    this.addComponent = this.addComponent.bind(this);
    this.removeComponent = this.removeComponent.bind(this);
    this.addToTotal = this.addToTotal.bind(this);
  }

  addComponent(val) {
    this.setState({
      componentsArray: [...this.state.componentsArray, { name: val, num: 0 }]
    })
  }

  removeComponent(slot, componentSum) {
    const curComps = this.state.componentsArray;
    const newArray = curComps.filter((el, idx) => idx !== slot);
    this.setState({
      totalSum: this.state.totalSum - componentSum,
      componentsArray: newArray
    })
  }

  addToTotal(id) {
    const curComps = this.state.componentsArray
    curComps.forEach((el, index) => {
      if (index === id) {
        el.num += 1;
      }
    })
    this.setState({
      componentsArray: curComps,
      totalSum: this.state.totalSum + 1
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <img src={localImg} alt="Sample React App for ReactION"></img>
          <TotalSum totalSum={this.state.totalSum} />
        </div>
        <AddComponent events={this.state.componentsArray} addComponent={this.addComponent} removeComponent={this.removeComponent} addToTotal={this.addToTotal} subtractFromTotal={this.subtractFromTotal }/>
      </div>
    )
  }
}

export default App;
