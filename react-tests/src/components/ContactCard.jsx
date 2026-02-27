import {FaStar} from 'react-icons/fa';
import { useState } from 'react';
export default function ContactCard() {

    const [contact, setContact] = useState({
        firstname: 'Dannon',
        lastname: 'Abayomi',
        phone: '+234-810-662-4869',
        email: 'abayomidannon10@gmail.com',
        isFavorite: false,
    })

    const toggleFavourite= () => {
        setContact({...contact, isFavorite: !contact.isFavorite})
    }
  return (
    <div>
        <main>
            <img src="/assets/react.svg" alt=""/>
            <div className="info">
                <button 
                onClick={toggleFavourite}
                className={contact.isFavorite ? 'active' : 'inactive'}
                >
                    <FaStar/>
                    </button>
                <h2>{contact.lastname} {contact.firstname}</h2>
                <p>{contact.phone}</p>
                <p>{contact.email}</p>
            </div>
        </main>
    </div>
  )
}
