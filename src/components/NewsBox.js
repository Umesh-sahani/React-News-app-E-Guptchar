import React, { Component } from 'react'

export default class NewsBox extends Component {

    render() {
        let {title, description, imageUrl, newsUrl, sourceName, publishedAt, author} = this.props;
        return (
            <>
                <div className="card">
                <span class="badge badge-danger m-1 p-1" style={{position: 'absolute'}}>{sourceName}</span>
                    <img src={imageUrl} className="card-img-top" alt={title} />

                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>
                        <p class="card-text"><small class="text-black rounded bg-warning p-1">{author?`By ${author}`:''}  {new Date(`${publishedAt}`).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})}</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </>
        )
    }
}
