import React, { useEffect, useState, useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import { useCart } from '../context/CartContext';

function Women() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useCart();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/women\'s%20clothing') // Correct category URL
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading Women's products...</p>;
    }

    return (
        <section
            id="#smart-watches"
            className="product-store position-relative padding-large no-padding-top"
        >
            <div className="container">
                <div className="row">
                    <div className="display-header d-flex justify-content-between pb-3">
                        <h2 className="display-7 text-dark text-uppercase">Women's Clothes</h2>
                        <div className="btn-right">
                            <a
                                href="/shop"
                                className="btn btn-medium btn-normal text-uppercase"
                            >
                                Go to Shop
                            </a>
                        </div>
                    </div>
                    <div className="swiper product-swiper">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={20}
                            slidesPerView={3}
                            navigation
                            pagination={{ clickable: true }}
                            // scrollbar={{ draggable: true }}
                        >
                            {products.map((product) => (
                                <SwiperSlide key={product.id}>
                                    <div className="product-card position-relative">
                                        <div className="image-holder">
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                                className="img-fluid"
                                                style={{ maxHeight: '300px', objectFit: 'contain' }}
                                            />
                                        </div>
                                        <div className="cart-concern position-absolute">
                                            <div className="cart-button d-flex">
                                            <button
                          className="btn btn-primary"
                          onClick={() => addToCart(product)} // Trigger addToCart when clicked
                        >
                          Add To Cart
                        </button>
                                            </div>
                                        </div>
                                        <div
                                            className="card-detail d-flex justify-content-between align-items-baseline pt-3"
                                        >
                                            <h3 className="card-title text-uppercase">
                                                <a href="#">{product.title}</a>
                                            </h3>
                                            <span className="item-price text-primary">${product.price}</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Women;
