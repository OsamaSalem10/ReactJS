import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { bodyTypes, logo, categories, features, cars, accessories, videos } from "./Array"
import { Link } from "react-router-dom"
export const Home = () => {
    return (
        <main className="content-wrapper">
            {/* Hero with search form */}
            <section className="position-relative bg-info overflow-hidden py-5">
                <div className="container position-relative z-2 pb-2 py-sm-3 py-md-4 py-lg-5 my-lg-3 my-xl-4 my-xxl-5">
                    <div className="row align-items-center pt-lg-2 pb-lg-3 pb-xl-4 pb-xxl-5">
                        {/* Heading */}
                        <div className="col-lg-4 order-lg-2 text-center text-lg-start pb-2 pb-sm-3 pb-md-0 mb-4 mb-md-5 mb-lg-0">
                            <h1 className="display-4 text-white">Easy way to find the right car</h1>
                            <div className="d-flex align-items-center justify-content-center justify-content-lg-start" data-bs-theme="dark">
                                <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="none">
                                    <path d="M25.176 14.273c0-.79-.064-1.585-.201-2.362h-10.97v4.479h6.281c-.129.715-.401 1.397-.8 2.005a5.38 5.38 0 0 1-1.524 1.529v2.905h3.747c2.202-2.024 3.465-5.017 3.465-8.555h.001z" fill="#2a84fc" />
                                    <path d="M14.008 25.636c3.136 0 5.782-1.029 7.709-2.807l-3.748-2.906c-1.043.709-2.388 1.111-3.957 1.111-3.033 0-5.607-2.046-6.53-4.799H3.614v2.996a11.63 11.63 0 0 0 10.394 6.405z" fill="#00ac47" />
                                    <path d="M7.476 16.235c-.487-1.444-.487-3.009 0-4.453V8.785H3.612a11.64 11.64 0 0 0 0 10.445l3.864-2.996v.001z" fill="#ffba00" />
                                    <path d="M14.008 6.979a6.32 6.32 0 0 1 4.461 1.743l3.32-3.32a11.18 11.18 0 0 0-7.782-3.025A11.63 11.63 0 0 0 3.614 8.785l3.864 2.998c.918-2.757 3.495-4.804 6.53-4.804z" fill="#fc2c25" />
                                </svg>
                                <div className="fs-sm text-secondary-emphasis ms-1 me-3">Google</div>
                                <i className="bi-star-fill fs-xl text-warning me-1" />
                                <div className="fs-sm text-secondary-emphasis">4.9</div>
                            </div>
                        </div>
                        {/* Search form */}
                        <div className="col-lg-8 order-lg-1">
                            <div className="bg-white rounded p-4 mb-4 me-lg-4 me-xxl-0" style={{ "maxWidth": "816px", "--fn-bg-opacity": ".08" }}>
                                <form className="p-sm-2" data-bs-theme="light">
                                    <div className="d-flex justify-content-center justify-content-md-start gap-2 gap-sm-3 mb-4" data-bs-theme="dark">
                                        <input type="radio" className="btn-check" name="car-search" id="all-cars" defaultChecked />
                                        <label htmlFor="all-cars" className="btn btn-outline-secondary rounded-pill" style={{ "--fn-btn-border-color": "rgba(255, 255, 255, 0.15)" }}>All</label>
                                        <input type="radio" className="btn-check" name="car-search" id="new-cars" />
                                        <label htmlFor="new-cars" className="btn btn-outline-secondary rounded-pill" style={{ "--fn-btn-border-color": "rgba(255, 255, 255, 0.15)" }}>New cars</label>
                                        <input type="radio" className="btn-check" name="car-search" id="used-cars" />
                                        <label htmlFor="used-cars" className="btn btn-outline-secondary rounded-pill" style={{ "--fn-btn-border-color": "rgba(255, 255, 255, 0.15)" }}>Used cars</label>
                                    </div>
                                    <div className="row row-cols-1 row-cols-md-2 g-3">
                                        <div className="col d-flex flex-column gap-3">
                                            <select className="form-select" data-select="{&quot;searchEnabled&quot;: true}" aria-label="Car make select" data-bs-theme="light">
                                                <option value>Make</option>
                                                <option value="Toyota">Toyota</option>
                                                <option value="Mercedes-Benz">Mercedes-Benz</option>
                                                <option value="BMW">BMW</option>
                                                <option value="Honda">Honda</option>
                                                <option value="Ford">Ford</option>
                                                <option value="Chevrolet">Chevrolet</option>
                                                <option value="Audi">Audi</option>
                                                <option value="Tesla">Tesla</option>
                                                <option value="Tesla">Mazda</option>
                                                <option value="Nissan">Nissan</option>
                                                <option value="Volkswagen">Volkswagen</option>
                                            </select>
                                            <select className="form-select" data-select="{&quot;searchEnabled&quot;: true}" aria-label="Car model select" data-bs-theme="light">
                                                <option value>Model</option>
                                                <option value="A-Class">A-Class</option>
                                                <option value="C-Class">C-Class</option>
                                                <option value="E-Class">E-Class</option>
                                                <option value="S-Class">S-Class</option>
                                                <option value="A205">A205</option>
                                                <option value="GLA">GLA</option>
                                                <option value="GLC">GLC</option>
                                                <option value="GLE">GLE</option>
                                                <option value="GLS">GLS</option>
                                                <option value="AMG GT">AMG GT</option>
                                            </select>
                                            <select className="form-select" data-select aria-label="Car body type select" data-bs-theme="light">
                                                <option value>Body type</option>
                                                <option value="Sedan">Sedan</option>
                                                <option value="Convertible">Convertible</option>
                                                <option value="SUV">SUV</option>
                                                <option value="Coupe">Coupe</option>
                                                <option value="Pickup">Pickup</option>
                                            </select>
                                        </div>
                                        <div className="col d-flex flex-column gap-3">
                                            <select className="form-select" data-select="{&quot;searchEnabled&quot;: true}" aria-label="Car location select" data-bs-theme="light">
                                                <option value>Location</option>
                                                <option value="New York">New York</option>
                                                <option value="Los Angeles">Los Angeles</option>
                                                <option value="Chicago">Chicago</option>
                                                <option value="Houston">Houston</option>
                                                <option value="Phoenix">Phoenix</option>
                                                <option value="Philadelphia">Philadelphia</option>
                                                <option value="San Antonio">San Antonio</option>
                                                <option value="San Diego">San Diego</option>
                                                <option value="Dallas">Dallas</option>
                                                <option value="San Jose">San Jose</option>
                                            </select>
                                            <div className="input-group">
                                                <div className="w-50">
                                                    <select className="form-select rounded-end-0" data-select="{
                      &quot;classNames&quot;: {
                        &quot;containerInner&quot;: [&quot;form-select&quot;, &quot;rounded-end-0&quot;]
                      }
                    }" aria-label="Car year from select" data-bs-theme="light">
                                                        <option value>Year from</option>
                                                        <option value={2025}>2025</option>
                                                        <option value={2024}>2024</option>
                                                        <option value={2023}>2023</option>
                                                        <option value={2023}>2023</option>
                                                        <option value={2021}>2021</option>
                                                        <option value={2020}>2020</option>
                                                        <option value={2019}>2019</option>
                                                        <option value={2018}>2018</option>
                                                        <option value={2017}>2017</option>
                                                        <option value={2016}>2016</option>
                                                        <option value={2015}>2015</option>
                                                    </select>
                                                </div>
                                                <div className="w-50">
                                                    <select className="form-select rounded-start-0" data-select="{
                      &quot;classNames&quot;: {
                        &quot;containerInner&quot;: [&quot;form-select&quot;, &quot;rounded-start-0&quot;]
                      }
                    }" aria-label="Car year to select" data-bs-theme="light">
                                                        <option value>Year to</option>
                                                        <option value={2025}>2025</option>
                                                        <option value={2024}>2024</option>
                                                        <option value={2023}>2023</option>
                                                        <option value={2023}>2023</option>
                                                        <option value={2021}>2021</option>
                                                        <option value={2020}>2020</option>
                                                        <option value={2019}>2019</option>
                                                        <option value={2018}>2018</option>
                                                        <option value={2017}>2017</option>
                                                        <option value={2016}>2016</option>
                                                        <option value={2015}>2015</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="input-group flex-nowrap" data-bs-theme="light">
                                                <div className="position-relative w-100">
                                                    <i className="bi-dollar-sign position-absolute top-50 start-0 translate-middle-y text-body ms-3" />
                                                    <input type="text" className="form-control form-icon-start rounded-end-0" placeholder="Price from" data-input-format="{&quot;numeral&quot;: true}" data-bs-theme="light" />
                                                </div>
                                                <div className="position-relative w-100">
                                                    <i className="bi-dollar-sign position-absolute top-50 start-0 translate-middle-y text-body ms-3" />
                                                    <input type="text" className="form-control form-icon-start rounded-start-0" placeholder="Price to" data-input-format="{&quot;numeral&quot;: true}" data-bs-theme="light" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center justify-content-md-start pt-4">
                                        <button type="submit" className="btn btn-primary">
                                            <i className="bi-search fs-base me-2 ms-n1" />
                                            Search
                                        </button>
                                        <div className="nav" data-bs-theme="dark">
                                            <Link className="nav-link position-relative pe-0" to="#!">
                                                <span className="hover-effect-underline stretched-link">Advanced search</span>
                                                <i className="bi-chevron-right fs-base ms-1 me-n1" />
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div data-bs-theme="dark">
                                <p className="text-body text-center text-md-start mb-0">Finder is a <span className="fw-semibold">leading digital
                                    marketplace</span> for the automotive industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Background image */}
                <div className="container position-absolute start-50 bottom-0 translate-middle-x pb-xl-5 ms-xl-n5 ms-xxl-0 me-xxl-0 mb-n5 mb-xl-4 mb-xxl-5">
                    <div className="d-flex justify-content-xl-end position-relative bg-info mb-n5 mb-xxl-4" style={{ "width": "2039px" }}>
                        <img className="position-absolute top-0 rtl-flip" src="assets/img/home/cars/hero/layer01.png" width={1308} style={{ "right": "0", "opacity": ".2", "mixBlendMode": "overlay" }} alt="" />
                        <img src="assets/img/home/cars/hero/layer02.png" width={994} className="rtl-flip me-2" style={{ "opacity": ".7", "mixBlendMode": "soft-light" }} alt="" />
                        <img className="position-absolute top-0 rtl-flip" src="assets/img/home/cars/hero/layer03.png" width={1132} style={{ "left": "0", "opacity": ".06", "mixBlendMode": "overlay" }} alt="" />
                    </div>
                </div>
            </section>
            {/* Body type categories */}
            <section className="container pt-2 pt-sm-3 pt-md-4 pt-lg-5 pb-5 mb-xxl-3">
                <div className="d-flex align-items-start justify-content-between gap-4 pt-5 pb-3 mb-2 mb-sm-3">
                    <h2 className="mb-0">Popular car body types</h2>

                    <div className="nav">
                        <Link
                            className="nav-link position-relative fs-base text-nowrap py-1 px-0"
                            to="#!"
                        >
                            <span className="hover-effect-underline stretched-link me-1">
                                View all
                            </span>
                            <i className="bi bi-chevron-right fs-lg"></i>
                        </Link>
                    </div>
                </div>

                <Swiper
                    modules={[Pagination]}
                    pagination={{
                        clickable: true,
                        el: ".body-types-pagination",
                    }}
                    spaceBetween={16}
                    breakpoints={{
                        460: {
                            slidesPerView: 2,
                            spaceBetween: 24,
                        },
                        600: {
                            slidesPerView: 3,
                            spaceBetween: 24,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 24,
                        },
                        992: {
                            slidesPerView: 5,
                            spaceBetween: 24,
                        },
                        1200: {
                            slidesPerView: 6,
                            spaceBetween: 24,
                        },
                    }}
                    slidesPerView={2}
                >
                    {bodyTypes.map((item, index) => (
                        <SwiperSlide key={index}>
                            <article className="card w-100 hover-effect-scale bg-body-tertiary border-0">
                                <div className="card-body text-center px-3">
                                    <div
                                        className="ratio hover-effect-target"
                                        style={{ aspectRatio: "1 / 1" }}
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="img-fluid object-fit-contain"
                                        />
                                    </div>

                                    <h3 className="h6 pt-3 mb-1">
                                        <Link
                                            className="hover-effect-underline stretched-link"
                                            to="#!"
                                        >
                                            {item.name}
                                        </Link>
                                    </h3>

                                    <p className="fs-sm text-body-secondary mb-1 mb-sm-2">
                                        {item.offers} offers
                                    </p>
                                </div>
                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="swiper-pagination body-types-pagination position-static mt-3"></div>
            </section>
            {/* Top offers */}
            <section className="container pt-2 pt-sm-3 pt-md-4 pt-lg-5 pb-5 my-xxl-3">
                <div className="d-flex align-items-start justify-content-between gap-4 pb-3 mb-2 mb-sm-3">
                    <h2 className="mb-0">Top offers</h2>
                    <div className="nav">
                        <Link className="nav-link position-relative fs-base text-nowrap py-1 px-0" to="#!">
                            <span className="hover-effect-underline stretched-link me-1">View all</span>
                            <i className="bi-chevron-right fs-lg" />
                        </Link>
                    </div>
                </div>
                {/* Listings grid */}
                <div className="row">
                    <div className="col-lg-5 mb-4 mb-lg-0">
                        {/* Item */}
                        <article className="card h-100 hover-effect-scale overflow-hidden">
                            <div className="row flex-lg-column h-100 g-0">
                                <div className="col-sm-5 col-lg-12 position-relative bg-body-tertiary overflow-hidden">
                                    <div className="d-lg-none" style={{ "minHeight": "220px" }} />
                                    <div className="d-none d-lg-block" style={{ "minHeight": "260px" }} />
                                    <div className="d-flex flex-column gap-2 align-items-start position-absolute top-0 start-0 z-1 pt-1 pt-sm-0 ps-1 ps-sm-0 mt-2 mt-sm-3 ms-2 ms-sm-3">
                                        <span className="badge text-bg-info d-inline-flex align-items-center">
                                            Verified
                                            <i className="bi-shield ms-1" />
                                        </span>
                                        <span className="badge text-bg-warning">Used</span>
                                    </div>
                                    <img src="assets/img/listings/cars/list/06.jpg" className="hover-effect-target position-absolute top-0 start-0 w-100 h-100 object-fit-cover" alt="" />
                                </div>
                                <div className="col-sm-7 col-lg-12 d-lg-flex flex-column flex-fill py-md-2">
                                    <div className="card-body pb-3 pb-md-4">
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <div className="fs-xs text-body-secondary me-3">28/06/2024</div>
                                            <div className="d-flex gap-2 position-relative z-2">
                                                <button type="button" className="btn btn-icon btn-sm btn-outline-secondary animate-pulse rounded-circle" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-sm" title="Wishlist" aria-label="Add to wishlist">
                                                    <i className="bi-heart animate-target fs-sm" />
                                                </button>
                                                <button type="button" className="btn btn-icon btn-sm btn-outline-secondary animate-shake rounded-circle" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-sm" title="Notify" aria-label="Notify">
                                                    <i className="bi-bell animate-target fs-sm" />
                                                </button>
                                                <button type="button" className="btn btn-icon btn-sm btn-outline-secondary animate-rotate rounded-circle" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-sm" title="Compare" aria-label="Compare">
                                                    <i className="bi-repeat animate-target fs-sm" />
                                                </button>
                                            </div>
                                        </div>
                                        <h3 className="h5 mb-2">
                                            <Link className="hover-effect-underline stretched-link me-1" to="single-entry-cars.html">Maserati
                                                Granturismo</Link>
                                            <span className="fs-sm fw-normal text-body-secondary">(2020)</span>
                                        </h3>
                                        <div className="h6 mb-0">$73,000</div>
                                    </div>
                                    <div className="card-footer bg-transparent border-0 pt-0 pb-4">
                                        <div className="d-flex flex-wrap justify-content-between gap-3 border-top fs-sm text-nowrap pt-3 pt-md-4">
                                            <div className="d-flex align-items-center gap-2">
                                                <i className="bi-geo-alt" />
                                                Los Angeles
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <i className="bi-alarm" />
                                                69K mi
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <i className="bi-fuel-pump" />
                                                Gasoline
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <i className="bi-building-gear" />
                                                Automatic
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="col-lg-7 d-flex flex-column gap-4">
                        {/* Item */}
                        <article className="card hover-effect-scale overflow-hidden">
                            <div className="row g-0">
                                <div className="col-sm-5 position-relative bg-body-tertiary overflow-hidden" style={{ "minHeight": "220px" }}>
                                    <div className="d-flex flex-column gap-2 align-items-start position-absolute top-0 start-0 z-1 pt-1 pt-sm-0 ps-1 ps-sm-0 mt-2 mt-sm-3 ms-2 ms-sm-3">
                                        <span className="badge text-bg-primary">New</span>
                                    </div>
                                    <img src="assets/img/listings/cars/list/01.jpg" className="hover-effect-target position-absolute top-0 start-0 w-100 h-100 object-fit-cover" alt="" />
                                </div>
                                <div className="col-sm-7 py-md-2">
                                    <div className="card-body pb-3 pb-md-4">
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <div className="fs-xs text-body-secondary me-3">23/10/2024</div>
                                            <div className="d-flex gap-2 position-relative z-2">
                                                <button type="button" className="btn btn-icon btn-sm btn-outline-secondary animate-pulse rounded-circle" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-sm" title="Wishlist" aria-label="Add to wishlist">
                                                    <i className="bi-heart animate-target fs-sm" />
                                                </button>
                                                <button type="button" className="btn btn-icon btn-sm btn-outline-secondary animate-shake rounded-circle" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-sm" title="Notify" aria-label="Notify">
                                                    <i className="bi-bell animate-target fs-sm" />
                                                </button>
                                                <button type="button" className="btn btn-icon btn-sm btn-outline-secondary animate-rotate rounded-circle" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-sm" title="Compare" aria-label="Compare">
                                                    <i className="bi-repeat animate-target fs-sm" />
                                                </button>
                                            </div>
                                        </div>
                                        <h3 className="h5 mb-2">
                                            <Link className="hover-effect-underline stretched-link me-1" to="single-entry-cars.html">Volvo XC90 Sport
                                                4WD</Link>
                                            <span className="fs-sm fw-normal text-body-secondary">(2024)</span>
                                        </h3>
                                        <div className="h6 mb-0">$92,500</div>
                                    </div>
                                    <div className="card-footer bg-transparent border-0 pt-0 pb-4">
                                        <div className="d-flex flex-wrap justify-content-between gap-3 border-top fs-sm text-nowrap pt-3 pt-md-4">
                                            <div className="d-flex align-items-center justify-content-between gap-3">
                                                <i className="bi-geo-alt" />
                                                Chicago
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <i className="bi-alarm" />
                                                0 mi
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <i className="bi-fuel-pump" />
                                                Hybrid
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <i className="bi-building-gear" />
                                                Automatic
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                        {/* Item */}
                        <article className="card hover-effect-scale overflow-hidden">
                            <div className="row g-0">
                                <div className="col-sm-5 position-relative bg-body-tertiary overflow-hidden" style={{ "minHeight": "220px" }}>
                                    <div className="d-flex flex-column gap-2 align-items-start position-absolute top-0 start-0 z-1 pt-1 pt-sm-0 ps-1 ps-sm-0 mt-2 mt-sm-3 ms-2 ms-sm-3">
                                        <span className="badge text-bg-warning">Used</span>
                                    </div>
                                    <img src="assets/img/listings/cars/list/05.jpg" className="hover-effect-target position-absolute top-0 start-0 w-100 h-100 object-fit-cover" alt="" />
                                </div>
                                <div className="col-sm-7 py-md-2">
                                    <div className="card-body pb-3 pb-md-4">
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <div className="fs-xs text-body-secondary me-3">15/07/2024</div>
                                            <div className="d-flex gap-2 position-relative z-2">
                                                <button type="button" className="btn btn-icon btn-sm btn-outline-secondary animate-pulse rounded-circle" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-sm" title="Wishlist" aria-label="Add to wishlist">
                                                    <i className="bi-heart animate-target fs-sm" />
                                                </button>
                                                <button type="button" className="btn btn-icon btn-sm btn-outline-secondary animate-shake rounded-circle" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-sm" title="Notify" aria-label="Notify">
                                                    <i className="bi-bell animate-target fs-sm" />
                                                </button>
                                                <button type="button" className="btn btn-icon btn-sm btn-outline-secondary animate-rotate rounded-circle" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-sm" title="Compare" aria-label="Compare">
                                                    <i className="bi-repeat animate-target fs-sm" />
                                                </button>
                                            </div>
                                        </div>
                                        <h3 className="h5 mb-2">
                                            <Link className="hover-effect-underline stretched-link me-1" to="single-entry-cars.html">Mercedes-Benz
                                                Coupe</Link>
                                            <span className="fs-sm fw-normal text-body-secondary">(2021)</span>
                                        </h3>
                                        <div className="h6 mb-0">$115,400</div>
                                    </div>
                                    <div className="card-footer bg-transparent border-0 pt-0 pb-4">
                                        <div className="d-flex flex-wrap justify-content-between gap-3 border-top fs-sm text-nowrap pt-3 pt-md-4">
                                            <div className="d-flex align-items-center justify-content-between gap-3">
                                                <i className="bi-geo-alt" />
                                                New York
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <i className="bi-alarm" />
                                                15K mi
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <i className="bi-fuel-pump" />
                                                Diesel
                                            </div>
                                            <div className="d-flex align-items-center gap-2">
                                                <i className="bi-building-gear" />
                                                Manual
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
            {/* Brands */}
            <section className="container pt-2 pt-sm-3 pt-md-4 pt-lg-5 pb-5 my-xxl-3">
                {/* Row of logos that turns into carousel on screens < 1200px wide (xl breakpoint) */}
                <div className="swiper pt-1 pt-sm-2 py-lg-2 py-xl-3" >
                    <Swiper
                        modules={[Pagination]}
                        slidesPerView={0}
                        spaceBetween={0}

                        breakpoints={{
                            420: {
                                slidesPerView: 3,
                                spaceBetween: 16,
                            },
                            550: {
                                slidesPerView: 4,
                                spaceBetween: 16,
                            },
                            730: {
                                slidesPerView: 5,
                                spaceBetween: 24,
                            },
                            880: {
                                slidesPerView: 6,
                                spaceBetween: 24,
                            },
                            992: {
                                slidesPerView: 7,
                                spaceBetween: 24,
                            },
                            1200: {
                                slidesPerView: 8,
                                spaceBetween: 24,
                            },
                        }}
                    >
                        <div class="swiper-wrapper">
                            {logo && logo.map((log, index) => {
                                return <SwiperSlide key={index}>
                                    <div className="swiper-slide nav">
                                        <Link className="nav-link p-0" to="listings-grid-cars.html" data-bs-toggle="tooltip" title="Mercedes-Benz" aria-label="Mercedes-Benz">
                                            {log.image}
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            })}

                        </div>

                    </Swiper>

                </div>
                {/* Pagination (Bullets) */}
                <div className="swiper-pagination position-static mt-3" />

            </section>
            {/* Popular categories */}
            <section className="container pt-2 pt-sm-3 pt-md-4 pt-lg-5 pb-5 my-xxl-3">
                <h2 className="text-center pb-2 pb-sm-3 pb-lg-4 mb-xl-4">Currently in demand</h2>
                {/* Row of items that turns into carousel on screens < 992px wide (lg breakpoint) */}
                <div className="swiper">
                    <Swiper
                        modules={[Pagination]}
                        slidesPerView={2}
                        spaceBetween={24}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            500: { slidesPerView: 3 },
                            768: { slidesPerView: 4 },
                            992: { slidesPerView: 5 },
                        }}
                    >
                        <div className="swiper-wrapper">
                            {categories && categories.map((category, index) => {
                                return <SwiperSlide key={index}>
                                    <article className="hover-effect-scale position-relative text-center">
                                        <div className="bg-body-tertiary rounded-circle overflow-hidden mx-auto" style={{ "width": "132px" }}>
                                            <div className="ratio ratio-1x1 hover-effect-target">
                                                <img src={category.image} alt="" />
                                            </div>
                                        </div>
                                        <h3 className="h6 pt-3 mb-0">
                                            <Link className="hover-effect-underline stretched-link" to="listings-grid-cars.html">{category.name}</Link>
                                        </h3>
                                    </article>
                                </SwiperSlide>
                            })}
                        </div>
                    </Swiper>

                    {/* Pagination (Bullets) */}
                    <div className="swiper-pagination position-static mt-3" />
                </div>
            </section>
            {/* Platform features */}
            <section className="container pt-2 pt-sm-3 pt-md-4 pt-lg-5 pb-5 my-xxl-3">
                <h2 className="pb-2 pb-sm-3">What sets Finder apart?</h2>
                {/* Row of cards that turns into carousel on screens < 992px wide (lg breakpoint) */}
                <Swiper
                    modules={[Pagination]}
                    slidesPerView={1}
                    spaceBetween={24}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        460: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        992: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {features.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="card h-100 bg-info-subtle border-0 p-2">
                                <div className="card-body">
                                    <i className={`${item.icon} fs-4 text-info`} />
                                    <h3 className="h5 pt-4">{item.title}</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </section>
            {/* Latest listings */}
            <section className="container pt-2 pt-sm-3 pt-md-4 pt-lg-5 pb-5 my-xxl-3">
                <div className="d-sm-flex justify-content-between gap-3 pb-3 mb-2 mb-sm-3">
                    <h2 className="mb-sm-0">Latest cars</h2>
                    <ul className="nav nav-pills flex-sm-nowrap gap-2 text-nowrap">
                        <li className="nav-item me-1">
                            <Link className="nav-link active" aria-current="page" to="#!">All</Link>
                        </li>
                        <li className="nav-item me-1">
                            <Link className="nav-link" to="#!">New cars</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#!">Used cars</Link>
                        </li>
                    </ul>
                </div>
                {/* Row of listings that turns into carousel on screens < 1200px wide (xl breakpoint) */}
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={24}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        550: {
                            slidesPerView: 2,
                        },
                        850: {
                            slidesPerView: 3,
                        },
                        1200: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    <div className="swiper-wrapper">
                        {cars.map((car) => (
                            <SwiperSlide key={car.id}>
                                <div className="swiper-slide h-auto">
                                    <article className="card h-100 hover-effect-scale">
                                        <div className="card-img-top position-relative overflow-hidden">
                                            <div className="d-flex flex-column gap-2 align-items-start position-absolute top-0 start-0 z-1 pt-1 pt-sm-0 ps-1 ps-sm-0 mt-2 mt-sm-3 ms-2 ms-sm-3">
                                                {car.verified && (
                                                    <span className="badge text-bg-info d-inline-flex align-items-center">
                                                        Verified
                                                        <i className="bi-shield ms-1" />
                                                    </span>
                                                )}

                                                <span
                                                    className={`badge ${car.status === "Active"
                                                        ? "text-bg-primary"
                                                        : "text-bg-warning"
                                                        }`}
                                                >
                                                    {car.status}
                                                </span>
                                            </div>
                                            <div className="ratio hover-effect-target bg-body-tertiary" style={{ "--fn-aspect-ratio": "calc(204 / 306 * 100%)" }}>
                                                <img src={car.image} alt="" />
                                            </div>
                                        </div>
                                        <div className="card-body pb-3">
                                            <div className="d-flex align-items-center justify-content-between mb-2">
                                                <div className="fs-xs text-body-secondary me-3">  {new Date(car.created_at).toLocaleDateString()}</div>
                                                <div className="d-flex gap-2 position-relative z-2">
                                                    <button type="button" className="btn btn-icon btn-sm btn-outline-secondary animate-pulse rounded-circle" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-sm" title="Wishlist" aria-label="Add to wishlist">
                                                        <i className="bi-heart animate-target fs-sm" />
                                                    </button>
                                                    <button type="button" className="btn btn-icon btn-sm btn-outline-secondary animate-shake rounded-circle" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-sm" title="Notify" aria-label="Notify">
                                                        <i className="bi-bell animate-target fs-sm" />
                                                    </button>
                                                    <button type="button" className="btn btn-icon btn-sm btn-outline-secondary animate-rotate rounded-circle" data-bs-toggle="tooltip" data-bs-custom-class="tooltip-sm" title="Compare" aria-label="Compare">
                                                        <i className="bi-repeat animate-target fs-sm" />
                                                    </button>
                                                </div>
                                            </div>
                                            <h3 className="h6 mb-2">
                                                <Link className="hover-effect-underline stretched-link me-1" to="single-entry-cars.html">{car.title}</Link>
                                                <span className="fs-xs fw-normal text-body-secondary">{car.year}</span>
                                            </h3>
                                            <div className="h6 mb-0">{car.price}</div>
                                        </div>
                                        <div className="card-footer bg-transparent border-0 pt-0 pb-4">
                                            <div className="border-top pt-3">
                                                <div className="row row-cols-2 g-2 fs-sm">
                                                    <div className="col d-flex align-items-center gap-2">
                                                        <i className="bi-geo-alt" />
                                                        {car.city}
                                                    </div>
                                                    <div className="col d-flex align-items-center gap-2">
                                                        <i className="bi-alarm" />
                                                        {car.mileage}
                                                    </div>
                                                    <div className="col d-flex align-items-center gap-2">
                                                        <i className="bi-fuel-pump" />
                                                        {car.fuel}
                                                    </div>
                                                    <div className="col d-flex align-items-center gap-2">
                                                        <i className="bi-building-gear" />
                                                        {car.transmission}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>


            </section>
            {/* Accessories from auto market */}
            <section className="container pt-2 pt-sm-3 pt-md-4 pt-lg-5 pb-5 my-xxl-3">
                <div className="bg-body-tertiary rounded py-5 px-4 px-md-5">
                    <div className="row align-items-start g-0 py-md-2 py-lg-4 px-lg-4 px-xl-5">
                        <div className="col-md-4 text-center text-md-start pe-md-4 pe-lg-0 pb-2 pb-sm-3 pb-md-0 mb-4 mb-md-0">
                            <h2 className="pb-1 mb-2">Auto market</h2>
                            <p className="pb-2 pb-lg-3">Choose the best for your car!</p>
                            <Link className="btn btn-lg btn-primary" to="listings-grid-cars.html">
                                Go to shop
                                <i className="bi-chevron-right fs-lg ms-1 me-n1" />
                            </Link>
                        </div>
                        <div className="col-md-8">
                            <Swiper
                                modules={[Pagination]}
                                spaceBetween={24}
                                slidesPerView={2}
                                pagination={{ clickable: true }}
                                breakpoints={{
                                    500: {
                                        slidesPerView: 3,
                                    },
                                    1200: {
                                        slidesPerView: 4,
                                    },
                                }}
                            >
                                {accessories.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <article className="position-relative text-center">
                                            <div
                                                className="ratio mx-auto mb-3"
                                                style={{
                                                    maxWidth: "164px",
                                                    "--fn-aspect-ratio": "calc(120 / 164 * 100%)",
                                                }}
                                            >
                                                <img src={item.image} alt={item.name} />
                                            </div>

                                            <h3 className="h6 fw-medium mb-0">
                                                <Link
                                                    className="hover-effect-underline stretched-link"
                                                    to="#!"
                                                >
                                                    {item.name}
                                                </Link>
                                            </h3>
                                        </article>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
            {/* Popular videos */}
            <section className="container py-2 py-sm-3 py-md-4 py-lg-5 my-xxl-3">
                <div className="d-flex align-items-center justify-content-between gap-3 pb-3 mb-2 mb-sm-3">
                    <h2 className="mb-0">Popular videos</h2>

                    <div className="nav">
                        <Link className="nav-link position-relative fs-base py-1 px-0" to="#">
                            <span className="hover-effect-underline stretched-link me-1">
                                More videos
                            </span>
                            <i className="bi-chevron-right fs-base"></i>
                        </Link>
                    </div>
                </div>

                <Swiper
                    modules={[Pagination]}
                    slidesPerView={1}
                    spaceBetween={24}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        500: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {videos.map((video) => (
                        <SwiperSlide key={video.id}>
                            <article className="position-relative hover-effect-scale">
                                <div className="position-relative rounded overflow-hidden">

                                    <div
                                        className="btn btn-icon btn-sm position-absolute top-0 start-0 text-white bg-body border-0 pe-none z-1 mt-2 ms-2"
                                        data-bs-theme="dark"
                                        style={{
                                            backdropFilter: "blur(6px)",
                                            "--fn-bg-opacity": ".6",
                                        }}
                                    >
                                        <i className="bi-camera-video fs-base"></i>
                                    </div>

                                    <div className="ratio hover-effect-target"
                                        style={{
                                            "--fn-aspect-ratio": "calc(272 / 416 * 100%)"
                                        }}>
                                        <img src={video.image} alt={video.title} />
                                    </div>

                                    <div
                                        className="position-absolute bottom-0 start-0 d-flex align-items-center justify-content-between w-100 bg-body text-white z-1 py-1 px-3"
                                        data-bs-theme="dark"
                                        style={{
                                            backdropFilter: "blur(6px)",
                                            "--fn-bg-opacity": ".6",
                                        }}
                                    >
                                        <div className="d-flex align-items-center fs-sm">
                                            <i className="bi-thumbs-up fs-base me-2"></i>
                                            {video.likes}
                                        </div>

                                        <div className="fs-sm">{video.duration}</div>
                                    </div>
                                </div>

                                <h3 className="h5 pt-3 pt-sm-4 mt-1 mt-sm-0 mb-0">
                                    <Link className="hover-effect-underline stretched-link" to="#">
                                        {video.title}
                                    </Link>
                                </h3>
                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </main>
    )
}