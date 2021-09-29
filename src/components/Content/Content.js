import { useEffect, useState } from 'react';
import SingleContent from '../SingleContent/SingleContent';
import './Content.css';

const Contact = () => {
    const [ meals, setMeals ] = useState( [] );
    useEffect( () => {
        fetch( 'https://www.themealdb.com/api/json/v1/1/categories.php' )
            .then( res => res.json() )
            .then( data => setMeals( data.categories ) );
    }, [] )
    
    return (
        <div className="contens">
            {
                meals.map(meal=> <SingleContent meal={meal}></SingleContent>)
            }
        </div>
    );
};

export default Contact;