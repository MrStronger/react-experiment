

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
  }
  componentDidMount(){
  debugger
  }
  componentWillReceiveProps(nextProps){
  debugger
  
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
        
      </div>
    )
  }
}
class C extends React.Component {  
    constructor(props) {
        debugger
      super(props);
      this.state = {
        val: 0
      }
    }
    componentWillMount(){
        debugger
        
    }
    componentDidMount(){
      debugger
      this.setState({val: 1})
    }
    componentWillReceiveProps(nextProps){
    debugger
    
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
          "dscsdcsd"
          <i>{this.state.val}</i>
          <Children />
        </div>
      )
    }
  }
debugger
ReactDOM.render(
    <C />,
    document.getElementById('app')
  )