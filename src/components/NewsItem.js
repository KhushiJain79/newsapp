import React, { Component } from 'react'

export class NewsItem extends Component {
   
    render() {
      let {title,description,imageurl,newsurl,author,publishedAt,source}=this.props;
    return (
      <div>
        <div className="card h-100 my-3">
  <img src={imageurl?imageurl:"https://images.hindustantimes.com/tech/img/2023/10/28/1600x900/moon-2762111_1920_1698471130632_1698471246191.jpg"} className="card-img-top"  alt="..."/>
  <div className="card-body d-flex flex-column">
  <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%',zindex:1}}>
    {source}
  </span>
    <h5 className="card-title">{title}....</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By {author} on {new Date(publishedAt).toGMTString()}</small></p>
  <a href={newsurl} target="_blank"  rel="noreferrer" className="btn btn-primary btn-sm">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
