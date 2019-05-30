import React,{Component} from 'react';
import './index.css'

class Clock extends Component{

   state={days:0,hours:0,minutes:0,seconds:0};

//    componentWillMount(){
//     this.getTimeUntil(this.props.deadline)
//    }
   componentDidMount(){
        this.getTimeUntil(this.props.deadline)
        setInterval(()=>this.getTimeUntil(this.props.deadline),1000);
   }
    
    getTimeUntil(deadline){
        const time=Date.parse(deadline) - Date.parse(new Date());
        
        console.log('time',time);

        const seconds=Math.floor(time/(1000)%60);
        const minutes=Math.floor(time/(1000*60)%60);
        const hours=Math.floor(time/(1000*60*60)%24);
        const days=Math.floor(time/(1000*60*60*24));
        console.log('second ',seconds,'minutes ',minutes,'hour ',hours,'day ',days);
        
        this.setState({days,minutes,seconds,hours});
    }

    pad0(num){
        if(num < 10){
            return '0'+num;
        }
        else{
            return num;
        }
    }
    render(){
        return(

            <div>
                <div className='App-time'>{this.pad0(this.state.days)} Days</div>
                <div className='App-time'>{this.pad0(this.state.hours)} Hours</div>
                <div className='App-time'>{this.pad0(this.state.minutes)} Minutes</div>
                <div className='App-time'>{this.pad0(this.state.seconds)} Seconds</div>
            </div> 
        )
    }
}

export default Clock