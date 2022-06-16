import React, { useState } from 'react'
import Section from './components/section'
import Section2 from './components/section2'
import Section3 from './components/section3'
import Banner from './assets/banner.svg'
import Banner2 from './assets/banner02.svg'
import Banner3 from './assets/banner03.svg'
import {homeHero, homeCards, react, javascript, mockup, feature} from './assets/index'

const description = {
    section1 : {
        title: 'Your own store of Nifty NFTs. Start selling & Growing',
        sub: 'Buy, store, collect NFTS, exchange & earn crypto. Join 25 million + people using ProNef Marketplace.'
    },
    section2 : {
        title: 'Smart User Interaction Marketplace',
        sub: 'Experience the buttery smooth UI of ProNeft NFT Marketplace. Along with colorful NFT artpiece'
    },
    section3 : {
        title: 'Technology of Development',
        sub: 'Our Nft Marketplace has been developed using React Native. The best Cross platform mobile application from Facebook.'
    },
    section4 : {
        title: 'Deployment',
        sub: 'ProNef App is build using Expo which runs natively on all user devices. Expo handles the gritty parts of building the app, so you dont need Xcode or Android studios to get the app into users hands.'
    }
}

function App() {
    console.log(description.section1.sub)

    return (
        <div>
            <Section 
                background={Banner} 
                image={homeHero}
                description={description.section1}
            />
           <Section2 
                background={'white'}
                image={homeCards}
                description={description.section2}
                width={'500px'}
                height={'500px'}
           /> 
           <Section3 
               background={Banner3}
               image1={react}
               image2={javascript}
               image3={mockup}
               description={description.section3}
           />
           <Section2 
                background={'white'}
                image={feature}
                description={description.section4}
                width={'600px'}
                height={'600px'}
           /> 
        </div>

    )
}

export default App
