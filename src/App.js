import React,{Component} from 'react';
import Clock from './Clock';
import {Form,FormControl,Button} from 'react-bootstrap';
import './index.css';

class App extends Component{
   state={Deadline:'December 8,2019',newDeadline:''};

    changeDeadline=()=>{
        this.setState({Deadline:this.state.newDeadline});
        console.log(this.state);
    }

    render(){
        return(
            <div className='App-align'>
                <Form className='App-title'>
                    COUNTDOWN {this.state.Deadline}
                </Form>
                <Clock deadline={this.state.Deadline} />
                <br />
                
                <FormControl 
                    style={{alignContent:'center',marginLeft:500}}

                    className='App-inp' 
                   
                    onChange={event=>this.setState({newDeadline:event.target.value})}
                     
                    placeholder='Enter Date For the Countdown'
                />
                
                <br />
                <Button style={{width:100,height:50}} onClick={()=>this.changeDeadline()}>SUBMIT</Button>
            </div>
        );
    }
} 

export default App;