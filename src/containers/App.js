import React from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import { configureStore } from 'Lib'
import { Home,Contact } from 'Components'
import { Header } from 'Components/common'
import { OurWorks, WorkDetail } from 'Containers/ourWorkSections'
import { Footer } from 'Containers/common'

import DevTools from './DevTools'

import './App.scss'
 
const store = configureStore()

export default () => (
  <Provider store={store}>
    <div>
      <Router>
        <div>
          <Route exact path="/" render={() => (
            <Redirect to="/th"/>
          )}/>   

          <Route path='/:lang' component={Header} />                                   
          <Switch>
            <Route exact path='/:lang' component={Home} />    
            <Route path='/:lang/our-work/:id' component={WorkDetail} />                             
            <Route path='/:lang/our-work' component={OurWorks} />
            <Route path='/:lang/contact' component={Contact} /> 
          </Switch> 
          <Route path='/:lang' component={Footer} /> 
        </div>
      </Router>
      <DevTools />
    </div>
  </Provider>
)
