import React, { Component } from 'react'
import cssHome from "./Home.module.css"
import image1 from './image/avataaars.svg'
export default class Home extends Component {
    render() {
        return (
            <div className={`${cssHome.bg}`}>
                <div className='text-center text-white'>
                    <div className={`${cssHome.imageSize}`}>
                        <img className='img-fluid ' src={image1} />
                    </div>
                    <div>
                        <h1 className={`${cssHome.h1Style}`}>START REACT</h1>
                        <p className={`${cssHome.pStyle}`}>Graphic Artist - Web Designer - Illustrator</p>
                    </div>

                </div>
            </div>
        )
    }
}
