import Timer from './Timer';
import React, {Component} from 'react';

const textArray = ['Inhale', 'Exhale'];

class Breathe extends Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
  }
  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 4000);
  }
  componentDidUnmount() {
    clearInterval(this.timeout);
  }
  render() {
    let textThatChanges = textArray[this.state.textIdx % textArray.length];
    return (
      <>
        <div class="breathe-tool">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
        </div>
        <span class="navbar">{textThatChanges}</span>

        <Timer />
      </>
    )
  }
}

export default Breathe;

