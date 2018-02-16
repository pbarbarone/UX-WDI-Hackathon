import React, { Component } from 'react';
import axios from 'axios';

class Muses extends Component {
  constructor(props){
    super(props);
    this.state = {
      timer:'',
      videoUrls:[],
      memeUrls: [],
      quote: '',
      route: ''
    }
  }

  componentDidMount = () => {
    this.getMused();
    // this.getQuote();
  }
  getMused = (e) => {
    let base = this;
    axios.get('/stores/muses').then(
      (result)=>{
        var newVidUrls = this.state.videoUrls;
        var newMemeUrls = this.state.memeUrls;
        for(var i = 0; i < result.data.length; i++){
          newVidUrls.push(result.data[i].videoUrl);
          newMemeUrls.push(result.data[i].memeUrl);
        }
        this.setState({ 
          videoUrls: newVidUrls,
          memeUrls: newMemeUrls });
      }).catch((err)=>{console.log(err);});   
  }

  getQuote = () => {
    console.log('getQuote is being called');
    const url = 'http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en#'
    fetch(url).then(response => {
      response.json().then(data => {
        console.log('returned from quote api', data)
        // this.setState({quote: data[0].content});
      });
  });
};

  render(){
    return(
    <div>
      <Video vids={this.state.videoUrls} />
      <Quote quote={this.state.quote} getQuote={this.getQuote} />
      <Memes  memes={this.state.memeUrls} />
    </div>
    )
  }
}

class Video extends Component{
  render(){
    let video = this.props.vids[Math.floor(Math.random()*this.props.vids.length)];
   //console.log(this.props.vids);
    return(
      <iframe width="560" height="315" src={video} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> 
    )
  }
}

class Memes extends Component {
  render(){
    let meme = this.props.memes[Math.floor(Math.random()*this.props.memes.length)];
    //console.log(this.props.memes);
    return(
      <img src={meme} height="315" width="560" />
    )
  }

}

class Quote extends Component {
  render(){
    console.log("quote component rendering")
    return(
      <div>
        <button onClick={this.props.getQuote}>Refresh the thing</button>
        {this.props.quote}
      </div>
    )
  }
}


export default Muses;