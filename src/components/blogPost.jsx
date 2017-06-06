import React from "react";

import "./styles/blogPost.less"

export default (props) => {
    if (props.post) {
        let backgroundImage;
        if (props.post.img) {
            backgroundImage = {backgroundImage: `url(${props.post.img})`};
        }
        return (<a href={props.post.link} className="blog-post" style={backgroundImage}>
                <div className="content">
                    <p className="title">{props.post.title}</p>
                    <p className="text">{props.post.text}</p>
                    <p className="author sub">{props.post.author}</p>
                    <p className="date sub">{props.post.date}</p>
                </div>
            </a>
         )
    }
    else {
        return (<a className="blog-post blog-post_loading">
                    <div className="preloader">
                        <div className="arc"></div>
                    </div>
                </a>
        )
    }
}