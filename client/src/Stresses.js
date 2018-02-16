import React, { Component } from 'react';
import axios from 'axios';

class Stresses extends Component {
  constructor(props){
    super(props);
    this.state = {
      timer:'',
      urls:[],
      route: ''
    }
  }

  componentDidMount = () => {
    this.getStressed();
    console.log('MOUNTED')
  }
  getStressed = (e) => {
    let base = this;
    axios.get('/stores/stresses').then(
      (result)=>{console.log(result.data);
      }).catch((err)=>{console.log(err);});   
  }
  render(){
    return(
      <div>
        <p>This is Wild Stressful</p>
      </div>
    )
  }
}

export default Stresses;