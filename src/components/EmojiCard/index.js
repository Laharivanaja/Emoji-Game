// Write your code here.
const EmojiCard = props => {
  const {emojiCardDetails, onClickedEmojiSymbol} = props
  const {id, emojiName, emojiUrl} = emojiCardDetails
  const onClickedEmoji = () => {
    onClickedEmojiSymbol(id)
  }
  return (
    <li key={id}>
      <button className="emoji-card-btn" onClick={onClickedEmoji} type="button">
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
