import Slider from "react-slick";
import { Carousel } from "react-responsive-carousel";
export const Home = () => {
  const settings = {
    dots: true,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <main className="container-fluid">
      <section className="mt-8">
        <div className="">
          <Carousel
            showThumbs={false}
            infiniteLoop
            showStatus
            autoPlay
            className="hero-slider"
          >
            <div
              style={{
                background:
                  "url(../assets/images/slider/hero-img-slider-1.jpg) no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderRadius: "0.5rem",
                height: "550px",
              }}
            >
              <div className="ps-lg-12 py-lg-16 col-xxl-5 col-lg-7 col-md-8 py-14 px-8 text-xs-center">
                <h1 className="text-white display-5 fw-bold mt-4">
                  SuperMarket For Fresh Grocery
                </h1>
                <p className="lead text-white">
                  Introduced a new model for online grocery shopping and
                  convenient home delivery at any time.
                </p>
                <a className="btn btn-dark mt-3" href="#!">
                  Shop Now
                  <i className="feather-icon icon-arrow-right ms-1" />
                </a>
              </div>
            </div>
            <div
              style={{
                background:
                  "url(../assets/images/slider/hero-img-slider-2.jpg) no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderRadius: "0.5rem",
                height: "550px",
              }}
            >
              <div className="ps-lg-12 py-lg-16 col-xxl-5 col-lg-7 col-md-8 py-14 px-8 text-xs-center">
                <h1 className="text-dark display-5 fw-bold mt-4">
                  Opening Sale
                  <br />
                  Discount up to
                  <span className="text-primary display-6">50%</span>
                </h1>
                <p className="lead">
                  Snack on late-night munchies of delicious nuts & you’re
                  guaranteed happiness before you doze!
                </p>
                <a className="btn btn-dark mt-3" href="#!">
                  Shop Now
                  <i className="feather-icon icon-arrow-right ms-1" />
                </a>
              </div>
            </div>
            <div
              style={{
                background:
                  "url(../assets/images/slider/hero-img-slider-3.jpg) no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderRadius: "0.5rem",
                height: "550px",
                width: "100%",
              }}
            >
              <div className="ps-lg-12 py-lg-16 col-xxl-5 col-lg-7 col-md-8 py-14 px-8 text-xs-center">
                <h1 className="text-dark display-5 fw-bold mt-4">
                  Midnight Munch Combo
                </h1>
                <p className="lead">
                  Snack on late-night munchies of delicious nuts & you’re
                  guaranteed happiness before you doze!
                </p>
                <a className="btn btn-dark mt-3" href="#!">
                  Shop Now
                  <i className="feather-icon icon-arrow-right ms-1" />
                </a>
              </div>
            </div>
          </Carousel>
        </div>
      </section>
      <section className="my-lg-14 my-8">
        <div className="">
          <div className="row">
            <div className="col-12">
              <div className="mb-8">
                <h3 className="mb-0">Shop by Category</h3>
              </div>
            </div>
          </div>
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6 g-6">
            <div className="col">
              <a
                className="text-decoration-none text-inherit"
                href="shop-grid.html"
              >
                <div className="card card-product">
                  <div className="card-body text-center py-8">
                    <img
                      alt="Grocery Ecommerce Template"
                      className="mb-3"
                      src="../assets/images/category/category-dairy-bread-eggs.jpg"
                    />
                    <div className="text-truncate">Dairy, Bread & Eggs</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
              <a
                className="text-decoration-none text-inherit"
                href="shop-grid.html"
              >
                <div className="card card-product">
                  <div className="card-body text-center py-8">
                    <img
                      alt="Grocery Ecommerce Template"
                      className="mb-3"
                      src="../assets/images/category/category-snack-munchies.jpg"
                    />
                    <div className="text-truncate">Snack & Munchies</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
              <a
                className="text-decoration-none text-inherit"
                href="shop-grid.html"
              >
                <div className="card card-product">
                  <div className="card-body text-center py-8">
                    <img
                      alt="Grocery Ecommerce Template"
                      className="mb-3"
                      src="../assets/images/category/category-bakery-biscuits.jpg"
                    />
                    <div className="text-truncate">Bakery & Biscuits</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
              <a
                className="text-decoration-none text-inherit"
                href="shop-grid.html"
              >
                <div className="card card-product">
                  <div className="card-body text-center py-8">
                    <img
                      alt="Grocery Ecommerce Template"
                      className="mb-3"
                      src="../assets/images/category/category-instant-food.jpg"
                    />
                    <div className="text-truncate">Instant Food</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
              <a
                className="text-decoration-none text-inherit"
                href="shop-grid.html"
              >
                <div className="card card-product">
                  <div className="card-body text-center py-8">
                    <img
                      alt="Grocery Ecommerce Template"
                      className="mb-3"
                      src="../assets/images/category/category-tea-coffee-drinks.jpg"
                    />
                    <div className="text-truncate">Tea, Coffee & Drinks</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
              <a
                className="text-decoration-none text-inherit"
                href="shop-grid.html"
              >
                <div className="card card-product">
                  <div className="card-body text-center py-8">
                    <img
                      alt="Grocery Ecommerce Template"
                      className="mb-3"
                      src="../assets/images/category/category-fruits-vegetables.jpg"
                    />
                    <div className="text-truncate">Fruits & Vegetables</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
              <a
                className="text-decoration-none text-inherit"
                href="shop-grid.html"
              >
                <div className="card card-product">
                  <div className="card-body text-center py-8">
                    <img
                      alt="Grocery Ecommerce Template"
                      className="mb-3"
                      src="../assets/images/category/category-cold-drinks-juices.jpg"
                    />
                    <div className="text-truncate">Cold Drinks & Juices</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
              <a
                className="text-decoration-none text-inherit"
                href="shop-grid.html"
              >
                <div className="card card-product">
                  <div className="card-body text-center py-8">
                    <img
                      alt="Grocery Ecommerce Template"
                      className="mb-3"
                      src="../assets/images/category/category-chicken-meat-fish.jpg"
                    />
                    <div className="text-truncate">Chicken, Meat & Fish</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
              <a
                className="text-decoration-none text-inherit"
                href="shop-grid.html"
              >
                <div className="card card-product">
                  <div className="card-body text-center py-8">
                    <img
                      alt="Grocery Ecommerce Template"
                      className="mb-3"
                      src="../assets/images/category/category-baby-care.jpg"
                    />
                    <div className="text-truncate">Baby Care</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
              <a
                className="text-decoration-none text-inherit"
                href="shop-grid.html"
              >
                <div className="card card-product">
                  <div className="card-body text-center py-8">
                    <img
                      alt="Grocery Ecommerce Template"
                      className="mb-3"
                      src="../assets/images/category/category-cleaning-essentials.jpg"
                    />
                    <div className="text-truncate">Cleaning Essentials</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
              <a
                className="text-decoration-none text-inherit"
                href="shop-grid.html"
              >
                <div className="card card-product">
                  <div className="card-body text-center py-8">
                    <img
                      alt="Grocery Ecommerce Template"
                      className="mb-3"
                      src="../assets/images/category/category-pet-care.jpg"
                    />
                    <div className="text-truncate">Pet Care</div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
              <a
                className="text-decoration-none text-inherit"
                href="shop-grid.html"
              >
                <div className="card card-product">
                  <div className="card-body text-center py-8">
                    <img
                      alt="Grocery Ecommerce Template"
                      className="mb-3"
                      src="../assets/images/category/category-atta-rice-dal.jpg"
                    />
                    <div className="text-truncate">Atta, Rice & Dal</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="">
          <div className="row">
            <div className="col-12 col-md-6 mb-3 mb-lg-0">
              <div>
                <div
                  className="py-10 px-8 rounded"
                  style={{
                    background:
                      "url(./assets/images/banner/grocery-banner.png) no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <div>
                    <h3 className="fw-bold mb-1">Fruits & Vegetables</h3>
                    <p className="mb-4">
                      Get Upto
                      <span className="fw-bold">30%</span>
                      Off
                    </p>
                    <a className="btn btn-dark" href="#!">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div>
                <div
                  className="py-10 px-8 rounded"
                  style={{
                    background:
                      "url(./assets/images/banner/grocery-banner-2.jpg) no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  <div>
                    <h3 className="fw-bold mb-1">Freshly Baked Buns</h3>
                    <p className="mb-4">
                      Get Upto
                      <span className="fw-bold">25%</span>
                      Off
                    </p>
                    <a className="btn btn-dark" href="#!">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
