

var originCreateElement = document.createElement;
document.createElement = function () {
  debugger;
  return originCreateElement.apply(document, arguments);
};

class Children extends React.Component {
  constructor(props) {
    debugger;
    super(props);
    this.state = {
      v: 'nihao'
    };
  }
  componentWillMount() {
    debugger;
  }
  componentDidMount() {
    debugger;
  }
  componentWillReceiveProps(nextProps) {
    debugger;
  }
  shouldComponentUpdate(nextProps, nextState) {
    debugger;

    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    debugger;
  }
  componentDidUpdate() {
    debugger;
  }
  render() {
    debugger;
    return React.createElement('div', null);
  }
}
class C extends React.Component {
  constructor(props) {
    debugger;
    super(props);
    this.state = {
      val: 0
    };
  }
  componentWillMount() {
    debugger;
  }
  componentDidMount() {
    debugger;
    this.setState({ val: 1 });
  }
  componentWillReceiveProps(nextProps) {
    debugger;
  }
  shouldComponentUpdate(nextProps, nextState) {
    debugger;

    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    debugger;
  }
  componentDidUpdate() {
    debugger;
  }
  render() {
    debugger;
    return React.createElement(
      'div',
      null,
      '"dscsdcsd"',
      React.createElement(
        'i',
        null,
        this.state.val
      ),
      React.createElement(Children, null)
    );
  }
}
debugger;
ReactDOM.render(React.createElement(C, null), document.getElementById('app'));