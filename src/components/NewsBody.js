
import React, { Component } from 'react'
import NewsBox from './NewsBox'

export default class NewsBody extends Component {
    render() {
        return (
            <>
                <div className="px-2 my-3">
                    <div className="card">
                        <h5 className="card-header">General News</h5>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-4">
                                    <NewsBox />
                                </div>
                                <div className="col-md-4">
                                    <NewsBox />
                                </div>
                                <div className="col-md-4">
                                    <NewsBox />
                                </div>
                             
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
