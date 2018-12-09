import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import {Route, Switch, NavLink} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import './Menu.scss'
import Home from '../routers/home/Home'
import Brands from '../routers/brands/Brands';
import About from '../routers/about/About'
import Underwear from '../routers/underw/Underw'
import Contact from '../routers/contact/Contact'

class MenuExampleInvertedSecondary extends Component {
  // constructor(props) {
  //   super(props)
  //   console.log('-',this.props)
  // }

  // state = { 
  //   activeItem: 'home' 
  // }

  // handleItemClick = (e, { value, pathname}) => 
  //   this.setState({ 
  //     activeItem: value,
  //     pathname: '/' +value
  //   }
  // )

 
  

  render() {
    // const { activeItem, pathname } = this.state
    // console.log(pathname)
    return (
      <div>
        <Segment inverted>
          <Menu inverted pointing secondary>
            <nav>
              <ul>
                <li>
                  <NavLink to="/home">Главная</NavLink>
                </li>
                <li>
                  <NavLink to="/brands">Бренды</NavLink>
                </li>
                <li>
                  <NavLink to="/underw">Белье</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Контакты</NavLink>
                </li>
                <li>
                  <NavLink to="/about">О нас</NavLink>
                </li>
              </ul>
            </nav>
            {/* <Menu.Item 
              value="home"
              name='Главная' 
              active={activeItem === 'home'} 
              onClick={this.handleItemClick} 
              // href="/home"
            />
            <Menu.Item
              value="brands"
              name='Бренды'
              active={activeItem === 'brands'}
              onClick={this.handleItemClick}
              // href="/brands"
            /> */}
             {/* <Menu.Item
              value=""
              name='Белье'
              active={activeItem === 'underw'}
              onClick={this.handleItemClick}
              href="/undrew"
            /> */}
            {/*<Menu.Item
              value=""
              name='Контакты'
              active={activeItem === '/contact'}
              onClick={this.handleItemClick}
              href="/contact"
            />*/}
            {/* <Menu.Item
              value="about"
              name='О нас'
              active={activeItem === 'about'}
              onClick={this.handleItemClick}
              // href="/about"
            />  */}
          </Menu>
        </Segment>
          <hr/>
        <Switch>
          <Route path='/home' component={Home} /> 
          <Route path='/brands' component={Brands} /> 
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} /> 
          <Route path='/underw' component={Underwear} />
        {/* <Route path={() => '/' + activeItem} exact component={About} />
        <Route path={() => '/' + activeItem} exact component={Brands} /> */}
        </Switch>
      </div>
    )
  }
}

export default withRouter(MenuExampleInvertedSecondary)