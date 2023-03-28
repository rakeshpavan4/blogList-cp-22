import './index.css'

const BlogItem = props => {
  const {details} = props
  const {title, description, publishedDate} = details
  return (
    <li>
      <div className="title-date-container">
        <h1 className="item-title">{title}</h1>
        <p className="item-date">{publishedDate}</p>
      </div>
      <p className="item-description">{description}</p>
      <hr />
    </li>
  )
}

export default BlogItem
