// Context --> Use for Moving infomation around the app
import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state,
            {
                id: Math.floor(Math.random() * 99999),
                title: `Blog Post #${state.length + 1}`
            }
            ];
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload);
        default:
            return state;
    }
};

const addBlogPost = (dispatch) => {
    return () => {
        dispatch({ type: 'add_blogpost' });
    };
};

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_blogpost', payload: id });
    };
};


export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost },
    []
);

/* NOTE: This is the code before createDataContext
import React, { useReducer } from "react";

const BoxContext = React.createContext();

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, { title: `Blog Post #${state.length + 1}` }];
        default:
            return state;
    }
};

export const BoxProvider = ({ children }) => {
    const [blogPosts, dispatch] = useReducer(blogReducer, []);

    const addBlogPost = () => {
        dispatch({ type: 'add_blogpost' });
    };

    return <BoxContext.Provider value={{ data: blogPosts, addBlogPost }}>
        {children}
    </BoxContext.Provider>
};

export default BoxContext;
*/

/* NOTE: This is the code before useReducer
import React, { useState } from "react";

const BoxContext = React.createContext();

export const BoxProvider = ({ children }) => {
    const [blogPosts, setBlogPosts] = useState([]);

    const addBlogPost = () => {
        setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length + 1}` }])
    };

    return <BoxContext.Provider value={{ data: blogPosts, addBlogPost }}>
        {children}
    </BoxContext.Provider>
};

export default BoxContext;
*/