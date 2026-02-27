import React from 'react'

export default function Entry(data) {
  return (
    <div>
<img src={data.img} alt={data.title}/>
<p>{data.title}</p>
<a href={data.link}>View on google map</a>
<p>{data.date}</p>
<p>{data.country}</p>
<p>{data.text}</p>
    </div>
  )
}
