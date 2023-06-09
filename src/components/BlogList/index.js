import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogList extends Component {
  state = {
    isLoading: true,
    blogsList: [],
  }

  componentDidMount() {
    this.getBlogsList()
  }

  getBlogsList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(item => ({
      id: item.id,
      title: item.title,
      imageUrl: item.image_url,
      avatarUrl: item.avatar_url,
      author: item.author,
      topic: item.topic,
    }))

    this.setState({
      isLoading: false,
      blogsList: updatedData,
    })
  }

  render() {
    const {isLoading, blogsList} = this.state

    return (
      <div className="blog-list-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogsList.map(eachBlog => (
            <BlogItem key={eachBlog.id} blogData={eachBlog} />
          ))
        )}
      </div>
    )
  }
}

export default BlogList
