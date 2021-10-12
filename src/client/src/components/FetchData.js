import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './FetchData.css'

export class FetchData extends Component {
  displayName = FetchData.name

    constructor(props) {
        super(props);
      
        this.state = {
            forecasts: [],
            Data: '',
            fulltext: '',
            loading : false
        };
        this.updateState = this.updateState.bind(this);
        this.onSubmitt = this.onSubmitt.bind(this);
    }
    updateState(e) {
        this.setState({ fulltext: e.target.value });
        console.log(this.state.fulltext);
    }
      
    onSubmitt() {
        console.log(this.state.fulltext);
        this.setState({
            loading : true
        })


        setTimeout(()=>{
            this.setState({
                loading : false
            })
        },5000)
    //   fetch('http://localhost:3400/summarizer/summary', {

    //       method: 'POST',
    //       body: JSON.stringify({
    //           url: this.state.fulltext,
    //           num: this.state.num
    //       }),
    //       headers: {
    //           'Content-Type': 'application/json'
    //       }
    //   })
    //  .then(response =>
    //       response.json().then(data => ({
    //           data: data,
    //           status: response.status
    //       })
    //       ).then(res => {
    //           console.log(res.data);
    //           this.setState({ Data: res.data })
    //           console.log(this.state.Data);
    //       }));
  }

  
 
   
  

  render() {
    

    return (
        <div className="form-group fetch-head">
            
            <h1><strong>Summarize your Text</strong></h1>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon">
                        <i className="fas fa-pencil-alt prefix"></i>
                    </span>
                </div>
            <textarea style={{width:'78vw',height:'30vh'}} className="form-control" placeholder="Raw Data" id="noter-text-area" name="fulltext" value={this.state.fulltext} onChange={this.updateState} />
            </div>
            <span></span>
            {/* <div className="input-group">
                <input id="num" type="numbers" className="form-control" name="num" value={this.state.num} placeholder="select from 1-10" max="10" onChange={this.numbersub} />
            </div> */}
            <div className="fetch_load">
            {
                this.state.loading ? <div style={{background:'#0d6efd',color:'#0d6efd',borderRadius:'50%'}} class="lds-hourglass"></div> : <Button style={{background:'#0d6efd',color:'white'}} onClick={this.onSubmitt} >Process</Button>
            }
            </div>
           
                
                
            

            {/* <p>SUMMARY HERE.</p> */}
            <textarea id="noter-text-area" style={{width:'78vw',height:'30vh'}} name="textarea" placeholder="Processed Text" value={this.state.Data}/>
            
      </div>
    );
  }
}
