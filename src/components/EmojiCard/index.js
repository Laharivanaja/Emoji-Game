import './index.css'

const EmojiCard = props => {
  const {emojiCardDetails, onClickedEmojiSymbol} = props
  const {id, emojiName, emojiUrl} = emojiCardDetails

  const handleClick = () => {
    console.log('emoji clicked', id)
    onClickedEmojiSymbol(id)
  }

  return (
    <li className="emoji-item">
      <button
        type="button"
        className="emoji-button"
        onClick={handleClick}
      >
        <img
          src={emojiUrl}
          alt={emojiName}
          className="emoji-image"
        />
      </button>
    </li>
  )
}

export default EmojiCard