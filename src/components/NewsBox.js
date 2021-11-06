import React, { Component } from 'react'

export default class NewsBox extends Component {

    // constructor(){
    //     super();
    //     console.log('i am constructor')
    //     this.state = {
            
    //     }
    // }


    render() {
        let {title, description, imageUrl, newsUrl} = this.props;
        return (
            <>
                <div className="card">
                    <img src={imageUrl} className="card-img-top" alt={title} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </>
        )
    }
}
