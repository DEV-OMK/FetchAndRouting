import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogData

  return (
    <Link to={`/blogs/${id}`} className="blog-item-link">
      <div className="blog-item-container">
        <img src={imageUrl} className="blog-item-image" alt={`item${id}`} />
        <div className="blog-item-info">
          <p className="blog-item-topic">{topic}</p>
          <h2 className="blog-item-title">{title}</h2>
          <div className="author-info">
            <img className="avatar" src={avatarUrl} alt={`avatar${id}`} />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
