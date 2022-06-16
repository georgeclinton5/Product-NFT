import React from 'react'

export default function Section2({image, background, description, width, height}) {
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
            <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                <img src={image} style={{width: width, height: height}} />
            </div>
            <div style={{display: 'flex', paddingInline: '130px', justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'column'}}>
                <span style={{fontSize: '45px', fontWeight: '500', lineHeight: '50px', textAlign: 'right'}}>{description.title}</span>
                <span style={{padding: '15px 0',textAlign: 'right'}}>{description.sub}</span>
            </div>
        </div>
    )
}
