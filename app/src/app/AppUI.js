import logo from "./logo.svg";
import "./App.css";

const AppUI = ({ auth, records }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      Logged in as: {auth.user.name}
      <hr />
      <button onClick={auth.logout}>logout</button>
      <hr />
      <ul>
        {records.map((record) => (
          <li key={record.id}>
            {record.category.name} - {record.amount} {record.currency} (
            {record.note})
          </li>
        ))}
      </ul>
    </header>
  </div>
);

export default AppUI;
