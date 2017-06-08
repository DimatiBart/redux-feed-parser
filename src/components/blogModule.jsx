import React from "react";
import Swiper from 'swiper';

import BlogPost from "./blogPost.jsx";

//import "./styles/blogModule.less";
import "../../node_modules/swiper/dist/css/swiper.css";

class BlogModule extends React.Component {
    constructor(props) {
        super(props);
        this.mobileQuery = window.matchMedia("(max-width: 640px)");
        this.state = {isMobile: this.mobileQuery.matches};
    }
    render() {
        let blogPosts = [];
        if (this.state.isMobile) {
            blogPosts = this.props.posts.map((el, i) => (
                <div className="swiper-slide">
                    <BlogPost key={i} post={el}/>
                </div>
            ))
        }
        else {
            let slideChilds = [];
            this.props.posts.forEach((el, i) => {
                if (i % 4 === 0 && i !== 0 || i === this.props.posts.length) {
                    blogPosts.push((
                        <div className="swiper-slide">
                            {slideChilds}
                        </div>
                    ));
                    slideChilds = [];
                }
                slideChilds.push( <BlogPost key={i} post={el}/> );
            })
        }

        if (blogPosts.length === 0) {
            for(let i = 0; i < 4; i++) {
                blogPosts.push(<BlogPost key={i}/>)
            }
        }
        return (
            <div className="blog-module swiper-container">
                <div className="swiper-wrapper">
                    {blogPosts}
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.initEventHandlers();
        this.props.loadPosts(this.props.url);
        this.swiper = new Swiper (".blog-module.swiper-container");
    }
    componentDidUpdate() {
        this.swiper.update();
    }
    initEventHandlers(){
        this.mobileQuery.addListener(() => {this.setState({isMobile: this.mobileQuery.matches})});
    }
}

export default BlogModule;