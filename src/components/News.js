import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import LoadingBar from 'react-top-loading-bar'

export default class News extends Component {

articles=[]

capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

constructor(props){

    super(props);
    console.log('hello i am from news components');
    document.title= `${this.capitalizeFirstLetter(this.props.category)} - NwesMonkey`;
    
    
    this.state = {

        articles: this.articles,
        loading: false,
        page: 1,

    }
}

async componentDidMount(){
  this.props.setProgress(20);
let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=59ef8668b74045d1b73d414e8967c3dc&page=1&pagesize=${this.props.pageSize}`;
this.setState({loading: true})
this.props.setProgress(55);
let data = await fetch(url);
this.props.setProgress(100);

let parseData = await data.json();

this.setState({articles: parseData.articles, totalArtical: parseData.totalResults, loading: false})


}

nextPage = async ()=>{



  this.setState({
    page: this.state.page + 1,
  })
  
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=59ef8668b74045d1b73d414e8967c3dc&page=${this.state.page}&pagesize=${this.props.pageSize}`;
  this.setState({loading: true})
let data = await fetch(url);
let pastData = await data.json();

this.setState({articles: pastData.articles , loading: false})




}

previousPage = async ()=>{

  this.setState({
    page: this.state.page - 1,
  })
  
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=59ef8668b74045d1b73d414e8967c3dc&page=${this.state.page}&pagesize=${this.props.pageSize}`;

  this.setState({loading: true})
let data = await fetch(url);
let pastData = await data.json();

this.setState({articles: pastData.articles, loading: false})


  
}


  render() {
    return (
     
        <div className="container">

        <h2>Top Headlines</h2>

   
      {this.state.loading && <Spinner/> }
     
      
       
        <div className="row">
        
         { !this.state.loading  && this.state.articles.map((element)=>{


           return <div className="col-md-4" key={element.url}>
        
            <Newsitem title={element.title} source={element.source.name} description={element.description} imgUrl={!element.urlToImage ? "https://www.livemint.com/lm-img/img/2024/06/13/1600x900/adam-smigielski-K5mPtONmpHM-unsplash_1700479308572_1718274586121.jpg" : element.urlToImage } newsUrl={element.url}/>
            
            </div>   

         })}
        
        </div>


        <div className="cotainer d-flex justify-content-between">
        <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.previousPage}>&larr; Previous</button>
        <button type="button" disabled={Math.ceil(this.state.totalArtical/this.props.pageSize) <= this.state.page-1}  className="btn btn-dark"  onClick={this.nextPage }>Next &rarr;</button>
        </div>
        
        </div>
        
       

    )
  }
}
