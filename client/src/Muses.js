import React, { Component } from 'react';
import axios from 'axios';

class Muses extends Component {
  constructor(props){
    super(props);
    this.state = {
      timer:'',
      urls:[],
      route: '',
      quoteTest: ''
    }
  }

  componentDidMount = () => {
    this.getMused();
    this.getQuote();
    console.log('MOUNTED')
  }
  getMused = (e) => {
    let base = this;
    axios.get('/stores/muses').then(
      (result)=>{console.log(result.data);
      }).catch((err)=>{console.log(err);});   
  }

  getQuote = (e) => {
    let base= this;
    console.log('quote firing');
    axios.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=1').then(
      (function(response){
        console.log(response.title);
      })
    )
  }
  render(){
    return(
      <div>
        <p>This is Wild NIIIICE</p>
      </div>
    )
  }
}

export default Muses;