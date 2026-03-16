import './index.css'

const WinOrLoseCard = props => {
  const {score, playAgain} = props
  const isWon = score === 12

  const resultText = isWon ? 'You Won' : 'You Lose'
  const resultImg = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <div className="win-lose-container">
      <div className="details-container">
        <h1 className="result-text">{resultText}</h1>
        <p className="score-text">Score</p>
        <p className="score-value">{score}/12</p>

        <button type="button" className="play-again-btn" onClick={playAgain}>
          Play Again
        </button>
      </div>

      <img src={resultImg} alt="win or lose" className="result-img" />
    </div>
  )
}

export default WinOrLoseCard