import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa"

export default class Services extends Component {
    state = {
        services: [
            {
                icon:<FaCocktail/>,
                title:"Free Cocktails",
                info: 'We offer these services and they are the best arounf town'
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info: 'We offer these services and they are the best arounf town'
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free Shuttle",
                info: 'We offer these services and they are the best arounf town'
            },
            {
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info: 'We offer these services and they are the best arounf town'
            }
        ]
    }
    render() {
        return (
            <section className='services'>
                <Title title='services'/>
                <div className='services-center'>
{
    this.state.services.map((item, index) => {
        return <article key={index} className="service">
            <span>{item.icon}</span>
            <h6>{item.title}</h6>
            <p>{item.info}</p>
        </article>
    }

    )
}
                </div>
            </section>
        )
    }
}
