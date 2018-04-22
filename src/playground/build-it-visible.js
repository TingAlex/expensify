class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.show = this.show.bind(this);
    this.state = {
      Visibility: false
    };
  }
  show() {
    this.setState(prevState => {
      return {
        Visibility: !prevState.Visibility
      };
    });
  }
  render() {
    return (
      <div>
        <h1 />
        <button onClick={this.show}>{this.state.Visibility ? "hide" : "show"}</button>
        <Content Visibility={this.state.Visibility} />
      </div>
    );
  }
}
class Content extends React.Component {
  render(props) {
    return <div>{this.props.Visibility && <p>lallala</p>}</div>;
  }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
// const appRoot = document.getElementById("app");
// const contents = ["Show details", "Hide details"];

// let flag = false;
// let content = contents[0];
// const show = () => {
//   flag = !flag;
//   content = flag == 0 ? contents[0] : contents[1];
//   renderTemp();
// };
// const renderTemp = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={show}>{content}</button>
//       {flag && <p>lalalal</p>}
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// };
// renderTemp();
