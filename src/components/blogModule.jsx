import React from "react";

import BlogPost from "./blogPost.jsx";

import "./styles/blogModule.less";

class BlogModule extends React.Component {
    render() {
        let blogPosts = this.props.posts.map((el, i) => <BlogPost key={i} post={el}/>);
        if (blogPosts.length === 0) {
            for(let i = 0; i < 4; i++) {
                blogPosts.push(<BlogPost key={i}/>)
            }
        }
        return (
            <div className="blog-module">
                {blogPosts}
            </div>
        )
    }
    componentDidMount(){
        this.props.loadPosts(this.props.url);
    }
}

export default BlogModule;