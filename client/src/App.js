import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBarView from './views/NavBarView';
import Popup from 'reactjs-popup';
import { NavLink, Route } from 'react-router-dom';

import HomeView from './views/HomeView';
import LoginView from './views/LoginView';

class App extends Component {
  render() {
    return (
      <div className="root">
        <div className='nav-bar-view'>
        <header className="App-header">
          <ul className='navbar-list'>
            <NavLink exact to='/' className='navbar-btn'>Home</NavLink>
            <NavLink to='/login' className='navbar-btn'>Login</NavLink>
            <Popup
              trigger={<NavLink to='/listings'>Listings</NavLink>}
              position='bottom top'
              on='hover'
              closeOnDocumentClick
              mouseLeaveDelay={0}
              mouseEnterDelay={0}
              contentStyle={{ padding: "0px", border: "none" }}
              arrow={false}
            >
              <div className='sub-menu-container'>
                <NavLink to ='/listings/new-york' className='sub-menu'>New York</NavLink>
                <NavLink to ='/listings/california' className='sub-menu'>California</NavLink>
                <NavLink to ='/listings/florida' className='sub-menu'>Florida</NavLink>
                <NavLink to ='/listings/maine' className='sub-menu'>Maine</NavLink>
              </div>
            </Popup>
          </ul>
        </header>
        <div className='route-handler'>
          <Route exact path='/' component={HomeView} />
          <Route exact path='/login' component={LoginView}/>
          <Route exact path='/listings' />

          <Route exact path='/listings/new-york' />
          <Route exact path='/listings/california' />
          <Route exact path='/listings/florida' />
          <Route exact path='/listings/maine' />
        </div>
      </div>
    </div>
    );
  }
}

export default App;
