// Dependencies
import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js'

// Components
import Header from '../shared/components/layout/Header'
import Footer from '../shared/components/layout/Footer'
import Content from '../shared/components/layout/Content'

// Shared
import './App.scss';
import RouterApp from '../shared/components/RouterApp';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Content>
          <RouterApp />
        </Content>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
