import React from 'react'

export default function Section3({image1, image2, background, description}) {
    const SmallCard = ({image, title}) => {
        return(
            <div style={{
                backgroundColor:'white', 
                width: '230px', 
                height: '230px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                borderRadius: '15px'
            }}>
                <img src={image} width='170px' height='170px' />
                <span style={{fontSize: '22px', fontWeight: '500', paddingBottom: '25px'}}>{title}</span>
            </div>
        )
    }
    return (
        <div 
            style={{
                width: '100%',
                height: '500px',
                backgroundImage: `url(${background})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                display: 'grid',
                gridTemplateRows: '.75fr 1fr'
            }}
        >
            <div style={{display: 'flex', paddingInline: '130px', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <span style={{fontSize: '45px', fontWeight: '500', color: 'white', lineHeight: '50px'}}>{description.title}</span>
                <span style={{color: 'white', padding: '15px 0'}}>{description.sub}</span>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '50px'}}>
                <SmallCard image={image1} title='React Native' />
                <SmallCard image={image2} title='Javascript' />
            </div>
        </div>
    )
}
