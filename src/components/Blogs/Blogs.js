import React from 'react';
import './Blogs.css';

const Blogs = ( props ) => {
    const {userId, id, title, body } = props.blog;
    return (
        <div className="item">
            <h3>User ID : { userId }</h3>
            <h3>Id : { id }</h3>
            <h2>{ title }</h2>
            <p>{ body}</p>
        </div>
    );
};

export default Blogs;