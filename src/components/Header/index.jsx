import {  Nav } from '../Nav'
import {  NavMenu  } from '../Nav-menu'
import {  COMPANY, FEATURES  } from './const'
import {  Button  } from '../Button'
import { MobileMenu } from '../Mobile-menu'

import logo from '../../images/logo.svg'
import iconMenu from '../../images/icon-menu.svg'
import closeMenu from '../../images/icon-close-menu.svg'
import { useState } from 'react'


export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
 return (
   <header className='flex items-center'>
     <logoIcon />
     <img src={  logo  } alt="" />
       <nav className='hidden xl:flex space-x-6 ml-8 item-center'>
          <Nav text='Features'>
            <NavMenu items={  FEATURES  } />
          </Nav>
          <Nav text='Company'>
            <NavMenu items={  COMPANY  } />
          </Nav>
          <Nav text='Careers'></Nav>
          <Nav text='About'></Nav>
       </nav>
       <div className="hidden xl:flex ml-auto flex space-x-5">
         <Button> Loggin </Button>
         <Button hasBorder={ true }> Register </Button>
       </div>
       <div 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex xl:hidden ml-auto cursor-pointer z-30">
          <img src={isMobileMenuOpen ? closeMenu : iconMenu} alt="" />
       </div>
       <MobileMenu isOpen={ isMobileMenuOpen }/>
   </header>
  )
}