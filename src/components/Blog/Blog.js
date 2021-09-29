import React, { useEffect, useState } from 'react';
import Blogs from '../Blogs/Blogs';
import './Blog.css';
const Blog = () => {
    const [ blogs, setBlogs ] = useState( [] );
    const apiKey = 'AIzaSyBVKEXz_J-A1dw_AzuXcGKe3mNW-0nA618'
    useEffect( () => {
        fetch( `https://jsonplaceholder.typicode.com/posts` )
            .then( res => res.json() )
            .then( data => setBlogs( data ) );
    },[])
    return (
        <div>
            <h1 className="header-title"> Items Show is--- 
               {
                   blogs.length
                }
            </h1>
            <div className="row">
            {
                blogs.map(blog=> <Blogs blog={blog}></Blogs>)
             }
            </div>
        </div>
    );
};

export default Blog;