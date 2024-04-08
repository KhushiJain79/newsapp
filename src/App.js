import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export default class App extends Component {
 apiKey=process.env.REACT_APP_NEWS_API;
  render() {

    return (
     
        <Router>
          <Navbar />

          <Routes>
            <Route exact  path="/" element={<News key="general"  apiKey={this.apiKey} pagesize={6} category="general" />}/>
            <Route  exact path="/business" element={<News key="business" apiKey={this.apiKey} pagesize={6} category="business" />}/>
            <Route  exact path="/entertainment"element={ <News key="entertainment" apiKey={this.apiKey} pagesize={6} category="entertainment" />}/>
            <Route  exact path="/general" element={<News key="general" apiKey={this.apiKey} pagesize={6} category="general" />}/>
            <Route  exact path="/health"element= {<News key="health"  apiKey={this.apiKey}pagesize={6} category="health" />}/>
            <Route exact  path="/science" element={<News key="science" apiKey={this.apiKey} pagesize={6} category="science" />}/>
            <Route exact  path="/sports" element={<News key="sports" pagesize={6} apiKey={this.apiKey} category="sports" />}/>
            <Route exact  path="/technology"element={ <News key="technology" pagesize={6} apiKey={this.apiKey} category="technology" />}/>

          </Routes>
        </Router>
     
    )
  }
}


