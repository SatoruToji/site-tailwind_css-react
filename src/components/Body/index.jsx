import MenImg from '../../images/image-hero-desktop.png'
import MenImgMobile from '../../images/image-hero-mobile.png'
import {  ReactComponent as Databiz  } from '../../images/client-databiz.svg'
import {  ReactComponent as Audiophile  } from '../../images/client-audiophile.svg'
import {  ReactComponent as Meet  } from '../../images/client-meet.svg'
import {  ReactComponent as Maker  } from '../../images/client-maker.svg'
import { Button } from '../Button'

export function Body() {

    return (
        <article className='w-full flex-col xl:flex-row flex mt-6 h-screen justify-between'>
            <section className='relative order-2 xl:order1 text-left mt-12 xl:mt-60'>
                <h1 className='text-3xl xl:text-8xl font-black mt-6 xl:whitespace-pre-line'>{`Make\n remote work`}</h1>
                <p className="text-medium-gray text-lg my-12 whitespace-pre-line">
                    {`Lorem ipsum dolor, sit amet consectetur adipisicing elit.\n Amet ullam dolorum animi atque vitae exercitationem\n quibusdam maiores adipisci qui harum.`}
                </p>
                <Button isFilled={ true }>Learn more</Button>
                <div className="flex justify-around absolute bottom-2 w-full mt-20">
                    <Databiz />
                    <Audiophile />
                    <Meet />
                    <Maker />
                </div>
            </section>
            <section className="hidden xl:flex w-2/4 mt-20 xl:order-2">
                <img src={ MenImg } alt="men musician" />
            </section>
            <section className="flex xl:hidden  mt-20 justify-center mb-8 order-1">
                <img src={ MenImgMobile } alt="men musician" />
            </section>
        </article>
    )
}