import './index.css'

const WIN_IMG = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const LOSE_IMG = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

const WinOrLoseCard = props => {
  const {length, newGame} = props

  const win = length === 12
  const resultImg = win ? WIN_IMG : LOSE_IMG
  const gameStatus = win ? 'You Won' : 'You Lose'
  const scoreLabel = win ? 'Best Score' : 'Score'

  const playAgain = () => {
    newGame()
  }

  return (
    <div className="result-container">
      <div className="text-container">
        <h1 className="heading3">{gameStatus}</h1>
        <p className="heading4">{scoreLabel}</p>
        <p className="heading5">{length}/12</p>
        <button type="button" className="button1" onClick={playAgain}>
          Play Again
        </button>
      </div>
      <img src={resultImg} alt="win or lose" className="image2" />
    </div>
  )
}

export default WinOrLoseCard
