import React,{Component} from 'react'

class Hello extends Component {

    ifelseItis(){
        let me = 'precious'
        
        if(me === 'precious'){
           return(<div> Yea!</div>)
        }else{
            return(<hi> Nah!</hi>)
        }
        
    }
    render(){
        let hey = 2
        return(
            <div>
                <h1> Hello! </h1>
              {hey === 1 ? 'Yes' : 'No'}
              {this.ifelseItis()}
              <button onClick={console.log('hello')}> Click Me</button>
              <button onClick={()=>console.log('hello')}> Click Me</button>
            </div>    
        )
    }
}

export default Hello