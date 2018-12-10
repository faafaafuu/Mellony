import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import {Route, Switch, NavLink, Redirect} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import SearchQuery from '../search/SearchQuery'
import './Menu.scss'
import Home from '../routers/home/Home'
import Brands from '../routers/brands/Brands';
import About from '../routers/about/About'
import Underwear from '../routers/underw/Underw'
import Accessories from '../routers/accessories/Accessories'

class MenuExampleInvertedSecondary extends Component {

  render() {
    return (
      <div>
        <Segment inverted>
          <Menu inverted pointing secondary>
            <nav>
              <ul>
                <li onMouseMove={(e)=> {if(e.target.pathname =='/home') return console.log(123)}}>
                  <NavLink to="/home" className=" ui secondary inverted menu item" >Главная</NavLink>
                </li>
                <li>
                  <NavLink to="/brands" className=" ui secondary inverted menu item ">Брэнды</NavLink>
                </li>
                <li>
                  <NavLink to="/underw" className=" ui secondary inverted menu item ">Белье</NavLink>
                </li>
                <li>
                  <NavLink to="/accessories" className=" ui secondary inverted menu item ">Акссессуары</NavLink>
                </li>
                <li>
                  <NavLink to="/about" className=" ui secondary inverted menu item ">О нас</NavLink>
                </li>
              </ul>
            </nav>
            <SearchQuery />
          </Menu>
        </Segment>
          <hr/>
        <Switch>
          <Route path='/home' component={Home} /> 
          <Route path='/brands' component={Brands} /> 
          <Route path='/about' component={About} />
          <Route path='/accessories' component={Accessories} /> 
          <Route path='/underw' component={Underwear} />
          <Redirect to="/home" />
        </Switch>
      </div>
    )
  }
}

export default withRouter(MenuExampleInvertedSecondary)