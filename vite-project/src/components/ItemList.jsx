/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {faGlobe} from '@fortawesome/free-solid-svg-icons'
import { faBusinessTime } from '@fortawesome/free-solid-svg-icons'
import { faAward } from '@fortawesome/free-solid-svg-icons'
import { faRuler } from '@fortawesome/free-solid-svg-icons'
import { faBullhorn } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faUniversalAccess } from '@fortawesome/free-solid-svg-icons'
import { faT } from '@fortawesome/free-solid-svg-icons'


const iconMap={
    'Search':<FontAwesomeIcon icon={faMagnifyingGlass}/>,
    'Language':<FontAwesomeIcon icon={faGlobe}/>,
    'Business':<FontAwesomeIcon icon={faBusinessTime} />,
    'Recognition':<FontAwesomeIcon icon={faAward} />,
    'Ruler':<FontAwesomeIcon icon={faRuler} />,
    'Advert':<FontAwesomeIcon icon={faBullhorn} />,
    'TLD':<FontAwesomeIcon icon={faCheck} />,
    'Sales':<FontAwesomeIcon icon={faUniversalAccess} />,
    'T':<FontAwesomeIcon icon={faT} />

    
}

function ItemList({items}) {
  return (
    <div className='item-list'>
        {items.map((item,index)=>(
            <div key={index} className='item'>
                <div className='icon'>
                    {iconMap[item.icon]}
                </div>
                <div className='content'>
                    <h1>{item.title}</h1>
                    <p>{item.subtitle}</p>
                </div>
                </div>
        ))}

       

    </div>
  )
}

export default ItemList