import {connect} from "react-redux";

import BlogModule from "../components/blogModule.jsx";
import {loadData} from "../actions/blogModule";

let mapStateToProps = (state) => {
    return {
        isLoaded: state.isLoaded,
        posts: state.posts
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        loadPosts: (url)=> { dispatch(loadData(url)) }
    }
}

let BlogContainer =  connect(mapStateToProps, mapDispatchToProps)(BlogModule)

export default BlogContainer;