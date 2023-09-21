// Write your code here.

import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onEnterInput = event => {
    const {count} = this.state
    this.setState({count: count + 1})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="card-cont">
          <h1 className="heading">Calculate the letters you enter</h1>
          <form className="form">
            <label htmlFor="search" className="label">
              Enter the phrase
            </label>
            <input
              id="search"
              type="text"
              placeholder="Enter the phrase"
              className="input"
              onChange={this.onEnterInput}
            />
          </form>
          <div className="letters">
            <p className="letterCount">No.of letters: {count} </p>
          </div>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
