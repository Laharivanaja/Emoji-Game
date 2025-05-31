// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, topScore, playAgain} = props
  return (
    <div>
      {score === 12 ? (
        <div className="gamecard">
          <div className="won">
            <h1>You Won</h1>
            <p>Best Score</p>
            <p className="scoress">
              12/12
            </p>
            <button className="buttonns" type="button" onClick={playAgain}>
              Play Again
            </button>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
              alt="win or lose"
            />
          </div>
        </div>
      ) : (
        <div className="gamecard">
          <div className="won">
            <h1>You Lose</h1>
            <p>Score</p>
            <p className="scoress">
              {score}/{topScore}
            </p>
            <button className="buttonns" type="button" onClick={playAgain}>
              Play Again
            </button>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
              alt="win or lose"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default WinOrLoseCard
