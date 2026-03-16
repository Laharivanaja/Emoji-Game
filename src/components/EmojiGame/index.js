import {Component} from 'react'

import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    clickedEmojis: [],
    isCompleted: false,
  }

  onClickedEmojiSymbol = id => {
    this.setState(prevState => {
      const {clickedEmojis, score, topScore} = prevState

      if (clickedEmojis.includes(id)) {
        return {
          isCompleted: true,
          topScore: Math.max(topScore, score),
        }
      }

      const newScore = score + 1
      const updatedList = [...clickedEmojis, id]

      return {
        score: newScore,
        clickedEmojis: updatedList,
        isCompleted: newScore === 12,
        topScore: newScore > topScore ? newScore : topScore,
      }
    })
  }

  playAgain = () => {
    this.setState({
      score: 0,
      clickedEmojis: [],
      isCompleted: false,
    })
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return [...emojisList].sort(() => Math.random() - 0.5)
  }

  render() {
    const {score, topScore, isCompleted} = this.state
    const shuffledList = this.shuffledEmojisList()

    return (
      <div className="bg-container">
        <NavBar score={score} topScore={topScore} isCompleted={isCompleted} />

        {isCompleted ? (
          <WinOrLoseCard score={score} playAgain={this.playAgain} />
        ) : (
          <ul className="emojis-list">
            {shuffledList.map(each => (
              <EmojiCard
                key={each.id}
                emojiCardDetails={each}
                onClickedEmojiSymbol={this.onClickedEmojiSymbol}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default EmojiGame