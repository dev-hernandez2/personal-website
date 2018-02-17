import React, {Component} from 'react'
import { Helmet } from 'react-helmet'

import BlogPosts from '../../services/data/blogPost'
import Post from '../../components/blogPost'



import TopHeader from '../../components/TopHeader'

class Blog extends Component {
    state = {
        posts: []
      };
    
      componentDidMount() {
        this.setState({
          posts: BlogPosts
        });
      }
    render() {  
        const posts = this.state.posts   
        return (
            <div className="animated fadeIn">
            <Helmet>
              <meta charSet="utf-8" />
              <title>About | dev_hernandez2 Personal Website</title>
              <meta name="description" content="Hernandez2.com" />
            </Helmet>
    
            <div className="blog-header">
                <div className=" has-text-centered">
                    <TopHeader
                        title="The Great Adventures of a Full Stack Developer"
                        subTitle={
                            <div>
                                <p>
                                    Join me as I search trhought the
                                    digital jungle to learn something new
                                    every week, trying out frameworks,
                                    libraries and new tools .
                                </p>
                            </div>
                        }
                    />
                </div>
            </div>
     
                {
                    posts.map(post => (
                        <Post post={post} key={post.id} />
                    ))
                }
         
          </div>
        )
    }
}
export default Blog