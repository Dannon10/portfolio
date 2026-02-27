import React from 'react'
import MenuItem from './Menu-item'

export default function MenuList({list = []}) {
    return (
            <ul className='menu-list-container'>
            {
                list.map(listItem => <MenuItem key={listItem.id} item={listItem} />)
            }
            </ul>
    )
}
