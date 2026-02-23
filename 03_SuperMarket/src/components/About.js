import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
export const About = () => {
  const values = [
    {
      icon: "bi-person-plus",
      title: "People",
      text: `The most important value of the Company is people (employees, partners, clients). Behind any success there is a specific person creating the product, technology, and innovation.`,
    },
    {
      icon: "bi-bag",
      title: "Service",
      text: `Care, attention, desire and ability to be helpful to colleagues, clients, and everyone around us.`,
    },
    {
      icon: "bi-trending-up",
      title: "Responsibility",
      text: `We take responsibility and don't shift it to circumstances or others. When we see something to improve, we offer solutions.`,
    },
    {
      icon: "bi-rocket",
      title: "Innovation",
      text: `We embrace continuous improvement, creativity, experimentation, and the pursuit of new ideas.`,
    },
    {
      icon: "bi-star",
      title: "Leadership",
      text: `Cartzilla people are ambitious, energetic, and aim to be the best in what they do.`,
    },
    {
      icon: "bi-leaf",
      title: "Sustainability",
      text: `We minimize environmental impact through responsible sourcing and eco-friendly practices.`,
    },
  ];
  const positions = [
    {
      badge: "Full time",
      badgeClass: "bg-info",
      title: "Supply Chain and Logistics Coordinator",
      location: "New York",
    },
    {
      badge: "Part time",
      badgeClass: "bg-success",
      title: "Content Manager for Social Networks",
      location: "Remote",
    },
    {
      badge: "Full time",
      badgeClass: "bg-info",
      title: "Customer Service Representative",
      location: "London",
    },
    {
      badge: "Freelance",
      badgeClass: "bg-warning",
      title: "Data Analyst/Analytics Specialist",
      location: "Remote",
    },
    {
      badge: "Full time",
      badgeClass: "bg-info",
      title: "E-commerce Manager/Director",
      location: "In house",
    },
  ];
  return (
    <main className="content-wrapper">
      <nav aria-label="breadcrumb" className="container pt-3 my-3 my-md-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li aria-current="page" className="breadcrumb-item active">
            About
          </li>
        </ol>
      </nav>
      <section className="container">
        <div className="row">
          <div className="col-md-7 order-md-2 mb-4 mb-md-0">
            <div className="position-relative h-100">
              <div className="ratio ratio-16x9" />
              <img
                alt=""
                className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover rounded-5"
                src="assets/img/about/v1/hero.jpg"
              />
            </div>
          </div>
          <div className="col-md-5 order-md-1">
            <div className="position-relative py-5 px-4 px-sm-5">
              <span
                className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none-dark rtl-flip"
                style={{
                  background:
                    "linear-gradient(-90deg, #accbee 0%, #e7f0fd 100%)",
                }}
              />
              <span
                className="position-absolute top-0 start-0 w-100 h-100 rounded-5 d-none d-block-dark rtl-flip"
                style={{
                  background:
                    "linear-gradient(-90deg, #1b273a 0%, #1f2632 100%)",
                }}
              />
              <div className="position-relative z-1 py-md-2 py-lg-4 py-xl-5 px-xl-2 px-xxl-4 my-xxl-3">
                <h1 className="pb-1 pb-md-2 pb-lg-3">
                  Cartzilla - More than a retailer
                </h1>
                <p className="text-dark-emphasis pb-sm-2 pb-lg-0 mb-4 mb-lg-5">
                  Since 2015, we have been fulfilling the small dreams and big
                  plans of millions of people. You can find literally everything
                  here.
                </p>
                <Link
                  className="btn btn-lg btn-outline-dark animate-slide-down"
                  to="#mission"
                >
                  Learn more
                  <i className="bi-arrow-down fs-lg animate-target ms-2 me-n1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container py-5 mt-md-2 mt-lg-4">
        <div className="row row-cols-2 row-cols-md-4 g-4">
          <div className="col text-center">
            <div className="display-4 text-dark-emphasis mb-2">14k</div>
            <p className="fs-sm mb-0">products available for purchase</p>
          </div>
          <div className="col text-center">
            <div className="display-4 text-dark-emphasis mb-2">120m</div>
            <p className="fs-sm mb-0">users visited site from 2015</p>
          </div>
          <div className="col text-center">
            <div className="display-4 text-dark-emphasis mb-2">800+</div>
            <p className="fs-sm mb-0">employees around the world </p>
          </div>
          <div className="col text-center">
            <div className="display-4 text-dark-emphasis mb-2">92%</div>
            <p className="fs-sm mb-0">of our customers return</p>
          </div>
        </div>
      </section>

      <section className="container pt-5">
        <div className="row pt-2 pt-sm-3 pt-md-4 pt-lg-5">
          <div className="col-md-5 col-lg-6 pb-1 pb-sm-2 pb-md-0 mb-4 mb-md-0">
            <div className="ratio ratio-1x1">
              <img
                alt=""
                className="rounded-5"
                src="assets/img/about/v1/delivery.jpg"
              />
            </div>
          </div>
          <div className="col-md-7 col-lg-6 pt-md-3 pt-xl-4 pt-xxl-5">
            <div className="ps-md-3 ps-lg-4 ps-xl-5 ms-xxl-4">
              <h2 className="text-body fs-sm fw-normal">Principles</h2>
              <h3 className="h1 pb-1 pb-sm-2 pb-lg-3">
                The main principles that will allow us to grow
              </h3>
              <p className="pb-xl-3">
                Cartzilla is a comprehensive solution to fulfill any customer's
                needs, serving as both the starting point and end destination of
                their search. It operates as a reliable assistant, dedicated to
                eliminating the need for any unpleasant compromises, making
                their dreams a reality, and empowering them to think big.
              </p>
              <div className="accordion accordion-alt-icon" id="principles">
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingFocus">
                    <button
                      aria-controls="focus"
                      aria-expanded="false"
                      className="accordion-button animate-underline collapsed"
                      data-bs-target="#focus"
                      data-bs-toggle="collapse"
                      type="button"
                    >
                      <span className="animate-target me-2">
                        Customer focus
                      </span>
                    </button>
                  </h3>
                  <div
                    aria-labelledby="headingFocus"
                    className="accordion-collapse collapse"
                    data-bs-parent="#principles"
                    id="focus"
                  >
                    <div className="accordion-body">
                      We prioritize understanding and anticipating our
                      customers' needs, delivering an exceptional and
                      personalized experience from start to finish.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingReputation">
                    <button
                      aria-controls="reputation"
                      aria-expanded="false"
                      className="accordion-button animate-underline collapsed"
                      data-bs-target="#reputation"
                      data-bs-toggle="collapse"
                      type="button"
                    >
                      <span className="animate-target me-2">
                        Betting on reputation
                      </span>
                    </button>
                  </h3>
                  <div
                    aria-labelledby="headingReputation"
                    className="accordion-collapse collapse"
                    data-bs-parent="#principles"
                    id="reputation"
                  >
                    <div className="accordion-body">
                      We value a solid reputation built on integrity,
                      transparency, and quality - ensuring our customers trust
                      and rely on our brand.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header" id="headingFast">
                    <button
                      aria-controls="fast"
                      aria-expanded="false"
                      className="accordion-button animate-underline collapsed"
                      data-bs-target="#fast"
                      data-bs-toggle="collapse"
                      type="button"
                    >
                      <span className="animate-target me-2">
                        Fast, convenient and enjoyable
                      </span>
                    </button>
                  </h3>
                  <div
                    aria-labelledby="headingFast"
                    className="accordion-collapse collapse"
                    data-bs-parent="#principles"
                    id="fast"
                  >
                    <div className="accordion-body">
                      We've streamlined our process for speed, convenience, and
                      an enjoyable shopping experience, redefining online
                      standards for our delighted customers.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container-start pt-5">
        <div className="row align-items-center g-0 pt-2 pt-sm-3 pt-md-4 pt-lg-5">
          {/* LEFT SIDE */}
          <div className="col-md-4 col-lg-3 pb-1 pb-md-0 pe-3 ps-md-0 mb-4 mb-md-0">
            <div className="d-flex flex-md-column align-items-end align-items-md-start">
              <div className="mb-md-5 me-3 me-md-0">
                <h2 className="text-body fs-sm fw-normal">Values</h2>
                <h3 className="h1 mb-0">Simple values to achieve goals</h3>
              </div>

              {/* Navigation Buttons */}
              <div className="d-flex gap-2">
                <button
                  aria-label="Prev"
                  className="btn btn-icon btn-outline-secondary rounded-circle animate-slide-start me-1"
                  id="prev-values"
                  type="button"
                >
                  <i className="bi-chevron-left fs-xl animate-target" />
                </button>

                <button
                  aria-label="Next"
                  className="btn btn-icon btn-outline-secondary rounded-circle animate-slide-end"
                  id="next-values"
                  type="button"
                >
                  <i className="bi-chevron-right fs-xl animate-target" />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (Swiper) */}
          <div className="col-md-8 col-lg-9">
            <div className="ps-md-4 ps-lg-5">
              <Swiper
                modules={[Navigation]}
                navigation={{
                  prevEl: "#prev-values",
                  nextEl: "#next-values",
                }}
                slidesPerView={"auto"}
                spaceBetween={24}
                loop={true}
                className="values-swiper"
              >
                {values.map((item, i) => (
                  <SwiperSlide className="w-auto h-auto" key={i}>
                    <div
                      className="card h-100 rounded-4 px-3"
                      style={{ maxWidth: "306px" }}
                    >
                      <div className="card-body py-5 px-3">
                        <div className="h5 d-flex align-items-center">
                          <i className={`${item.icon} fs-4 me-3`} />
                          {item.title}
                        </div>
                        <p className="mb-0">{item.text}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className="container pt-5 mt-2 mt-sm-3 mt-md-4 mt-lg-5">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="position-relative h-100">
              <div className="ratio ratio-16x9" />
              <img
                alt=""
                className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover rounded-5"
                src="assets/img/about/v1/video-cover.jpg"
              />
              <div className="position-absolute start-0 bottom-0 d-flex align-items-end w-100 h-100 z-2 p-4">
                <Link
                  className="btn btn-lg btn-light rounded-pill m-md-2"
                  data-glightbox=""
                  to="https://www.youtube.com/watch?v=Sqqj_14wBxU"
                >
                  <i className="bi-play fs-lg ms-n1 me-2" />
                  Play
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="bg-body-tertiary rounded-5 py-5 px-4 px-sm-5">
              <div className="py-md-3 py-lg-4 py-xl-5 px-lg-4 px-xl-5 my-lg-2 my-xl-4 my-xxl-5">
                <h2 className="h3 pb-sm-1 pb-lg-2">
                  The role of philanthropy in building a better world
                </h2>
                <p className="pb-sm-2 pb-lg-0 mb-4 mb-lg-5">
                  Charitable contributions are a vital aspect of building a
                  better world. These contributions come in various forms,
                  including monetary donations...
                </p>
                <Link className="btn btn-lg btn-outline-dark" to="#!">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container py-5 mt-2 mb-1 my-sm-3 my-md-4 my-lg-5">
        <div className="d-flex align-items-end justify-content-between pb-3 mb-1 mb-md-3">
          {/* Left Titles */}
          <div className="me-4">
            <h2 className="text-body fs-sm fw-normal">Career</h2>
            <h3 className="h1 mb-0">Open positions</h3>
          </div>

          {/* Navigation Buttons */}
          <div className="d-flex justify-content-center justify-content-md-start gap-2">
            <button
              id="prev-positions"
              aria-label="Prev"
              type="button"
              className="btn btn-icon btn-outline-secondary rounded-circle animate-slide-start me-1"
            >
              <i className="bi-chevron-left fs-xl animate-target" />
            </button>

            <button
              id="next-positions"
              aria-label="Next"
              type="button"
              className="btn btn-icon btn-outline-secondary rounded-circle animate-slide-end"
            >
              <i className="bi-chevron-right fs-xl animate-target" />
            </button>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: "#prev-positions",
            nextEl: "#next-positions",
          }}
          slidesPerView={1}
          spaceBetween={24}
          loop={true}
          breakpoints={{
            500: { slidesPerView: 2 },
            800: { slidesPerView: 3 },
            1080: { slidesPerView: 4 },
          }}
          className="py-2"
        >
          {positions.map((job, i) => (
            <SwiperSlide className="h-auto" key={i}>
              <Link
                to="#!"
                className="card btn btn-outline-secondary w-100 h-100 align-items-start text-wrap text-start rounded-4 px-0 px-xl-2 py-4 py-xl-5"
              >
                <div className="card-body pb-0 pt-3 pt-xl-0">
                  <span
                    className={`badge ${job.badgeClass} fs-xs rounded-pill`}
                  >
                    {job.badge}
                  </span>

                  <h4 className="h5 py-3 my-2 my-xl-3">{job.title}</h4>
                </div>

                <div className="card-footer w-100 bg-transparent border-0 text-body fs-sm fw-normal pt-0 pb-3 pb-xl-0">
                  {job.location}
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </main>
  );
};
