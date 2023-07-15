import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    head: 0,
    tail: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onClickToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        head: prevState.head + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevState => ({
        tail: prevState.tail + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
    this.setState(prevState => ({total: prevState.total + 1}))
  }

  render() {
    const {head, total, imageUrl, tail} = this.state
    return (
      <div className="coin-container">
        <div className="toss-container">
          <h1 className="coin-heading">Coin Toss Game</h1>
          <p className="coin-description">Heads (or) Tails</p>
          <img src={imageUrl} className="img" alt="toss result" />
          <button className="button" type="button" onClick={this.onClickToss}>
            Toss Coin
          </button>
          <div className="coin-details">
            <p className="description">Total:{total}</p>
            <p className="description">Heads:{head}</p>
            <p className="description">Tails:{tail}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
