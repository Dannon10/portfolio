import { useEffect, useState } from "react"
import User from "./User"

export default function GithubProfileFinder() {

    const [loading, setLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState(false)
    const [username, setUsername] = useState('Dannon10')
    const [userData, setUserData] = useState(null)

    const fetchGithubUserData = async () => {
        try {
            setLoading(true)
            setErrorMsg("")
            setUserData(null)
            const res = await fetch(`https://api.github.com/users/${username}`)

            if (!res.ok) {
                if (res.status === 404) {
                throw new Error("User not found! Please enter a valid username")
                } else {
                    throw new Error("Something went wrong")
                }
            }
            const data = await res.json();
            setUserData(data)
                // setErrorMsg('User not found')
                // setUserData(null)
                setLoading(false)
                console.log(data)
        } catch (e) {
            setErrorMsg(e.message || "Something went wrong")
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchGithubUserData()

    }, [])

    function handleSubmit() {
        if (username === '') {
            setErrorMsg('Please enter a username')
            return
        } else if( username)
        fetchGithubUserData()
    }

    return (
        <div className="git-container">
            {loading ? <div>Loading data! Please wait...</div> : null}
            {errorMsg ? <div> Error occured! {errorMsg} </div> : null}
            <div className="input-container">
                <input
                className="input"
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    name="search-by-username"
                    placeholder="Search Github Username..."
                    value={username}
                />
                <button className="btn-search" onClick={() => handleSubmit()}>Search</button>
            </div>
            {userData !== null ? <User user={userData} /> : null}
        </div>
    )
}
