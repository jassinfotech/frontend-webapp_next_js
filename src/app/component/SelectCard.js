import React from 'react'

function SelectCard() {

    const dummyData = [
        {
            image: 'https://d1o7uku192uawx.cloudfront.net/mobile/media/catalog/product/3/1/312x200_flipkart.png',
            heading: 'Makemytrip Holiday E-Gift Card',
        },
        {
            image: 'https://d1o7uku192uawx.cloudfront.net/mobile/media/catalog/product/3/1/312x200_flipkart.png',
            heading: 'Makemytrip Holiday E-Gift Card',
        },
        {
            image: 'https://d1o7uku192uawx.cloudfront.net/mobile/media/catalog/product/3/1/312x200_flipkart.png',
            heading: 'Makemytrip Holiday E-Gift Card',
        },

        {
            image: 'https://d1o7uku192uawx.cloudfront.net/mobile/media/catalog/product/3/1/312x200_flipkart.png',
            heading: 'Makemytrip Holiday E-Gift Card',
        },
        {
            image: 'https://d1o7uku192uawx.cloudfront.net/mobile/media/catalog/product/3/1/312x200_flipkart.png',
            heading: 'Makemytrip Holiday E-Gift Card',
        },
        {
            image: 'https://d1o7uku192uawx.cloudfront.net/mobile/media/catalog/product/3/1/312x200_flipkart.png',
            heading: 'Makemytrip Holiday E-Gift Card',
        },
        {
            image: 'https://d1o7uku192uawx.cloudfront.net/mobile/media/catalog/product/3/1/312x200_flipkart.png',
            heading: 'Makemytrip Holiday E-Gift Card',
        },
        {
            image: 'https://d1o7uku192uawx.cloudfront.net/mobile/media/catalog/product/3/1/312x200_flipkart.png',
            heading: 'Makemytrip Holiday E-Gift Card',
        },
        {
            image: 'https://d1o7uku192uawx.cloudfront.net/mobile/media/catalog/product/3/1/312x200_flipkart.png',
            heading: 'Makemytrip Holiday E-Gift Card',
        },
    ]

    return (
        <div>
            <div className='row'>
             {dummyData.map((data, index) => (
                    <div className='col-lg-3 col-md-3'>
                        <div class="card border-light">
                            <img src={data.image} class="card-img-top" />
                            <div class="card-body text-start">
                                <p class="card-text">{data.heading}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default SelectCard