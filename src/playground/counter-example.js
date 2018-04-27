class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    const lastCount = localStorage.getItem("count");
    console.log("last saving num is " + lastCount);

    if (lastCount) {
      const lastNum = parseInt(lastCount, 10);
      if (!isNaN(lastNum)) {
        this.setState(() => ({ count: lastNum }));
      }
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem("count", this.state.count);
      console.log("successful add! " + this.state.count);
    }
  }
  handleAddOne() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }
  handleMinusOne() {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  }
  handleReset() {
    this.setState(() => ({
      count: 0
    }));
  }
  render() {
    return (
      <div>
        <h1>Count:{this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));
// const appRoot = document.getElementById("app");
// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
// };
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };

// const renderCounterApp = () => {
//   const templateFive = (
//     <div>
//       <h1>Count:{count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );
//   ReactDOM.render(templateFive, appRoot);
// };
// renderCounterApp();
