import MenuList from './Menu-list'
import { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

export default function MenuItem({ item }) {
    const [display, setDisplay] = useState(false)

    function handleToggle(getCurrentLabel) {
        setDisplay({
            ...display, [getCurrentLabel]: !display[getCurrentLabel]
        })
    }

    return (
        <div>
            <ul>
                <li >
                    <div className='menu-item-container'>
                        <p>{item.label}</p>
                        {item.children && item.children.length > 0 ?
                            <span onClick={() => handleToggle(item.label)}>
                                {display [item.label] ? <FaMinus size={25}/> : <FaPlus size={25}/>}
                                </span>
                            : null}
                    </div>
                    {
                        item.children && item.children.length > 0 && display[item.label] ?
                            <ul>
                                <MenuList list={item.children} />
                            </ul>
                            : null
                    }
                </li>
            </ul>
        </div>
    )
}
