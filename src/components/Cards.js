import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these Common product types </h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src='images/img-9.jpg'
                        text='This medication is a multivitamin and iron product used to treat or prevent vitamin deficiency due to poor diet, certain illnesses, or during pregnancy.'
                        label='Multivitamins and multiminerals'
                        path='/Allproducts'
                        />
                         <CardItem
                        src='images/img-91.jpg'
                        text='Glucosamine is a natural compound found in cartilage — the tough tissue that cushions joints.People use glucosamine sulfate orally to treat a painful condition caused by the inflammation, breakdown and eventual loss of cartilage (osteoarthritis).'
                        label='Glucosamine only products'
                        path='/Allproducts'
                        />
                         <CardItem
                        src='images/img-92.jpg'
                        text='Both pre- and probiotics offer a variety of benefits to our health and well-being, but it can be confusing to figure out which ones you need, and how you can incorporate these into your daily life.'
                        label='Pro and Prebiotics'
                        path='/Allproducts'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src='images/img-93.jpg'
                        text='Manufacture-Sun Pharma Laboratories Ltd, India'
                        label='MIRTAZAPINE TABLET USP 15MG'
                        path='/Allproducts'
                        />
                         <CardItem
                        src='images/img-94.jpg'
                        text='Manufacture-Nabiqasim Industries (Pvt) Ltd, Pakistan'
                        label='DICLOFENAC POTASSIUM TABLETS USP 50MG'
                        path='/Allproducts'
                        />
                         <CardItem
                        src='images/img-95.jpeg'
                        text='Manufacture-Nabiqasim Industries (Pvt) Ltd, Pakistan'
                        label='DICLOFENAC POTASSIUM TABLETS USP 50MG'
                        path='/Allproducts'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
