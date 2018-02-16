import React, { Component } from 'react';
import axios from 'axios';

class Stresses extends Component {
  constructor(props){
    super(props);
    this.state = {
      timer:'',
      videoUrls:[],
      memeUrls:[],
      quotes: [],
      route: ''
    }
  }

  componentDidMount = () => {
    this.getStressed();
    // var intervalId = setInterval(this.timerFunc, 1000);
    console.log('MOUNTED')
  }
  getStressed = (e) => {
    let base = this;
    axios.get('/stores/stresses').then(
      (result)=>{
        console.log('undefined?' + result.data[0].videoUrl);
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
 
// timerFunc = (e) =>  {
//     // setState method is used to update the state
//     this.setState({ timer: this.state.timer +1 });
//     console.log(this.state.timer)
//  }

  render(){
    return(
    <div>
      <Video vids={this.state.videoUrls} />
      {/* <Quote quotes={this.state.quotes} /> */}
      <Memes  memes={this.state.memeUrls} />
    </div>
    )
  }
}

class Video extends Component{
  render(){
    let video = this.props.vids[Math.floor(Math.random()*this.props.vids.length)];
    console.log(this.props.vids);
    return(
      <iframe width="560" height="315" src={video} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> 
    )
  }
}

class Memes extends Component {
  render(){
    let meme = this.props.memes[Math.floor(Math.random()*this.props.memes.length)];
    console.log(this.props.memes);
    return(
      <img src={meme} height="315" width="560" />
    )
  }

}

export default Stresses;