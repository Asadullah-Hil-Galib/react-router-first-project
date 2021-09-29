import React from 'react';
import './SingleContent.css';
const SingleContent = ( props ) => {
    const { strCategory, idCategory, strCategoryThumb, strCategoryDescription } = props.meal;
    console.log(props)
    return (
        <div className="content">
                <img src={strCategoryThumb} alt="" />
                <h2>Content : { idCategory }</h2>
                <h2>{ strCategory }</h2>
                <p>{ strCategoryDescription.substring(0,220)}</p>
        </div>
    );
};

export default SingleContent;