import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'

import { configureStore } from 'Lib'
<<<<<<< HEAD
import { Header, Footer } from 'Components/common'

import { WorkDetail } from 'Components/workSections'

import { Home, Work } from 'Components'
=======
import { Header } from 'Components/common'
import { Footer } from 'Containers/common'
import { Home } from 'Components'
>>>>>>> develop
import DevTools from './DevTools'

import './App.scss'

const store = configureStore()

export default () => (

  <Provider store={store}>
    <div>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/work' component={Work} />
        <Route path='/workdetail' component={WorkDetail} />
        {/*<Route path='/test' component={Test} />
        <Route path='/login' component={Signin} />
        <Route path='/signup' component={Signup} />
        <Route path='/articles/new' component={CreateArticle} />
        <Route path='/articles/:id/edit' component={EditArticle} />
        <Route path='/articles/:id' component={ShowArticle} />
        <Route path='/articles' component={Articles} />*/}
      </Switch>
      <DevTools />
      <Footer />
    </div>
  </Provider>
)
