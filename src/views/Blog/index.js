import React, {Component} from 'react'
import { Helmet } from "react-helmet";



import TopHeader from "../../components/TopHeader";

class Blog extends Component {

    render() {
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
          </div>
        )
    }
}
export default Blog;