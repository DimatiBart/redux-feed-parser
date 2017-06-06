import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {createStore} from 'redux'
import {install} from 'redux-loop';
import { composeWithDevTools } from 'redux-devtools-extension';

import BlogReducer from "./reducers/blogModule";
import BlogModule from "./containers/BlogContainer";

const store = createStore(BlogReducer, composeWithDevTools(install()));

render(
    <Provider store={store}>
        <BlogModule url={"http://www.statravel.co.uk/travel-blog/feed/"}/>
    </Provider>, 
    document.getElementById("app")
)