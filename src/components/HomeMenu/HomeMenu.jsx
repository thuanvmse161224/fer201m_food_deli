import React, { useState, useEffect } from 'react'
import { data } from '../HomeMenu/FoodList'
import "../HomeMenu/HomeMenu.scss"
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function HomeMenu() {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/categories')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div className='HomeMenu-Container'>
            <div className='HomeMenu-Big'>
                <div className='HomeMenu-Header'>These is something for everyone!</div>
                <div className='HomeMenu-Body'>

                    {data.map((data) => (
                        <div key={data.foodID}>
                            <Link style={{ textDecoration: 'none' }} to={`/catePage/${data.cateName}`}>
                                <div className='HomeMenu-Column'>
                                    <div className='HomeMenu-Card'>
                                        <img src={data.foodImg} />
                                        <h4 className='HomeMenu-Name'>{data.cateName}</h4>
                                    </div>
                                </div>
                            </Link>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )

}