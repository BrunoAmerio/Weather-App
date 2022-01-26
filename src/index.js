import React from 'react';
import { BrowserRouter,Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar';
import Cards from './components/Cards';
import CardDetail from './components/CardDetail';
import About from './components/About';
import store from './redux/store'
import {Provider} from 'react-redux'
import './style/index.css';

ReactDOM.render(
     <BrowserRouter>
          <Provider store={store}>
               <NavBar/>
               <Route exact path='/' component={Cards}/>
               <Route path='/city/:name' component={CardDetail}/>
               <Route path='/about' component={About}/>
          </Provider>
     </BrowserRouter>, document.getElementById('root')
);