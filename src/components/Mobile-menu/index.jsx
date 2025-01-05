import React from 'react'
import { Nav } from '../Nav'
import { COMPANY, FEATURES } from '../Header/const'
import { NavMenu } from '../Nav-menu'
import { Button } from '../Button'

export function MobileMenu({ isOpen = false }) {

    return (
        <React.Fragment> 
            <div className={`absolute top-0 left-0 right-0 bg-almost-black opacity-50 z-10 min-h-[150vh] ${ isOpen ? 'flex' : 'hidden'}`} />
            <div className={`absolute right-0 top-0 w-1/2 bg-white z-20 justifu-center min-h-[150vh] ${ isOpen ? 'flex' : 'hidden'}`}>
                <nav className="my-20 mx-5 space-y-5 test-lg w-full">
                    <Nav text='Features'>
                        <div className="flex flex-col space-y-5 p-2">
                            { 
                            FEATURES.map((
                                {text, icon}) => 
                                <NavMenu text={ text } icon={ icon } key={ text }/>
                            )}
                        </div>
                    </Nav>
                    <Nav text='Company'>
                        <div className="flex flex-col space-y-5 p-2">
                            { 
                            COMPANY.map((
                                {text, icon}) => 
                                <NavMenu text={ text } icon={ icon } key={ text }/>
                            )}
                        </div>
                    </Nav>
                    <Nav text='Careers' />
                    <Nav text='About' />
                    <div className="flex flex-col space-y-5">
                        <Button>login</Button>
                        <Button hasBorder={true}>Register</Button>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    )
}