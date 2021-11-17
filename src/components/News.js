
import React, { Component } from 'react'
import NewsBox from './NewsBox'
import Spinner from './Spinner'
import PropTypes from 'prop-types';

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
            page: 1
        }
        document.title =`${this.CapitalizeFirstLetter(this.props.category)} - E-Guptchar || Umesh` ;
    }
    async UpdateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=ec2115d017b3450b82eb5f9e083bd260&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parseData = await data.json(data);
        this.setState({ articles: parseData.articles, totalResults: parseData.totalResults, loading: false })
    }
    async componentDidMount() {
        console.log('cdm');
        this.UpdateNews();

    }
    handlePrevClick = async () => {
        console.log("Prev");
        this.setState({ page: this.state.page - 1 })
        this.UpdateNews();
    }
    handleNextClick = async () => {
        console.log("Next");
        this.setState({ page: this.state.page + 1 });
        this.UpdateNews();
    }

    render() {
        return (
            <>
                <div className="px-2 my-3">
                    <div className="card">
                        <h4 className="card-header text-center">E-Guptchar - Top {this.CapitalizeFirstLetter(this.props.category)} Headlines</h4>
                        {this.state.loading && <Spinner />}
                        <div className="card-body">
                            <div className="row">
                                {!this.state.loading && this.state.articles.map((element) => {
                                    return <div className="col-md-4 my-3" key={element.url}>
                                        <NewsBox title={element.title ? element.title : "Title Not Available"} description={element.description ? element.description.slice(0, 150) : "Descipriton not available"} imageUrl={element.urlToImage ? element.urlToImage : "https://images.hindustantimes.com/tech/img/2021/11/03/1600x900/James_Webb_Space_Telescope_ESA_1635954655087_1635954696732.jpg"} newsUrl={element.url} sourceName={element.source.name} publishedAt={element.publishedAt} author={element.author} />
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
