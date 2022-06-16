import React from 'react'

export default function Section({image, background, description}) {
    return (
        <div 
            style={{
                width: '100%',
                height: '760px',
                backgroundImage: `url(${background})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr'
            }}
        >
            <div style={{display: 'flex', paddingInline: '130px', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <span style={{fontSize: '45px', fontWeight: '500', color: 'white', lineHeight: '50px'}}>{description.title}</span>
                <span style={{color: 'white', padding: '15px 0'}}>{description.sub}</span>
            </div>
            <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                <img src={image} style={{width: '500px', height: '500px'}} />
            </div>
        </div>
    )
}

