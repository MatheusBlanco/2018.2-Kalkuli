import React, { Component } from 'react';
import './assets/sass/main.scss';
import Layout from './hoc/Layout/Layout'
import Header from './components/Header/Header'
import Cards from './components/Cards/Cards'

class App extends Component {

  state = {
    members: [
      "Bernardo", "Clarissa", "Ésio", "Felipe",
      "Jacó", "Lucas", "Mariana", "Pedro", "Saleh", "Youssef"
    ],
  }

  render() {
    return (
      // <SideNav />
      // <Header />
      // <Resume />
      <div>
        <Layout>
          <Header />
          <div className="card-container">
            { this.state.members.map(member => <Cards name={member} />) }
          </div>
          
        </Layout>
      </div>
    )
  }

}

export default App;
