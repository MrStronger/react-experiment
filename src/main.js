

var originCreateElement = document.createElement;
document.createElement = function() {
    debugger
   return originCreateElement.apply(document, arguments);
}

class Children extends React.Component {  
  constructor(props) {
      debugger
    super(props);
    this.state = {
      v: 'nihao'
    }
  }
  componentWillMount(){
      debugger
      this.setState({v: 'componentWillMount'})

  }
  componentDidMount(){
  debugger
  this.setState({v: 'componentDidMount'})
  }
  componentWillReceiveProps(nextProps){
  debugger
  this.setState({v: 'componentWillReceiveProps'})
  
  }
  shouldComponentUpdate(nextProps, nextState){
  debugger
  
  return true
  }
  componentWillUpdate(nextProps, nextState){
  debugger
  
  }
  componentDidUpdate(){
  debugger
  
  }
  render() {
      debugger
    return (
      <div>
        {this.state.v}
        {''}
        {this.props.val}
      </div>
    )
  }
}
class C extends React.Component {  
    constructor(props) {
        debugger
      super(props);
      this.state = {
        val: 'init'
      }
    }
    componentWillMount(){
        debugger
        this.setState({val: 'componentWillMount'})
        
    }
    componentDidMount(){
      debugger
      this.setState({val: 'componentDidMount'})
    }
    componentWillReceiveProps(nextProps){
    debugger
    this.setState({val: 'componentWillReceiveProps'})
    
    }
    shouldComponentUpdate(nextProps, nextState){
    debugger
    
    return true
    }
    componentWillUpdate(nextProps, nextState){
    debugger
    
    }
    componentDidUpdate(){
    debugger
    
    }
    render() {
        debugger
      return (
        <div  className='container'>
          "dscsdcsd"
          <i className='i'>{this.state.val}</i>
          <Children val={this.state.val}/>
        </div>
      )
    }
  }
debugger
ReactDOM.render(
    <C />,
    document.getElementById('app')
  )