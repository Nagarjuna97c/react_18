/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {clickedEmojisList: [], topScore: 0, gameOngoing: true}

  clickedEmoji = id => {
    const {clickedEmojisList, topScore} = this.state
    const currentScore = clickedEmojisList.length
    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }

    if (clickedEmojisList.includes(id)) {
      this.setState({gameOngoing: false, topScore: newTopScore})
    } else {
      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
      }))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  newGame = () => {
    this.setState({gameOngoing: true, clickedEmojisList: []})
  }

  render() {
    const {emojisList} = this.props
    const {clickedEmojisList, topScore, gameOngoing} = this.state
    const clickedEmojisListLength = clickedEmojisList.length
    const score = clickedEmojisListLength

    let shuffledEmojisList1 = emojisList

    if (clickedEmojisListLength > 0) {
      shuffledEmojisList1 = this.shuffledEmojisList()
    }

    return (
      <div className="main-container">
        <NavBar score={score} topScore={topScore} gameOngoing={gameOngoing} />
        <div className="sub-container">
          {gameOngoing ? (
            <ul className="emojis-container">
              {shuffledEmojisList1.map(eachItem => (
                <EmojiCard
                  key={eachItem.id}
                  itemDetails={eachItem}
                  clickedEmoji={this.clickedEmoji}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoseCard
              length={clickedEmojisListLength}
              newGame={this.newGame}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
