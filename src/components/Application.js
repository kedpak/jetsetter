import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';
import CountDown from './CountDown';
import NewItem from './NewItem';
import Items from './Items';

import './Application.css';

const defaultState = [
  { value: 'Pants', id: uniqueId(), packed: false },
  { value: 'Jacket', id: uniqueId(), packed: false },
  { value: 'iPhone Charger', id: uniqueId(), packed: false },
  { value: 'MacBook', id: uniqueId(), packed: false },
  { value: 'Sleeping Pills', id: uniqueId(), packed: true },
  { value: 'Underwear', id: uniqueId(), packed: false },
  { value: 'Hat', id: uniqueId(), packed: false },
  { value: 'T-Shirts', id: uniqueId(), packed: false },
  { value: 'Belt', id: uniqueId(), packed: false },
  { value: 'Passport', id: uniqueId(), packed: true },
  { value: 'Sandwich', id: uniqueId(), packed: true },
];

const packed = [];
const unpacked = [];

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Set the initial state,
      item: defaultState
    }
    this.setPack = this.setPack.bind(this);
  }


  // How are we going to manipualte the state?
  // Ideally, users are going to want to add, remove,
  // and check off items, right?
  setPack() {
    this.state.item.map(item => {
    return item.packed === false ? unpacked.push(item) : packed.push(item)
    })
  }

  render() {
    // Get the items from state
    this.setPack();
    return (
      <div className="Application">
        <NewItem />
        <CountDown />
        <Items title="Unpacked Items" items={unpacked} />
        <Items title="Packed Items" items={packed} />
        <button className="button full-width">Mark All As Unpacked</button>
      </div>
    );
  }
}

export default Application;
