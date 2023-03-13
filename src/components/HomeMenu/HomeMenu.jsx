import React, { useState } from 'react'
import { data } from '../HomeMenu/FoodList'
import "../HomeMenu/HomeMenu.scss"
export default function HomeMenu() {

    const [homemenu, setHomeMenu] = useState([])
    return (
        <div className='HomeMenu-Container'>
            <div className='HomeMenu-Big'>
                <div className='HomeMenu-Header'>These is something for everyone!</div>
                <div className='HomeMenu-Body'>

                    {data.map((menu) => (
                        <a style={{textDecoration: 'none'}} href={`/`}>
                            <div className='HomeMenu-Column' key={menu.id}>
                                <div className='HomeMenu-Card'>
                                    <img src={menu.img} />
                                    <h4 className='HomeMenu-Name'>{menu.name}</h4>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )

}