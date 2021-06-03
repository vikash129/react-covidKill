//importin styling
//react necc modules
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


//componnet
import Header from './MyComp/Header'
import { Footer } from './MyComp/Footer'
import { About } from './MyComp/About'
import CountryWiseCases from './MyComp/CountryWiseCases'
import StateWiseCases from './MyComp/StateWiseCases';

// import Login from './MyComp/Login';
// import { CovidData } from './data'


class App extends React.Component {


  state = {
    totalData: {},
    stateWiseData: []
  }


componentDidMount(){
  this.getCovidData()
}
  getCovidData = async () => {

    try {
      let response = await fetch('https://api.covid19india.org/data.json')
      let CovidData = await response.json()

      this.setState(
        {
          totalData: CovidData.statewise[0],
          stateWiseData: CovidData.statewise
        }
      )
    }
    catch (e) {
      console.log(e)
    }
  }


  render() {

    return (
      <div className='app'>
        <Router>

          <Header  />


          <Switch>

            <Route exact path='/' >
              <CountryWiseCases totalData={this.state.totalData} />
            </Route>


            <Route exact path='/about'>
              <About />
            </Route>


            <Route path='/statewise'>

              <StateWiseCases stateWiseData={this.state.stateWiseData} />

            </Route>

          </Switch>



          <Footer />

        </Router>

      </div>
    );
  }





}

export default App;