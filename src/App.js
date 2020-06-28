import React from "react";
import "./App.css";



class App extends React.Component {
  constructor(props) {
    super (props);
    this.state ={result:''};
  }

  render () {
  return (
    <div className="App">
        <form className="form">
          <h1>My Calculator</h1>
          <div className="calculator"/>
            <input className="text" value={this.state.result} id="txtview" type="" ></input>
            <table>
              <tr>
                <td><input type="button" value="(" onClick={(e)=>this.onClick(e.target.value)} /></td>
                <td><input type="button" value=")" onClick={(e)=>this.onClick(e.target.value)} /></td>
                <td><input type="button" value="%"  onClick={(e)=>this.onClick(e.target.value)}/></td>
                <td><input type="button" value="AC" onClick={(e)=>this.onClick(e.target.value)}/></td>
              </tr>
              <tr>
                <td><input type="button" value="7" onClick={(e)=>this.onClick(e.target.value)}/></td>
                <td><input type="button" value="8" onClick={(e)=>this.onClick(e.target.value)}/></td>
                <td><input type="button" value="9" onClick={(e)=>this.onClick(e.target.value)}/></td>
                <td><input type="button" value="-" onClick={(e)=>this.onClick(e.target.value)}/></td>
              </tr>
              <tr>
                <td><input type="button" value="4" onClick={(e)=>this.onClick(e.target.value)}/></td>
                <td><input type="button" value="5" onClick={(e)=>this.onClick(e.target.value)}/></td>
                <td><input type="button" value="6" onClick={(e)=>this.onClick(e.target.value)}/></td>
                <td><input type="button" value="+" onClick={(e)=>this.onClick(e.target.value)}/></td>
              </tr>
              <tr>
                <td><input type="button" value="1" onClick={(e)=>this.onClick(e.target.value)}/></td>
                <td><input type="button" value="2"  onClick={(e)=>this.onClick(e.target.value)}/></td>
                <td><input type="button" value="3"  onClick={(e)=>this.onClick(e.target.value)}/></td>
                <td><input type="button" value="/" onClick={(e)=>this.onClick(e.target.value)}/></td>
              </tr>					
              <tr>
                <td><input type="button" value="0" onClick={(e)=>this.onClick(e.target.value)}/></td>
                <td><input type="button" value="." onClick={(e)=>this.onClick(e.target.value)}/></td>
                <td><input type="button" value="=" onClick={(e)=>this.onClick(e.target.value)}/></td>
                <td><input type="button" value="x" onClick={(e)=>this.onClick(e.target.value)}/></td>
              </tr>
				</table>
        </form>
        </div>
  );
}
onClick = button => {

  if(button === "="){
      this.calculate()
  }

  else if(button === "AC"){
      this.reset()
  }
  else if(button === "CE"){
      this.backspace()
  }

  else {
      this.setState({
          result: this.state.result + button
      })
  }
};
reset = () => {
  this.setState({
      result: ""
  })
};
calculate = () => {
  try {
      this.setState({
          // eslint-disable-next-line
          result: (eval(this.state.result) || "" ) + ""
      })
  } catch (e) {
      this.setState({
          result: "Math error"
      })

  }
};


}

export default App;
