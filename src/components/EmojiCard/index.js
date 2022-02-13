import './index.css'

const EmojiCard = props => {
  const {itemDetails, clickedEmoji} = props
  const {id, emojiName, emojiUrl} = itemDetails

  const addClickedEmoji = () => {
    clickedEmoji(id)
  }

  return (
    <li className="card-container">
      <button className="button" type="button" onClick={addClickedEmoji}>
        <img src={emojiUrl} alt={emojiName} className="image1" />
      </button>
    </li>
  )
}

export default EmojiCard
