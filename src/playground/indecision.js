class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handlePick = this.handlePick.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
    };
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }
  handlePick() {
    let index = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[index]);
  }
  handleAddOption(option) {
    this.setState(prevState => {
      return {
        options: prevState.options.concat(option)
      };
    });
  }
  render() {
    return (
      <div>
        <Header />
        <Action options={this.state.options} handlePick={this.handlePick} />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption
          options={this.state.options}
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life one the computer</h2>
      </div>
    );
  }
}
class Action extends React.Component {
  render() {
    return (
      <div>
        <p>You have {this.props.options.length} options</p>
        <button
          disabled={this.props.options.length <= 0}
          onClick={this.props.handlePick}
        >
          Choose an option for me
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>remove all</button>
        {this.props.options.map(option => (
          <Option key={option} option={option} />
        ))}
      </div>
    );
  }
}
class Option extends React.Component {
  render() {
    return <div>{this.props.option}</div>;
  }
}
class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.addOption = this.addOption.bind(this);
  }
  addOption(e) {
    e.preventDefault();
    let option = e.target.elements.option.value.trim();
    if (!option) {
      alert("empty!");
      return;
    } else if (this.props.options.indexOf(option) > -1) {
      alert("dulecate!");
      return;
    }
    this.props.handleAddOption(option);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.addOption}>
          <input name="option" type="text" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
