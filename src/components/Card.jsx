import React from 'react'
function Card({ urls, download,name }) {
    return (
        <div className="card">
            <a href={download}> <img className="card-img-top" src={urls.small} alt="Card " title="click to download" /></a>
    
        </div>
    )
}

export default Card
