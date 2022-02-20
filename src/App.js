import React,{ Component } from 'react';
import Header from './components/Hearder';
import './App.css';
class App extends Component {

    state = {
      titre:"Mon titre"
    }
    // changeTilte = (e) => {
    //     this.setState({
    //       titre:"New Title"
    //     })
    // }
    // changeViaParam = (param) => {
    //   this.setState({
    //     titre : param
    //   })
    // }
    // changeViaBind = (param) => {
    //   this.setState({
    //     titre : param
    //   })
    // }
    // changeViaInput = (e) => {
    //   // console.log(e.target.value)
    //   this.setState({
    //     titre : e.target.value
    //   })

    // }

    render(){
      return (
        <div className="App">
          <Header titre = {this.state.titre} />
          {/* <button onClick={this.changeTilte}>Changer le nom en dur</button> */}
          {/* <button onClick={() => {this.changeViaParam("Titre vie Param")}}>Changer via Param</button> */}
          {/* <button onClick={this.changeViaBind.bind(this,"Titre vie Bind")}>Changer via Bind</button> */}
          {/* <input type="text" onChange={this.changeViaInput}/> */}
        </div>
      );
    }
}

export default App;
