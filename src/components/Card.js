import React from 'react'

function Card({ desc, url }) {
    return (
        <div className='container00'>
            <div className='box00'>
                <div className='text00'>
                    <h1>your bookmark...</h1>
                    <h2 style={{color: '#c7c7c7', lineHeight: '0.8'}}>Title: {desc}</h2>
                    <a href={url}>{url}</a>
                </div>
            </div>
        </div>
    )
}

export default Card
