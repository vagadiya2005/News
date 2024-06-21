import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {

   let {title,description,imgUrl,newsUrl,source} = this.props;

    return (
      <div className='my-4'>

      <div className="card" >
    
<div  style={{display: 'flex',
  justifyitems: 'flex-end',
  position: 'absolute',
  right: '0'}}>
<span class=" badge rounded-pill bg-danger" >{source}</span>
</div>

  <img src={ imgUrl } className="card-img-top" alt="..."/>
  
  <div className="card-body">
    <h5 className="card-title">{title}        </h5>
   
    <p className="card-text">{description}</p>
    <a href={newsUrl} target='_blank' className="btn btn-primary">Go somewhere</a>
  </div>
</div>
        
      </div>
    )
  }
}
