import Link from 'next/link';
import React from 'react';
const Cards = () => {
    const cardData = [
        { id: 1, image: '../images/cardimg1.png', title: 'American Eagle E-Gift Card', price: 'Rs. 10–1000', discount: '10% off' },
        { id: 1, image: '../images/cardimg2.png', title: 'American Eagle E-Gift Card', price: 'Rs. 10–1000', discount: '10% off' },
        { id: 1, image: '../images/cardimg3.png', title: 'American Eagle E-Gift Card', price: 'Rs. 10–1000', discount: '10% off' },
        { id: 1, image: '../images/cardimg4.png', title: 'American Eagle E-Gift Card', price: 'Rs. 10–1000', discount: '10% off' },
        { id: 1, image: '../images/cardimg5.png', title: 'American Eagle E-Gift Card', price: 'Rs. 10–1000', discount: '10% off' },
        { id: 1, image: '../images/cardimg6.png', title: 'American Eagle E-Gift Card', price: 'Rs. 10–1000', discount: '10% off' },
        { id: 1, image: '../images/cardimg7.png', title: 'American Eagle E-Gift Card', price: 'Rs. 10–1000', discount: '10% off' },
        { id: 1, image: '../images/cardimg8.png', title: 'American Eagle E-Gift Card', price: 'Rs. 10–1000', discount: '10% off' },

    ];
    return (
        <div className="row">
            {cardData.map(card => (
                <div key={card.id} className="col-md-3">
                    <div className='card_box_ft'>
                        <Link style={{ textDecoration: 'none' }} href="/Cardbuy">
                            <div className="card p-3 pb-1 border-0">
                                <img src={card.image} className="card-img-top w-100" alt="card image" />
                                <div className="card-body imag_bg">
                                    <div className="card-text cardtewxt">{card.title}</div>
                                    <div className="col">
                                        <div className='cardtitlestyle py-3'>{card.price}</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <button type="button" className="card_button">{card.discount}</button>
                                        </div>
                                        <div className="col-6 text-end">
                                            <button className='btn btn_in_card' type='button' >Buy</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cards;
