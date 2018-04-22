console.log("App is running");
const appRoot = document.getElementById("app");

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: []
};
const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};
const renderTemp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <h2>{app.subtitle}</h2>}
      <p>
        {app.options && app.options.length > 0
          ? "Here are your options"
          : "No options"}
      </p>
      <button disabled={app.options.length==0} onClick={onMakeDecision}>What should I do?</button>
      <p>{app.options.length}</p>
      <button onClick={reset}>Reset Option</button>
      <ol>{app.options.map(item => <li key={item}>{item}</li>)}</ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};
const onFormSubmit = e => {
  e.preventDefault();

  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderTemp();
  }
};
const reset = () => {
  app.options = [];
  renderTemp();
};
renderTemp();
