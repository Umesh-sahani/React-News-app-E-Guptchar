
import React, { Component } from 'react'
import NewsBox from './NewsBox'
import Spinner from './Spinner'
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 6,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    CapitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        console.log("i am news  constructor");
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.CapitalizeFirstLetter(this.props.category)} - E-Guptchar || Umesh`;
    }
    async UpdateNews() {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=ec2115d017b3450b82eb5f9e083bd260&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(30);
        let parseData = await data.json(data);
        this.props.setProgress(75);
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false
        })
        this.props.setProgress(100);
    }
    async componentDidMount() {
        console.log('cdm');
        this.UpdateNews();

    }


    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 });
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=ec2115d017b3450b82eb5f9e083bd260&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parseData = await data.json(data);
        this.setState({
            articles: this.state.articles.concat(parseData.articles),
            totalResults: parseData.totalResults,
            loading: false
        })
    }

    render() {
        return (
            <>
                <h5 className="text-center text-white bg-secondary p-2 mt-2 mx-1 rounded">E-Guptchar - Top {this.CapitalizeFirstLetter(this.props.category)} Headlines</h5>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container-fluid ">
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4 my-2" key={element.url}>
                                    <NewsBox title={element.title ? element.title : "Title Not Available"} description={element.description ? element.description.slice(0, 200) : "Descipriton not available"} imageUrl={element.urlToImage ? element.urlToImage : "https://images.hindustantimes.com/tech/img/2021/11/03/1600x900/James_Webb_Space_Telescope_ESA_1635954655087_1635954696732.jpg"} newsUrl={element.url} sourceName={element.source.name} publishedAt={element.publishedAt} author={element.author} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
                <hr />



            </>
        )
    }
}
