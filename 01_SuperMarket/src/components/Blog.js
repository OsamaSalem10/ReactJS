import { Link } from "react-router-dom"

export const Blog = () => {
    return (
     <main>
  <div className="mt-4">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="#!">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="#!">Blog</Link>
              </li>
              <li aria-current="page" className="breadcrumb-item active">
                Freshcart Blog
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
  
  <section className="mt-6 mb-lg-14 mb-8">
    <div className="container-fluid">
      <div className="row d-flex align-items-center mb-8">
        <div className="col-12 col-md-12 col-lg-8">
          <Link to="#!">
            <div className="img-zoom">
              <img
                alt=""
                className="img-fluid w-100"
                src="../assets/images/blog/blog-large.jpg"
              />
            </div>
          </Link>
        </div>
        <div className="col-12 col-md-12 col-lg-4">
          <div className="ps-lg-8 mt-8 mt-lg-0">
            <h2 className="mb-3">
              <Link className="text-inherit" to="#!">
                Garlic Cream Bucatini with Peas and Asparagus
              </Link>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac
              erat ut neque bibendum egestas sed quis justo. Integer non rhoncus
              diam. Nullam eget dapibus lectus, vitae condimentum sem.
            </p>
            <div className="d-flex justify-content-between text-muted">
              <span>
                <small>25 April 2023</small>
              </span>
              <span>
                <small>
                  Read time:
                  <span className="text-dark fw-bold">6min</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 mb-10">
          <div className="mb-4">
            <Link to="#!">
              <div className="img-zoom">
                <img
                  alt=""
                  className="img-fluid w-100"
                  src="../assets/images/blog/blog-img-1.jpg"
                />
              </div>
            </Link>
          </div>
          <div className="mb-3">
            <Link to="#!">Recipes</Link>
          </div>
          <div>
            <h2 className="h5">
              <Link className="text-inherit" to="#!">
                Harissa Chickpeas with Whipped Feta
              </Link>
            </h2>
            <p>
              In et eros dapibus, facilisis ipsum sit amet, tempor dolor. Donec
              sed nisi gravida, molestie dolor molestie, congue sapien.
            </p>
            <div className="d-flex justify-content-between text-muted mt-4">
              <span>
                <small>22 April 2023</small>
              </span>
              <span>
                <small>
                  Read time:
                  <span className="text-dark fw-bold">12min</span>
                </small>
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-10">
          <div className="mb-4">
            <Link to="#!">
              <div className="img-zoom">
                <img
                  alt=""
                  className="img-fluid w-100"
                  src="../assets/images/blog/blog-img-2.jpg"
                />
              </div>
            </Link>
          </div>
          <div className="mb-3">
            <Link to="#!">Recipes</Link>
          </div>
          <div>
            <h2 className="h5">
              <Link className="text-inherit" to="#!">
                Almond Butter Chocolate Chip Zucchini Bars
              </Link>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elitaenean sit
              amet tincidunt ellentesque aliquet ligula in ultrices congue.
            </p>
            <div className="d-flex justify-content-between text-muted mt-4">
              <span>
                <small>20 April 2023</small>
              </span>
              <span>
                <small>
                  Read time:
                  <span className="text-dark fw-bold">8min</span>
                </small>
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-10">
          <div className="mb-4">
            <Link to="#!">
              <div className="img-zoom">
                <img
                  alt=""
                  className="img-fluid w-100"
                  src="../assets/images/blog/blog-img-1.jpg"
                />
              </div>
            </Link>
          </div>
          <div className="mb-3">
            <Link to="#!">Company</Link>
          </div>
          <div>
            <h2 className="h5">
              <Link className="text-inherit" to="#!">
                Spicy Shrimp Tacos Garlic Cilantro Lime Slaw
              </Link>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elitaenean sit
              amet tincidunt ellentesque aliquet ligula in ultrices congue.
            </p>
            <div className="d-flex justify-content-between text-muted mt-4">
              <span>
                <small>18 April 2023</small>
              </span>
              <span>
                <small>
                  Read time:
                  <span className="text-dark fw-bold">5min</span>
                </small>
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-10">
          <div className="mb-4">
            <Link to="#!">
              <div className="img-zoom">
                <img
                  alt=""
                  className="img-fluid w-100"
                  src="../assets/images/blog/blog-img-4.jpg"
                />
              </div>
            </Link>
          </div>
          <div className="mb-3">
            <Link to="#!">Recipes</Link>
          </div>
          <div>
            <h2 className="h5">
              <Link className="text-inherit" to="#!">
                Red Chile Chicken Tacos with Creamy Corn
              </Link>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elitaenean sit
              amet tincidunt ellentesque aliquet ligula in ultrices congue.
            </p>
            <div className="d-flex justify-content-between text-muted mt-4">
              <span>
                <small>16 April 2023</small>
              </span>
              <span>
                <small>
                  Read time:
                  <span className="text-dark fw-bold">9min</span>
                </small>
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-10">
          <div className="mb-4">
            <Link to="#!">
              <div className="img-zoom">
                <img
                  alt=""
                  className="img-fluid w-100"
                  src="../assets/images/blog/blog-img-5.jpg"
                />
              </div>
            </Link>
          </div>
          <div className="mb-3">
            <Link to="#!">Retailer</Link>
          </div>
          <div>
            <h2 className="h5">
              <Link className="text-inherit" to="#!">
                Basic + Awesome Broccoli Cheese Soup
              </Link>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elitaenean sit
              amet tincidunt ellentesque aliquet ligula in ultrices congue.
            </p>
            <div className="d-flex justify-content-between text-muted mt-4">
              <span>
                <small>12 April 2023</small>
              </span>
              <span>
                <small>
                  Read time:
                  <span className="text-dark fw-bold">12min</span>
                </small>
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-10">
          <div className="mb-4">
            <Link to="#!">
              <div className="img-zoom">
                <img
                  alt=""
                  className="img-fluid w-100"
                  src="../assets/images/blog/blog-img-6.jpg"
                />
              </div>
            </Link>
          </div>
          <div className="mb-3">
            <Link to="#!">Recipes</Link>
          </div>
          <div>
            <h2 className="h5">
              <Link className="text-inherit" to="#!">
                No-Boil Baked Penne with Meatballs
              </Link>
            </h2>
            <p>
              Nulla consectetur sapien a libero imperdiet posuere. Donec
              sollicitudin, turpis sit amet sollicitudin tristique, metus eros
              euismod tortor
            </p>
            <div className="d-flex justify-content-between text-muted mt-4">
              <span>
                <small>14 April 2023</small>
              </span>
              <span>
                <small>
                  Read time:
                  <span className="text-dark fw-bold">6min</span>
                </small>
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-10">
          <div className="mb-4">
            <Link to="#!">
              <div className="img-zoom">
                <img
                  alt=""
                  className="img-fluid w-100"
                  src="../assets/images/blog/blog-img-7.jpg"
                />
              </div>
            </Link>
          </div>
          <div className="mb-3">
            <Link to="#!">Recipes</Link>
          </div>
          <div>
            <h2 className="h5">
              <Link className="text-inherit" to="#!">
                Red Chile Chicken Tacos with Creamy Corn
              </Link>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elitaenean sit
              amet tincidunt ellentesque aliquet ligula in ultrices congue.
            </p>
            <div className="d-flex justify-content-between text-muted mt-4">
              <span>
                <small>16 April 2023</small>
              </span>
              <span>
                <small>
                  Read time:
                  <span className="text-dark fw-bold">9min</span>
                </small>
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-10">
          <div className="mb-4">
            <Link to="#!">
              <div className="img-zoom">
                <img
                  alt=""
                  className="img-fluid w-100"
                  src="../assets/images/blog/blog-img-8.jpg"
                />
              </div>
            </Link>
          </div>
          <div className="mb-3">
            <Link to="#!">Retailer</Link>
          </div>
          <div>
            <h2 className="h5">
              <Link className="text-inherit" to="#!">
                Basic + Awesome Broccoli Cheese Soup
              </Link>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elitaenean sit
              amet tincidunt ellentesque aliquet ligula in ultrices congue.
            </p>
            <div className="d-flex justify-content-between text-muted mt-4">
              <span>
                <small>12 April 2023</small>
              </span>
              <span>
                <small>
                  Read time:
                  <span className="text-dark fw-bold">12min</span>
                </small>
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-10">
          <div className="mb-4">
            <Link to="#!">
              <div className="img-zoom">
                <img
                  alt=""
                  className="img-fluid w-100"
                  src="../assets/images/blog/blog-img-9.jpg"
                />
              </div>
            </Link>
          </div>
          <div className="mb-3">
            <Link to="#!">Recipes</Link>
          </div>
          <div>
            <h2 className="h5">
              <Link className="text-inherit" to="#!">
                No-Boil Baked Penne with Meatballs
              </Link>
            </h2>
            <p>
              Nulla consectetur sapien a libero imperdiet posuere. Donec
              sollicitudin, turpis sit amet sollicitudin tristique, metus eros
              euismod tortor
            </p>
            <div className="d-flex justify-content-between text-muted mt-4">
              <span>
                <small>14 April 2023</small>
              </span>
              <span>
                <small>
                  Read time:
                  <span className="text-dark fw-bold">6min</span>
                </small>
              </span>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  </section>
</main>
    )
}