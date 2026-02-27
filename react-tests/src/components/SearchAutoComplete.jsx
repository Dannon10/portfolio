import { useState, useEffect } from 'react';
import Suggestions from './Suggestions.JSX';


export default function SearchAutoComplete() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [show, setShow] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);


    async function fetchListUsers(search) {
        try {
            setLoading(true);
            const res = await fetch(`https://dummyjson.com/users`);
            const data = await res.json();
            console.log(data);
            if (!res.ok) {
                throw new Error(data.message || 'Something went wrong!');
            }
            setUsers(data.users.map(userItem => userItem.firstName));
            setError(null);
            setLoading(false);
        } catch (e) {
            setLoading(false);
            setError(e.message || 'Something went wrong!');
        }
    }

    useEffect(() => {
        fetchListUsers();
    }, []);

    function handleChange(e) {
        const query = e.target.value.toLowerCase();
        setSearch(query); 
        if(query.length > 1 ) {
            const filteredData = users && users.length ? 
            users.filter(item =>item.toLowerCase().indexOf(query) > -1)
            : []
            setFilteredUsers(filteredData);
            setShow(true);
        }else {
            setShow(false);
        }
    }

    function handleClick(value) {
        setSearch(value);
        setFilteredUsers([]);
        setShow(false);
    }

    return (
        <div>
            {loading ? (<p>Loading...</p>) : (
            <input
                type="text"
                placeholder="Search users here..."
                name="search-users"
                value={search}
                onChange={handleChange} />
            )}
            {error && <p>{error}</p>}
            
                {
                show ? <Suggestions 
                data={filteredUsers} 
                handleClick={handleClick}
                query={search}/> : null}
        </div>
    )
}
