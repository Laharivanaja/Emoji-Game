// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, isCompleted} = props
  return (
    <div>
      {isCompleted ? (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt=" emoji logo"
          />
          <h1>Emoji Game</h1>
        </div>
      ) : (
        <div className="container">
          <div className="logo">
            <img
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
              alt=" emoji logo"
            />
            <h1>Emoji Game</h1>
          </div>
          <div className="scores">
            <p>Score: {score}</p>
            <p>Top Score: {topScore}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default NavBar
