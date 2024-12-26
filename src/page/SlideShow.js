import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/scrollbar";

function SlideShow() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=4')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading products...</p>;
    }

    return (
        <section
        id="billboard"
        className="position-relative overflow-hidden bg-light-blue"
        
      >
        <div className="swiper main-swiper" style={{marginTop:'100px'}}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="swiper-slide">
                  <div className="container">
                    <div className="row d-flex align-items-center">
                      <div className="col-md-6">
                        <div className="banner-content">
                          <h1 className="display-4 text-uppercase text-dark pb-3">
                            {product.title}
                          </h1>
                          <p>{product.description}</p>
                          {/* <h2 className="text-primary">${product.price}</h2> */}
                          <a
                            href="#"
                            className="btn btn-medium btn-dark text-uppercase btn-rounded-none"
                          >
                            Buy Now
                          </a>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="image-holder">
                          <img
                            src={product.image}
                            alt={product.title}
                            style={{ width: "100%", height: "auto" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    );
}

export default SlideShow;
