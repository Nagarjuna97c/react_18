import './index.css'

const NavBar = props => {
  const {score, topScore, gameOngoing} = props

  return (
    <div className="nav-bar-container">
      <div className="logo-and-brand-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo-image"
        />
        <h1 className="heading1">Emoji Game</h1>
      </div>
      {gameOngoing ? (
        <div className="score-container">
          <p className="heading2">Score: {score}</p>
          <p className="heading2">Top Score: {topScore}</p>
        </div>
      ) : null}
    </div>
  )
}

export default NavBar
