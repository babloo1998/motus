import React from 'react';
import './App.css';
import Navigation from './components/Navigation'
import CompanyInfo from './components/CompanyInfo';

class App extends React.Component
{

  simpleAction = (event) => {
    this.props.simpleAction();
   }

  render() {
    return (
      <div>
        <Navigation />
        <CompanyInfo />
        
      </div>
    );
  }
}
 

export default App;
