import React from 'react'

export default function User({user}) {
    const {login, avatar_url, html_url, followers, 
        following, name, bio, created_at, public_repos, twitter_username} = user
  return (
    <div className='user-card'>
        <div>
            <img src={avatar_url} alt="User" className='user' />
        </div>
        {/* <p>{name}</p> */}
        <div className='user-info'>Github link:<a href={`https://github.com/${login}`}>{name || login}</a>
        <p>User joined on {created_at.slice(0, 10)}</p>
        <p>Followers: {followers}</p>
        <p>Repositories: {public_repos}</p>
        </div>

    </div>
  )
}
