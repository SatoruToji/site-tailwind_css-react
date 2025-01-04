import {  Nav } from '../Nav'
import {  NavMenu  } from '../Nav-menu'
import {  COMPANY, FEATURES  } from './const'
import {  Button  } from '../Button'

import logo from '../../images/logo.svg'


export function Header() {

 return (
   <header className='flex items-center'>
     <logoIcon />
     <img src={  logo  } alt="" />
       <nav className='flex space-x-6 ml-8 item-center'>
          <Nav text='Features'>
            <NavMenu items={  FEATURES  } />
          </Nav>
          <Nav text='Company'>
            <NavMenu items={  COMPANY  } />
          </Nav>
          <Nav text='Careers'>
            
          </Nav>
          <Nav text='About'>
            
          </Nav>
       </nav>
       <div className="ml-auto flex space-x-5">
         <Button> Loggin </Button>
         <Button hasBorder={ true }> Register </Button>
       </div>
   </header>
  )
}