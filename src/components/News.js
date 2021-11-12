
import React, { Component } from 'react'
import NewsBox from './NewsBox'
import Spinner from './Spinner'

export default class News extends Component {
    articles = [
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "Centre cuts excise duty on petrol, diesel - Times of India",
            "description": "India Business News: In a big relief to consumers ahead of Diwali, the government on Wednesday announced reduction in excise duty on petrol and diesel.Excise duty on petro",
            "url": "https://timesofindia.indiatimes.com/business/india-business/centre-cuts-excise-duty-on-petrol-diesel/articleshow/87512919.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-87512913,width-1070,height-580,imgsize-106008,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2021-11-03T16:10:00Z",
            "content": "Centre cuts excise duty on petrol, diesel"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Tech",
            "title": "Terror times in store for NASA's James Webb Space Telescope engineers - HT Tech",
            "description": "NASA's team for the James Webb Space Telescope project has a date with “2 weeks of terror\".",
            "url": "https://tech.hindustantimes.com/tech/news/terror-times-in-store-for-nasa-s-james-webb-space-telescope-engineers-71635954086139.html",
            "urlToImage": "https://images.hindustantimes.com/tech/img/2021/11/03/1600x900/James_Webb_Space_Telescope_ESA_1635954655087_1635954696732.jpg",
            "publishedAt": "2021-11-03T15:41:25Z",
            "content": "The replacement for the National Aeronautics and Space Administration's (NASA) Hubble Space Telescope, the James Webb Space telescope is being readied for launch and it is almost ready to fly into sp… [+3219 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "Pak. denies airspace to Home minister inaugurated Srinagar-Sharjah flight - The Hindu",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMiiAFodHRwczovL3d3dy50aGVoaW5kdS5jb20vbmV3cy9uYXRpb25hbC9wYWtpc3Rhbi1yZWZ1c2VzLWdvLWZpcnN0cy1zcmluYWdhci1zaGFyamFoLWZsaWdodC10by1nby10aHJvdWdoLWl0cy1haXJzcGFjZS9hcnRpY2xlMzczMjE5MjEuZWNl0gGNAWh0dHBzOi8vd3d3LnRoZWhpbmR1LmNvbS9uZXdzL25hdGlvbmFsL3Bha2lzdGFuLXJlZnVzZXMtZ28tZmlyc3RzLXNyaW5hZ2FyLXNoYXJqYWgtZmxpZ2h0LXRvLWdvLXRocm91Z2gtaXRzLWFpcnNwYWNlL2FydGljbGUzNzMyMTkyMS5lY2UvYW1wLw?oc=5",
            "urlToImage": null,
            "publishedAt": "2021-11-03T15:40:44Z",
            "content": null
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "BCCI appoints Rahul Dravid as head coach of Indian men's senior cricket team - Times of India",
            "description": "Cricket News: Former captain Rahul Dravid was on Wednesday appointed as the head coach of the Indian men's cricket team by the BCCI. The former India captain will t",
            "url": "https://timesofindia.indiatimes.com/sports/cricket/news/bcci-appoints-rahul-dravid-as-head-coach-of-indian-mens-senior-cricket-team/articleshow/87513437.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-87513417,width-1070,height-580,imgsize-19180,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2021-11-03T15:27:00Z",
            "content": "Congratulations Rahul Dravid for becoming the coach of Indian Mens Cricket Team. Indian players will be hugely ben https://t.co/gmY3kfvSRb\r\n— Venkatesh Prasad (@venkateshprasad) 1635953287000"
        },
        {
            "source": {
                "id": null,
                "name": "Firstpost"
            },
            "author": null,
            "title": "Highlights, New Zealand vs Scotland, T20 World Cup 2021 Cricket Match Updates: New Zealand win by 15 runs - Firstpost",
            "description": "New Zealand vs Scotland Live Score, T20 World Cup 2021 Today's Match Updates: Check out Live Cricket Score, live streaming and updates, when and where to watch of NZ vs Scot today’s match live, playing 11 on Hotstar Cricket, Star Sports and DD Sports.",
            "url": "https://www.firstpost.com/firstcricket/sports-news/highlights-new-zealand-vs-scotland-t20-world-cup-2021-cricket-match-updates-new-zealand-win-by-15-runs-10106751.html",
            "urlToImage": "https://images.firstpost.com/wp-content/uploads/2021/11/Sodhi-dismissing-Kohli-640_AP.jpg",
            "publishedAt": "2021-11-03T13:58:12Z",
            "content": "Toggle between tabs to view scorecard and ball-by-ball commentary\r\nEngland vs Sri Lanka, Latest Updates, T20 World Cup 2021: New Zealand 172/5 (20 overs), Scotland 156/5 (20 overs)\r\nNew Zealand will … [+2410 chars]"
        }
    ]
    constructor() {
        super();
        console.log("i am news  constructor");
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1
        }
    }
    async componentDidMount() {
        console.log('cdm');
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=ec2115d017b3450b82eb5f9e083bd260&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parseData = await data.json(data);
        this.setState({ articles: parseData.articles, totalResults: parseData.totalResults, loading: false })

    }
    handlePrevClick = async () => {
        console.log("Prev");
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=ec2115d017b3450b82eb5f9e083bd260&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true})
        let data = await fetch(url);
        let parseData = await data.json(data);
        this.setState({
            page: this.state.page - 1,
            articles: parseData.articles,
            loading: false
        })
    }
    handleNextClick = async () => {
        console.log("Next");
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=ec2115d017b3450b82eb5f9e083bd260&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading: true})
            let data = await fetch(url);
            let parseData = await data.json(data);
            this.setState({
                page: this.state.page + 1,
                articles: parseData.articles,
                loading: false
            })
        }

    }

    render() {
        return (
            <>
                <div className="px-2 my-3">
                    <div className="card">
                        <h4 className="card-header">General News - Top Headlines</h4>
                        {this.state.loading && <Spinner />}
                        <div className="card-body">
                            <div className="row">
                                {this.state.articles.map((element) => {
                                    // console.log(element)
                                    return <div className="col-md-4 my-3" key={element.url}>
                                        <NewsBox title={element.title ? element.title : "Title Not Available"} description={element.description ? element.description.slice(0, 150) : "Descipriton not available"} imageUrl={element.urlToImage ? element.urlToImage : "https://images.hindustantimes.com/tech/img/2021/11/03/1600x900/James_Webb_Space_Telescope_ESA_1635954655087_1635954696732.jpg"} newsUrl={element.url} sourceName={element.source.name} publishedAt={element.publishedAt}/>
                                    </div>
                                })}
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between">
                                <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr;&nbsp;Previous</button>

                                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next&nbsp;&rarr;</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
