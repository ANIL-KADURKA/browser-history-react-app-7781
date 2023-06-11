import './index.css'

const HistoryItem = props => {
  const {HistoryEachItem, uniqueNo, onDeleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl} = HistoryEachItem

  const onDelete = () => {
    onDeleteHistory(uniqueNo)
  }
  return (
    <li className="list-container">
      <div className="content-container">
        <p className="para">{timeAccessed}</p>
        <img src={logoUrl} className="logo" alt="domain logo" />
        <p className="para2">{title}</p>
        <p className="para3">{domainUrl}</p>
      </div>
      <button
        className="delete-button"
        onClick={onDelete}
        type="button"
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="delete-Button"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
