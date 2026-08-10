import { Link } from "react-router-dom"
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs , Pagination} from "swiper/modules";
export const SingleEntryCars = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const prevRef = useRef(null);
    const nextRef = useRef(null);

const cars = [
  {
    image: "assets/img/listings/cars/grid/03.jpg",
    date: "30/09/2024",
    name: "Ford Truck Lifted",
    year: "2024",
    price: "$79,000",
    location: "Boston",
    mileage: "0K mi",
    fuel: "Diesel",
    transmission: "Automatic",
    badges: ["Verified", "New"],
  },
  {
    image: "assets/img/listings/cars/grid/05.jpg",
    date: "15/07/2024",
    name: "Mercedes-Benz Coupe",
    year: "2021",
    price: "$115,400",
    location: "New York",
    mileage: "15K mi",
    fuel: "Gasoline",
    transmission: "Manual",
    badges: ["Used"],
  },
  {
    image: "assets/img/listings/cars/grid/02.jpg",
    date: "16/08/2024",
    name: "Porsche 911 Turbo S",
    year: "2017",
    price: "$85,000",
    location: "Chicago",
    mileage: "32K mi",
    fuel: "Gasoline",
    transmission: "Manual",
    badges: ["Verified", "Used"],
  },
  {
    image: "assets/img/listings/cars/grid/07.jpg",
    date: "19/10/2024",
    name: "Tesla Model 3",
    year: "2024",
    price: "$36,200",
    location: "Los Angeles",
    mileage: "0K mi",
    fuel: "Electric",
    transmission: "Automatic",
    badges: ["New"],
  },
];

    const images = [
        "assets/img/listings/cars/single/gallery/01.jpg",
        "assets/img/listings/cars/single/gallery/02.jpg",
        "assets/img/listings/cars/single/gallery/03.jpg",
        "assets/img/listings/cars/single/gallery/04.jpg",
        "assets/img/listings/cars/single/gallery/05.jpg",
        "assets/img/listings/cars/single/gallery/06.jpg",
        "assets/img/listings/cars/single/gallery/07.jpg",
        "assets/img/listings/cars/single/gallery/08.jpg",
    ];
    return <main className="content-wrapper">
        <section className="container pt-4 pb-5 mb-xxl-3">
            <nav aria-label="breadcrumb" className="pb-2">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="home-cars.html">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to="listings-grid-cars.html">Used cars</Link>
                    </li>
                    <li aria-current="page" className="breadcrumb-item active">
                        Mercedes-Benz A205 Cabriolet
                    </li>
                </ol>
            </nav>
            <div className="d-flex justify-content-between gap-3 position-relative z-2 mb-3 mb-lg-4">
                <h1 className="mb-0">
                    Mercedes-Benz A205 Cabriolet
                    <span className="fs-xl fw-normal text-body-secondary align-middle">
                        (2021)
                    </span>
                </h1>
                <div className="d-flex gap-2">
                    <div
                        className="dropdown"
                        data-bs-custom-class="tooltip-sm"
                        data-bs-toggle="tooltip"
                        title="Share">
                        <button
                            aria-expanded="false"
                            aria-haspopup="true"
                            aria-label="Share"
                            className="btn btn-icon btn-ghost btn-secondary animate-scale rounded-circle"
                            data-bs-toggle="dropdown"
                            type="button">
                            <i className="bi-share animate-target fs-base" />
                        </button>
                        <ul
                            className="dropdown-menu dropdown-menu-end"
                            style={{
                                "--fn-dropdown-min-width": "9.5rem",
                            }}>
                            <li>
                                <Link className="dropdown-item" to="#!">
                                    <i className="bi-facebook fs-base me-2" />
                                    Facebook
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="#!">
                                    <i className="bi-instagram fs-base me-2" />
                                    Instagram
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="#">
                                    <i className="bi-linkedin fs-base me-2" />
                                    LinkedIn
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <button
                        aria-label="Wishlist"
                        className="btn btn-icon btn-secondary animate-pulse rounded-circle"
                        data-bs-custom-class="tooltip-sm"
                        data-bs-toggle="tooltip"
                        title="Wishlist"
                        type="button">
                        <i className="bi-heart animate-target fs-base" />
                    </button>
                </div>
            </div>
            <div className="d-lg-none mb-4">
                <div className="d-flex align-items-center justify-content-between gap-3 pb-1 mb-2">
                    <div className="h2 mb-0">$41 900</div>
                    <div className="d-flex gap-2 mb-3">
                        <span className="badge text-bg-info d-inline-flex align-items-center">
                            Verified
                            <i className="bi-shield ms-1" />
                        </span>
                        <span className="badge text-bg-warning">Used</span>
                    </div>
                </div>
                <div className="d-flex flex-wrap gap-2 gap-sm-3 fs-sm text-nowrap">
                    <div className="d-flex align-items-center gap-2 me-2">
                        <i className="bi-geo-alt" />
                        Chicago
                    </div>
                    <div className="d-flex align-items-center gap-2 me-2">
                        <i className="bi-speedometer" />
                        60K mi
                    </div>
                    <div className="d-flex align-items-center gap-2 me-2">
                        <i className="bi-fuel-pump" />
                        Gasoline
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <i className="bi-gearbox" />
                        Automatic
                    </div>
                </div>
            </div>
            <div className="row">
                 <div className="col-lg-8 pb-3 pb-sm-0 mb-4 mb-sm-5 mb-lg-0">

      {/* ================= MAIN GALLERY ================= */}

      <div className="position-relative hover-effect-opacity">

        <Swiper
          modules={[Navigation, Thumbs]}
          loop={true}
          spaceBetween={16}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed
                ? thumbsSwiper
                : null,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          className="swiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="ratio bg-body-tertiary rounded overflow-hidden"
                style={{
                  "--fn-aspect-ratio": "calc(482 / 856 * 100%)",
                }}
              >
                <img
                  src={image}
                  alt={`Car ${index + 1}`}
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
            </SwiperSlide>
          ))}

          {/* PREV */}

          <div className="position-absolute top-50 start-0 z-2 translate-middle-y ms-3 ms-sm-4 hover-effect-target opacity-0">
            <button
              ref={prevRef}
              type="button"
              aria-label="Prev"
              className="btn btn-prev btn-icon btn-secondary bg-body border-0 rounded-circle animate-slide-start"
              data-bs-theme="light"
            >
              <i className="bi-chevron-left fs-lg animate-target" />
            </button>
          </div>

          {/* NEXT */}

          <div className="position-absolute top-50 end-0 z-2 translate-middle-y me-3 me-sm-4 hover-effect-target opacity-0">
            <button
              ref={nextRef}
              type="button"
              aria-label="Next"
              className="btn btn-next btn-icon btn-secondary bg-body border-0 rounded-circle animate-slide-end"
              data-bs-theme="light"
            >
              <i className="bi-chevron-right fs-lg animate-target" />
            </button>
          </div>
        </Swiper>
      </div>

      {/* ================= THUMBNAILS ================= */}

      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={16}
        slidesPerView={3}
        watchSlidesProgress={true}
        breakpoints={{
          340: {
            slidesPerView: 4,
          },
          500: {
            slidesPerView: 5,
          },
          600: {
            slidesPerView: 6,
          },
          768: {
            slidesPerView: 4,
          },
          992: {
            slidesPerView: 5,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
        className="swiper swiper-load swiper-thumbs pt-2 mt-1"
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="swiper-thumb overflow-hidden"
          >
            <div
              className="ratio bg-body-tertiary"
              style={{
                "--fn-aspect-ratio": "calc(115 / 156 * 100%)",
              }}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="swiper-thumb-img w-100 h-100 object-fit-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
               
                <aside
                    className="col-lg-4"
                    style={{
                        marginTop: "-110px",
                    }}>
                    <div
                        className="position-sticky top-0"
                        style={{
                            paddingTop: "110px",
                        }}>
                        <div className="d-none d-lg-block">
                            <div className="d-flex gap-2 pb-1 mb-2">
                                <span className="badge text-bg-info d-inline-flex align-items-center">
                                    Verified
                                    <i className="bi-shield ms-1" />
                                </span>
                                <span className="badge text-bg-warning">Used</span>
                            </div>
                            <div className="h2 pb-1 mb-2">$41 900</div>
                            <div className="d-flex flex-wrap justify-content-lg-between gap-2 fs-sm text-nowrap mb-4">
                                <div className="d-flex align-items-center gap-2 me-2">
                                    <i className="bi-geo-alt" />
                                    Chicago
                                </div>
                                <div className="d-flex align-items-center gap-2 me-2">
                                    <i className="bi-speedometer" />
                                    60K mi
                                </div>
                                <div className="d-flex align-items-center gap-2 me-2">
                                    <i className="bi-gas-pump" />
                                    Gasoline
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <i className="bi-gearbox" />
                                    Automatic
                                </div>
                            </div>
                        </div>
                        <div className="card bg-body-tertiary border-0 p-sm-2 p-lg-0 p-xl-2 mb-4">
                            <div className="card-body">
                                <div className="d-flex align-items-center position-relative mb-3">
                                    <div
                                        className="ratio ratio-1x1 flex-shrink-0 bg-body-secondary rounded-circle overflow-hidden"
                                        style={{
                                            width: "72px",
                                        }}>
                                        <img
                                            alt="Avatar"
                                            src="assets/img/listings/cars/single/seller.jpg"
                                        />
                                    </div>
                                    <div className="w-100 ps-3">
                                        <div className="d-flex align-items-center justify-content-between gap-3 mb-1">
                                            <Link
                                                className="h6 fs-sm hover-effect-underline stretched-link text-decoration-none mb-0"
                                                to="#!">
                                                Darrell Steward
                                            </Link>
                                            <span className="badge text-bg-light">Private seller</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-1">
                                            <i className="bi-star-fill text-warning" />
                                            <span className="fs-sm fw-medium text-dark-emphasis">
                                                4.9
                                            </span>
                                            <span className="fs-xs text-body-secondary">
                                                (5 reviews)
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="nav mb-3">
                                    <Link className="nav-link position-relative px-0" to="#!">
                                        <span className="hover-effect-underline stretched-link">
                                            Other ads by this seller
                                        </span>
                                        <i className="bi-chevron-right fs-base ms-1" />
                                    </Link>
                                </div>
                                <div className="d-flex flex-wrap gap-3">
                                    <button className="btn btn-outline-dark" type="button">
                                        (316) *** **** - reveal
                                    </button>
                                    <Link
                                        className="btn btn-primary"
                                        to="mailto:d.steward@example.com">
                                        <i className="bi-mail fs-base me-2" />
                                        Send email
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="card p-sm-2 p-lg-0 p-xl-2">
                            <div className="card-body">
                                <h4 className="h6">
                                    Email me price drops and new listings for these search results:
                                </h4>
                                <form
                                    className="needs-validation d-flex flex-column flex-sm-row flex-lg-column flex-xl-row gap-2 gap-sm-3 gap-lg-2 gap-xl-3 mb-3"
                                    noValidate>
                                    <div className="position-relative">
                                        <i className="bi-mail position-absolute top-50 start-0 translate-middle-y ms-3" />
                                        <input
                                            className="form-control form-icon-start"
                                            placeholder="Your email"
                                            required
                                            type="email"
                                        />
                                    </div>
                                    <button className="btn btn-secondary" type="submit">
                                        Subscribe
                                    </button>
                                </form>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        id="concent"
                                        type="checkbox"
                                    />
                                    <label className="form-check-label fs-xs" htmlFor="concent">
                                        I agree to receive price drop alerts on this vehicle and
                                        helpful shopping information.
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </section>
        <section className="container py-2 py-sm-3 py-md-4 py-lg-5 my-xxl-3">
            <div className="d-flex align-items-start justify-content-between gap-4 pb-3 mb-2 mb-sm-3">
                <h2 className="mb-0">You may be interested in</h2>
                <div className="nav">
                    <Link
                        className="nav-link position-relative text-nowrap py-1 px-0"
                        to="listings-grid-cars.html">
                        <span className="hover-effect-underline stretched-link me-1">
                            View all
                        </span>
                        <i className="bi-chevron-right fs-lg" />
                    </Link>
                </div>
            </div>
            <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      spaceBetween={24}
      pagination={{
        clickable: true,
        el: ".cars-pagination",
      }}
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
      className="pb-5"
    >
      {cars.map((car, index) => (
        <SwiperSlide key={index} className="h-auto">
          <article className="card h-100 hover-effect-scale bg-body-tertiary border-0">

            {/* Image */}
            <div className="card-img-top position-relative overflow-hidden">

              {/* Badges */}
              <div className="d-flex flex-column gap-2 align-items-start position-absolute top-0 start-0 z-1 pt-1 pt-sm-0 ps-1 ps-sm-0 mt-2 mt-sm-3 ms-2 ms-sm-3">
                {car.badges.map((badge, i) => (
                  <span
                    key={i}
                    className={`badge ${
                      badge === "Verified"
                        ? "text-bg-info d-inline-flex align-items-center"
                        : badge === "New"
                        ? "text-bg-primary"
                        : "text-bg-warning"
                    }`}
                  >
                    {badge}

                    {badge === "Verified" && (
                      <i className="bi-shield ms-1" />
                    )}
                  </span>
                ))}
              </div>

              {/* Image */}
              <div
                className="ratio hover-effect-target"
                style={{
                  "--fn-aspect-ratio": "calc(204 / 306 * 100%)",
                }}
              >
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
            </div>

            {/* Body */}
            <div className="card-body pb-3">

              <div className="d-flex align-items-center justify-content-between mb-2">

                <div className="fs-xs text-body-secondary me-3">
                  {car.date}
                </div>

                <div className="d-flex gap-2 position-relative z-2">

                  <button
                    aria-label="Add to wishlist"
                    className="btn btn-icon btn-sm btn-outline-secondary animate-pulse rounded-circle"
                    type="button"
                  >
                    <i className="bi-heart animate-target fs-sm" />
                  </button>

                  <button
                    aria-label="Notify"
                    className="btn btn-icon btn-sm btn-outline-secondary animate-shake rounded-circle"
                    type="button"
                  >
                    <i className="bi-bell animate-target fs-sm" />
                  </button>

                  <button
                    aria-label="Compare"
                    className="btn btn-icon btn-sm btn-outline-secondary animate-rotate rounded-circle"
                    type="button"
                  >
                    <i className="bi-repeat animate-target fs-sm" />
                  </button>

                </div>
              </div>

              {/* Name */}
              <h3 className="h6 mb-2">
                <Link
                  to="#"
                  className="hover-effect-underline stretched-link me-1"
                >
                  {car.name}
                </Link>

                <span className="fs-xs fw-normal text-body-secondary">
                  ({car.year})
                </span>
              </h3>

              {/* Price */}
              <div className="h6 mb-0">
                {car.price}
              </div>
            </div>

            {/* Footer */}
            <div className="card-footer bg-transparent border-0 pt-0 pb-4">
              <div className="border-top pt-3">

                <div className="row row-cols-2 g-2 fs-sm">

                  <div className="col d-flex align-items-center gap-2">
                    <i className="bi-geo-alt" />
                    {car.location}
                  </div>

                  <div className="col d-flex align-items-center gap-2">
                    <i className="bi-speedometer" />
                    {car.mileage}
                  </div>

                  <div className="col d-flex align-items-center gap-2">
                    <i className="bi-gas-pump" />
                    {car.fuel}
                  </div>

                  <div className="col d-flex align-items-center gap-2">
                    <i className="bi-gearbox" />
                    {car.transmission}
                  </div>

                </div>
              </div>
            </div>

          </article>
        </SwiperSlide>
      ))}

      {/* Pagination */}
      <div className="cars-pagination swiper-pagination position-static mt-3 mt-lg-4" />
    </Swiper>
        </section>
    </main>
}