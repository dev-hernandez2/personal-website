import React, {Component} from 'react'


class Post extends Component {
    render() {
        const post = this.props.post
        const fullBackground = {
            background: `url(${post.image}) center center / cover no-repeat `,
        };
        return(
        <a href={post.url} target="_black" >
            <article className="blog-post" style={{...fullBackground}} >
                <section className="blog-post-container gradient ">
                    <header>
                        <h1 className="blog-post-title">{post.title}</h1>
                    </header>
                </section>
            </article>
        </a>
        )
    }
} 

export default Post