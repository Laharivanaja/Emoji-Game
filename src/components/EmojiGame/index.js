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

import EmojiCard from '../EmojiCard'

import NavBar from '../NavBar'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, isCompleted: false, clickedEmojis: []}

  onClickedEmojiSymbol = id => {
    const {emojisList} = this.props
    const {clickedEmojis, score} = this.state
    if (clickedEmojis.includes(id)) {
      this.setState(prevState => ({
        isCompleted: true,
        topScore: Math.max(prevState.topScore, prevState.score),
      }))
    } else {
      this.setState(prevState => ({
        clickedEmojis: [...prevState.clickedEmojis, id],
        score: prevState.score + 1,
        isCompleted: score + 1 === 12,
      }))
    }
  }

  playAgain = () => {
    this.setState({score: 0, isCompleted: false, clickedEmojis: []})
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {score, topScore, isCompleted} = this.state
    const {emojisList} = this.props
    const shuffledList = this.shuffledEmojisList()

    return (
      <div className="bg-container">
        <div>
          <NavBar score={score} topScore={topScore} isCompleted={isCompleted} />
        </div>
        <div className="emojis">
          {isCompleted ? (
            <WinOrLoseCard
              score={score}
              topScore={topScore}
              playAgain={this.playAgain}
            />
          ) : (
            <ul className="emojis">
              {shuffledList.map(each => (
                <EmojiCard
                  emojiCardDetails={each}
                  key={each.id}
                  onClickedEmojiSymbol={this.onClickedEmojiSymbol}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
