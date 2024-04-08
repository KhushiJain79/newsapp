import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
 
  static defaultProps={
    country:'in',
    pageSize:8,
    category:'general'
  } 
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }
 capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
    constructor(props){
        super(props);
        this.state={
articles:[],
loading:false,
page:1,
totalResults:0
}
document.title=`${this.capitalizeFirstLetter(this.props.category)}-NewsMonkey`;
    }
    async componentDidMount(){
    this.updateNews();
    }
    async updateNews()
       {
        // this.props,setProgress(10);
   const url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page-1}&pageSize=${this.props.pagesize}`;
   this.setState({
     loading:true
   })
   let data=await fetch(url);
   let parsedata=await data.json();
   this.setState({articles:parsedata.articles,
  totalResults:parsedata.totalResults,
loading:false});
   
 } 
    handlePreviousClick=async()=>{
      this.setState({page:this.state.page-1});
      this.updateNews();
     }

 handleNextClick=async()=>{
      this.setState({page:this.state.page+1});
      this.updateNews();
    }
   fetchMoreData =  async() => {
    this.setState({page:this.state.page+1});
   
    const url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page-1}&pageSize=${this.props.pagesize}`;
   this.setState({
     loading:true
   })
   let data=await fetch(url);
   let parsedata=await data.json();
   this.setState({articles:this.state.articles.concat(parsedata.articles),
  totalResults:parsedata.totalResults,
loading:false});
  };

  render() {
    return (
      <div>
       <div className="container my-3"> 
       <h2 className='text-center'>NewsMonkey Top {this.capitalizeFirstLetter(this.props.category)}-Headlines</h2>
      {/* { this.state.loading && <Spinner/>} */}
       <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">

          </div>
       <div className="row">
        {this.state.articles.map((element)=>{
        return <div className="col-md-4" key={element.url}>
       <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage}
       newsurl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name}/>
        </div>
       })}
       </div></InfiniteScroll>
        </div>
      <div className="container d-flex justify-content-between">
      <button  disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
      <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> 
      </div>
    )
  }
}

export default News