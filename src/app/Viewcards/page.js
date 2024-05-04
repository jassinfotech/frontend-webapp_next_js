'use client'
import React, { useState } from 'react';
import TopbarIner from '../component/TopbarIner';
import 'bootstrap/dist/css/bootstrap.css'
import '../scss/style.scss';
import { FaWallet } from "react-icons/fa";
import { FaUsers, FaGift, FaShoppingCart, FaCog, FaOutdent, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import Slider_box from '../component/Slider_box';
import Cards from '../component/Cards';
import Link from 'next/link';
function page() {

    const [selectedFilter, setSelectedFilter] = useState('all');
    const [items, setItems] = useState([
        { id: 1, name: 'Image 1', category: 'all' },
        { id: 2, name: 'Image 2', category: 'fashion' },
        { id: 3, name: 'Image 3', category: 'lifestyle' },
        { id: 4, name: 'Image 4', category: 'home' },
        { id: 5, name: 'Image 5', category: 'healthcare' },
        { id: 6, name: 'Image 6', category: 'grocery' },
        { id: 7, name: 'Image 7', category: 'jewelry' },
        { id: 8, name: 'Image 8', category: 'occasion' },
    ]);

    const handleFilterClick = (filter) => {
        setSelectedFilter(filter);
    };

    const filteredItems = selectedFilter === 'all' ? items : items.filter(item => item.category === selectedFilter);

    // Define components for each filter category
    const AllComponent = () => <div> <Cards /></div>;
    const FashionComponent = () => <div><Cards /></div>;
    const LifestyleComponent = () => <div><Cards /></div>;
    const HomeComponent = () => <div><Cards /></div>;
    const HealthcareComponent = () => <div><Cards /></div>;
    const GroceryComponent = () => <div><Cards /></div>;
    const JewelryComponent = () => <div><Cards /></div>;
    const OccasionComponent = () => <div><Cards /></div>;

    let selectedComponent;
    switch (selectedFilter) {
        case 'all':
            selectedComponent = <AllComponent />;
            break;
        case 'fashion':
            selectedComponent = <FashionComponent />;
            break;
        case 'lifestyle':
            selectedComponent = <LifestyleComponent />;
            break;
        case 'home':
            selectedComponent = <HomeComponent />;
            break;
        case 'healthcare':
            selectedComponent = <HealthcareComponent />;
            break;
        case 'grocery':
            selectedComponent = <GroceryComponent />;
            break;
        case 'jewelry':
            selectedComponent = <JewelryComponent />;
            break;
        case 'occasion':
            selectedComponent = <OccasionComponent />;
            break;
        default:
            selectedComponent = null;
            break;
    }




    return (
        <div>
            <TopbarIner />
            <Slider_box />
            <section className='py-4'>
                <div className='container-fluid'>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2 w-75 py-2" type="search" placeholder="search gift card…" aria-label="Search" />
                        <button class="seacshbtn w-25 py-2 text-white ms-5" type="submit">Bulk Purchase</button>
                    </form>
                </div>
            </section>
            <section>
                <div className='container-fluid'>
                    <div>
                        <div className="mb-3 filter_btn">
                            <button
                                className={`btn ${selectedFilter === 'all' ? 'active' : ''}`}
                                onClick={() => handleFilterClick('all')}
                            >
                                All
                            </button>
                            <button
                                className={`btn  ${selectedFilter === 'fashion' ? 'active' : ''}`}
                                onClick={() => handleFilterClick('fashion')}
                            >
                                Fashion Card
                            </button>
                            <button
                                className={`btn  ${selectedFilter === 'lifestyle' ? 'active' : ''}`}
                                onClick={() => handleFilterClick('lifestyle')}
                            >
                                Life style card
                            </button>
                            <button
                                className={`btn  ${selectedFilter === 'home' ? 'active' : ''}`}
                                onClick={() => handleFilterClick('home')}
                            >
                                Home & Living
                            </button>
                            <button
                                className={`btn  ${selectedFilter === 'healthcare' ? 'active' : ''}`}
                                onClick={() => handleFilterClick('healthcare')}
                            >
                                Healthcare
                            </button>
                            <button
                                className={`btn  ${selectedFilter === 'grocery' ? 'active' : ''}`}
                                onClick={() => handleFilterClick('grocery')}
                            >
                                Grocery & Retail
                            </button>
                            <button
                                className={`btn  ${selectedFilter === 'jewelry' ? 'active' : ''}`}
                                onClick={() => handleFilterClick('jewelry')}
                            >
                                Jewelry & Lifestyle
                            </button>
                            <button
                                className={`btn  ${selectedFilter === 'occasion' ? 'active' : ''}`}
                                onClick={() => handleFilterClick('occasion')}
                            >
                                Occasion Gift cards
                            </button>
                        </div>
                        <div className="row">
                            {selectedComponent}
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default page