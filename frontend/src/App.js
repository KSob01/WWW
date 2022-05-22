import React from "react";
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataIsLoaded: false
    };
  }
  componentDidMount() {
    fetch(
        "https://localhost:8080/quotes")
        .then((res) => res.json())
        .then((json) => {
          this.setState({
            items: json,
            DataIsLoaded: true
          });
        })
  }
  render() {
    const { DataIsLoaded, items } = this.state;
    if (!DataIsLoaded) return <div>
      <h1> Please wait some time.... </h1> </div> ;

    return (
        <div className = "App">
          <h1> Fetch data from an api in react </h1>  {
          items.map((item) => (
              <ol key = { item.id } >
                User_Name: { item.username },
                Full_Name: { item.name },
                User_Email: { item.email }
              </ol>
          ))
        }
        </div>
    );
  }
}

export default App;


