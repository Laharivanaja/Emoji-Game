// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, isCompleted} = props

  return (
    <div className="navbar">
      <div className="logo-box">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>

      {!isCompleted && (
        <div className="score-box">
          <p className="score-pill">Score: {score}</p>
          <p className="score-pill">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
