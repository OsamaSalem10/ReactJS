import { Link } from "react-router-dom"

export const ListingsGridCars = () => {
    return <main className="content-wrapper">
        <div className="container pt-4 pb-5 mb-xxl-3">
            <nav aria-label="breadcrumb" className="pb-2">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="home-cars.html">Home</Link>
                    </li>
                    <li aria-current="page" className="breadcrumb-item active">
                        Used cars
                    </li>
                </ol>
            </nav>
            <div className="d-flex align-items-center gap-3 border-bottom pb-2 mb-4">
                <div className="fs-sm text-nowrap pb-3">
                    <span className="d-none d-md-inline">Showing</span> 142 results
                </div>
                <div className="w-100 pb-3 overflow-x-auto">
                    <div className="d-flex gap-2">
                        <button
                            className="btn btn-sm btn-secondary rounded-pill"
                            type="button">
                            <i className="bi-x fs-sm me-1 ms-n1" />
                            Sedan
                        </button>
                        <button
                            className="btn btn-sm btn-secondary rounded-pill"
                            type="button">
                            <i className="bi-x fs-sm me-1 ms-n1" />
                            SUV
                        </button>
                        <button
                            className="btn btn-sm btn-secondary rounded-pill"
                            type="button">
                            <i className="bi-x fs-sm me-1 ms-n1" />
                            Coupe
                        </button>
                        <button
                            className="btn btn-sm btn-secondary rounded-pill"
                            type="button">
                            <i className="bi-x fs-sm me-1 ms-n1" />
                            Under 2023
                        </button>
                        <button
                            className="btn btn-sm btn-secondary rounded-pill"
                            type="button">
                            <i className="bi-x fs-sm me-1 ms-n1" />
                            $17,000 - $120,000
                        </button>
                    </div>
                </div>
                <div className="nav pb-3">
                    <Link
                        className="nav-link fs-xs text-decoration-underline text-nowrap p-0"
                        to="#!">
                        Clear all
                    </Link>
                </div>
            </div>
            <div className="row pt-md-2 pt-lg-3 pb-2 pb-sm-3 pb-md-4 pb-lg-5">
                <aside className="col-lg-3">
                    <div
                        className="offcanvas-lg offcanvas-start pe-lg-2 pe-xl-3 pe-xxl-4"
                        id="filterSidebar">
                        <div className="offcanvas-header border-bottom py-3">
                            <h3 className="h5 offcanvas-title">Filters</h3>
                            <button
                                aria-label="Close"
                                className="btn-close d-lg-none"
                                data-bs-dismiss="offcanvas"
                                data-bs-target="#filterSidebar"
                                type="button"
                            />
                        </div>
                        <div className="offcanvas-body d-block">
                            <ul className="nav nav-pills flex-sm-nowrap gap-2 text-nowrap pb-4 mb-2 mb-xl-3">
                                <li className="nav-item me-1">
                                    <Link className="nav-link" to="#!">
                                        New cars
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link aria-current="page" className="nav-link active" to="#!">
                                        Used cars
                                    </Link>
                                </li>
                            </ul>
                            <div className="pb-4 mb-2 mb-xl-3">
                                <h4 className="h6">Location and radius</h4>
                                <div className="vstack gap-3">
                                    <div className="position-relative">
                                        <i className="bi bi-geo-alt position-absolute top-50 start-0 translate-middle-y z-1 ms-3" />
                                        <select
                                            aria-label="Car location select"
                                            className="form-select form-icon-start"
                                            data-select='{                        "classNames": {                          "containerInner": ["form-select", "form-icon-start"]                        },                        "searchEnabled": true                      }'>
                                            <option value="">Any location</option>
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
                                    </div>
                                    <div className="position-relative">
                                        <i className="bi-navigation position-absolute top-50 start-0 translate-middle-y z-1 ms-3" />
                                        <select
                                            aria-label="Location radius select"
                                            className="form-select form-icon-start"
                                            data-select='{                        "classNames": {                          "containerInner": ["form-select", "form-icon-start"]                        }                      }'>
                                            <option value="">Any radius</option>
                                            <option value="10 mi">10 mi</option>
                                            <option value="20 mi">20 mi</option>
                                            <option value="30 mi">30 mi</option>
                                            <option value="40 mi">40 mi</option>
                                            <option value="50 mi">50 mi</option>
                                            <option value="60 mi">60 mi</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-4 mb-2 mb-xl-3">
                                <h4 className="h6">Body type</h4>
                                <div
                                    data-simplebar=""
                                    data-simplebar-auto-hide="false"
                                    style={{
                                        height: "202px",
                                    }}>
                                    <div className="d-flex flex-column gap-2">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                defaultChecked
                                                id="sedan"
                                                type="checkbox"
                                            />
                                            <label className="form-check-label fs-sm" htmlFor="sedan">
                                                Sedan
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                defaultChecked
                                                id="suv"
                                                type="checkbox"
                                            />
                                            <label className="form-check-label fs-sm" htmlFor="suv">
                                                SUV
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                id="wagon"
                                                type="checkbox"
                                            />
                                            <label className="form-check-label fs-sm" htmlFor="wagon">
                                                Wagon
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                id="crossover"
                                                type="checkbox"
                                            />
                                            <label
                                                className="form-check-label fs-sm"
                                                htmlFor="crossover">
                                                Crossover
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                defaultChecked
                                                id="coupe"
                                                type="checkbox"
                                            />
                                            <label className="form-check-label fs-sm" htmlFor="coupe">
                                                Coupe
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                id="pickup"
                                                type="checkbox"
                                            />
                                            <label className="form-check-label fs-sm" htmlFor="pickup">
                                                Pickup
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                id="sport"
                                                type="checkbox"
                                            />
                                            <label className="form-check-label fs-sm" htmlFor="sport">
                                                Sport Coupe
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                id="compact"
                                                type="checkbox"
                                            />
                                            <label className="form-check-label fs-sm" htmlFor="compact">
                                                Compact
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                id="convertible"
                                                type="checkbox"
                                            />
                                            <label
                                                className="form-check-label fs-sm"
                                                htmlFor="convertible">
                                                Convertible
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                id="mpv"
                                                type="checkbox"
                                            />
                                            <label className="form-check-label fs-sm" htmlFor="mpv">
                                                Family MPV
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-4 mb-2 mb-xl-3">
                                <h4 className="h6">Year</h4>
                                <div className="d-flex align-items-center">
                                    <div className="w-50">
                                        <select
                                            aria-label="Car year from select"
                                            className="form-select"
                                            data-select="">
                                            <option value="">From</option>
                                            <option value="2025">2025</option>
                                            <option value="2024">2024</option>
                                            <option value="2023">2023</option>
                                            <option value="2023">2023</option>
                                            <option value="2021">2021</option>
                                            <option value="2020">2020</option>
                                            <option value="2019">2019</option>
                                            <option value="2018">2018</option>
                                            <option value="2017">2017</option>
                                            <option value="2016">2016</option>
                                            <option value="2015">2015</option>
                                        </select>
                                    </div>
                                    <i className="bi-minus mx-3 mx-lg-1 mx-xl-2 mx-xxl-3" />
                                    <div className="w-50">
                                        <select
                                            aria-label="Car year from select"
                                            className="form-select"
                                            data-select="">
                                            <option value="">To</option>
                                            <option value="2025">2025</option>
                                            <option value="2024">2024</option>
                                            <option selected value="2023">
                                                2023
                                            </option>
                                            <option value="2023">2023</option>
                                            <option value="2021">2021</option>
                                            <option value="2020">2020</option>
                                            <option value="2019">2019</option>
                                            <option value="2018">2018</option>
                                            <option value="2017">2017</option>
                                            <option value="2016">2016</option>
                                            <option value="2015">2015</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-4 mb-2 mb-xl-3">
                                <h4 className="h6">Make and model</h4>
                                <div className="vstack gap-3">
                                    <select
                                        aria-label="Car make select"
                                        className="form-select"
                                        data-select='{"searchEnabled": true}'>
                                        <option value="">Any make</option>
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
                                    <select
                                        aria-label="Car model select"
                                        className="form-select"
                                        data-select='{"searchEnabled": true}'>
                                        <option value="">Any model</option>
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
                                </div>
                            </div>
                            <div className="pb-4 mb-2 mb-xl-3">
                                <h4 className="h6 pb-2" id="headingPrice">
                                    Price
                                </h4>
                                <div
                                    aria-labelledby="headingPrice"
                                    className="range-slider pb-1 mb-3"
                                    data-range-slider='{"startMin": 17000, "startMax": 120000, "min": 2000, "max": 200000, "step": 500, "tooltipPrefix": "$"}'>
                                    <div className="range-slider-ui" />
                                    <div className="d-flex align-items-center">
                                        <div className="position-relative w-50">
                                            <i className="bi-dollar-sign position-absolute top-50 start-0 translate-middle-y ms-3" />
                                            <input
                                                className="form-control form-icon-start"
                                                data-range-slider-min=""
                                                max="100000"
                                                min="2000"
                                                step="500"
                                                type="number"
                                            />
                                        </div>
                                        <i className="bi-minus text-body-emphasis mx-2" />
                                        <div className="position-relative w-50">
                                            <i className="bi-dollar-sign position-absolute top-50 start-0 translate-middle-y ms-3" />
                                            <input
                                                className="form-control form-icon-start"
                                                data-range-slider-max=""
                                                max="200000"
                                                min="5000"
                                                step="500"
                                                type="number"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-check form-switch mb-0">
                                    <input
                                        className="form-check-input"
                                        id="negotiate"
                                        role="switch"
                                        type="checkbox"
                                    />
                                    <label className="form-check-label" htmlFor="negotiate">
                                        Negotiated price
                                    </label>
                                </div>
                            </div>
                            <div className="pb-4 mb-2 mb-xl-3">
                                <h4 className="h6">Drivetrain</h4>
                                <div className="d-flex flex-column gap-2">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            id="awd"
                                            type="checkbox"
                                        />
                                        <label className="form-check-label fs-sm" htmlFor="awd">
                                            AWD/4WD
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            id="fwd"
                                            type="checkbox"
                                        />
                                        <label className="form-check-label fs-sm" htmlFor="fwd">
                                            Front Wheel Drive
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            id="rwd"
                                            type="checkbox"
                                        />
                                        <label className="form-check-label fs-sm" htmlFor="rwd">
                                            Rear Wheel Drive
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-4 mb-2 mb-xl-3">
                                <h4 className="h6">Fuel type</h4>
                                <div className="d-flex flex-column gap-2">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            id="gas"
                                            type="checkbox"
                                        />
                                        <label className="form-check-label fs-sm" htmlFor="gas">
                                            Gasoline
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            id="diesel"
                                            type="checkbox"
                                        />
                                        <label className="form-check-label fs-sm" htmlFor="diesel">
                                            Diesel
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            id="electric"
                                            type="checkbox"
                                        />
                                        <label className="form-check-label fs-sm" htmlFor="electric">
                                            Electric
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            id="hybrid"
                                            type="checkbox"
                                        />
                                        <label className="form-check-label fs-sm" htmlFor="hybrid">
                                            Hybrid
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            id="plugin"
                                            type="checkbox"
                                        />
                                        <label className="form-check-label fs-sm" htmlFor="plugin">
                                            Plug-in Hybrid
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            id="hydrogen"
                                            type="checkbox"
                                        />
                                        <label className="form-check-label fs-sm" htmlFor="hydrogen">
                                            Hydrogen
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-4 mb-2 mb-xl-3">
                                <h4 className="h6">Transmission</h4>
                                <div className="d-flex flex-column gap-2">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            id="auto"
                                            type="checkbox"
                                        />
                                        <label className="form-check-label fs-sm" htmlFor="auto">
                                            Automatic
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            id="manual"
                                            type="checkbox"
                                        />
                                        <label className="form-check-label fs-sm" htmlFor="manual">
                                            Manual
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-4 mb-2 mb-xl-3">
                                <h4 className="h6">Mileage</h4>
                                <div className="d-flex align-items-center">
                                    <input
                                        className="form-control w-50"
                                        placeholder="From"
                                        step="500"
                                        type="number"
                                    />
                                    <i className="bi-minus mx-3 mx-lg-1 mx-xl-2 mx-xxl-3" />
                                    <input
                                        className="form-control w-50"
                                        placeholder="To"
                                        step="500"
                                        type="number"
                                    />
                                </div>
                            </div>
                            <div className="pb-4 mb-2 mb-xl-3">
                                <h4 className="h6">Color</h4>
                                <div
                                    data-simplebar=""
                                    data-simplebar-auto-hide="false"
                                    style={{
                                        height: "202px",
                                    }}>
                                    <div className="d-flex flex-column gap-2">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                id="amber"
                                                type="checkbox"
                                            />
                                            <label className="form-check-label fs-sm" htmlFor="amber">
                                                Amber
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                id="azure"
                                                type="checkbox"
                                            />
                                            <label className="form-check-label fs-sm" htmlFor="azure">
                                                Azure
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                id="beige"
                                                type="checkbox"
                                            />
                                            <label className="form-check-label fs-sm" htmlFor="beige">
                                                Beige
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                id="black"
                                                type="checkbox"
                                            />
                                            <label className="form-check-label fs-sm" htmlFor="black">
                                                Black
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                id="blue"
                                                type="checkbox"
                                            />
                                            <label className="form-check-label fs-sm" htmlFor="blue">
                                                Blue
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                id="brown"
                                                type="checkbox"
                                            />
                                            <label className="form-check-label fs-sm" htmlFor="brown">
                                                Brown
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                id="camouflage"
                                                type="checkbox"
                                            />
                                            <label
                                                className="form-check-label fs-sm"
                                                htmlFor="camouflage">
                                                Camouflage green
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                id="charcoal"
                                                type="checkbox"
                                            />
                                            <label
                                                className="form-check-label fs-sm"
                                                htmlFor="charcoal">
                                                Charcoal
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                id="gray"
                                                type="checkbox"
                                            />
                                            <label className="form-check-label fs-sm" htmlFor="gray">
                                                Gray
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                id="green"
                                                type="checkbox"
                                            />
                                            <label className="form-check-label fs-sm" htmlFor="green">
                                                Green
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                id="gold"
                                                type="checkbox"
                                            />
                                            <label className="form-check-label fs-sm" htmlFor="gold">
                                                Gold
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                id="purple"
                                                type="checkbox"
                                            />
                                            <label className="form-check-label fs-sm" htmlFor="purple">
                                                Purple
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                id="red"
                                                type="checkbox"
                                            />
                                            <label className="form-check-label fs-sm" htmlFor="red">
                                                Red
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                id="white"
                                                type="checkbox"
                                            />
                                            <label className="form-check-label fs-sm" htmlFor="white">
                                                White
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                id="yellow"
                                                type="checkbox"
                                            />
                                            <label className="form-check-label fs-sm" htmlFor="yellow">
                                                Yellow
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pb-2 pb-lg-0">
                                <h4 className="h6">Sellers</h4>
                                <div className="d-flex flex-column gap-2">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            id="dealers"
                                            type="checkbox"
                                        />
                                        <label className="form-check-label fs-sm" htmlFor="dealers">
                                            Dealers Only
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            id="private"
                                            type="checkbox"
                                        />
                                        <label className="form-check-label fs-sm" htmlFor="private">
                                            Private Sellers Only
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
                <div className="col-lg-9">
                    <div className="d-flex align-items-center gap-2 gap-sm-3 pb-3 mb-2">
                        <div
                            className="position-relative"
                            style={{
                                width: "125px",
                            }}>
                            <i className="bi-sort position-absolute top-50 start-0 translate-middle-y z-2" />
                            <select
                                className="form-select border-0 rounded-0 ps-4 pe-1"
                                data-select='{                  "removeItemButton": false,                  "classNames": {                    "containerInner": ["form-select", "border-0", "rounded-0", "ps-4", "pe-1"]                  }                }'>
                                <option value="Popular">Popular</option>
                                <option value="Newest">Newest</option>
                            </select>
                        </div>
                        <div className="nav ms-auto">
                            <Link className="nav-link fw-normal p-0" to="#!">
                                <i className="bi-repeat fs-base me-2" />
                                Compare (1)
                            </Link>
                        </div>
                        <div className="nav">
                            <Link
                                aria-label="Grid view"
                                className="nav-link fs-xl text-body-secondary py-0 px-2 active pe-none"
                                to="listings-grid-cars.html">
                                <i className="bi-grid" />
                            </Link>
                            <Link
                                aria-label="List view"
                                className="nav-link fs-xl text-body-secondary py-0 px-2"
                                to="listings-list-cars.html">
                                <i className="bi-list" />
                            </Link>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-2 row-cols-xl-3 g-4 g-sm-3 g-lg-4">
                        <div className="col">
                            <article className="card h-100 hover-effect-scale bg-body-tertiary border-0">
                                <div className="card-img-top position-relative overflow-hidden">
                                    <div className="d-flex flex-column gap-2 align-items-start position-absolute top-0 start-0 z-1 pt-1 pt-sm-0 ps-1 ps-sm-0 mt-2 mt-sm-3 ms-2 ms-sm-3">
                                        <span className="badge text-bg-info d-inline-flex align-items-center">
                                            Verified
                                            <i className="bi-shield ms-1" />
                                        </span>
                                        <span className="badge text-bg-warning">Used</span>
                                    </div>
                                    <div
                                        className="ratio hover-effect-target bg-body-secondary"
                                        style={{
                                            "--fn-aspect-ratio": "calc(204 / 306 * 100%)",
                                        }}>
                                        <img alt="" src="assets/img/listings/cars/grid/01.jpg" />
                                    </div>
                                </div>
                                <div className="card-body pb-3">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <div className="fs-xs text-body-secondary me-3">
                                            27/05/2024
                                        </div>
                                        <div className="d-flex gap-2 position-relative z-2">
                                            <button
                                                aria-label="Add to wishlist"
                                                className="btn btn-icon btn-sm btn-outline-secondary animate-pulse rounded-circle"
                                                data-bs-custom-class="tooltip-sm"
                                                data-bs-toggle="tooltip"
                                                title="Wishlist"
                                                type="button">
                                                <i className="bi-heart animate-target fs-sm" />
                                            </button>
                                            <button
                                                aria-label="Notify"
                                                className="btn btn-icon btn-sm btn-outline-secondary animate-shake rounded-circle"
                                                data-bs-custom-class="tooltip-sm"
                                                data-bs-toggle="tooltip"
                                                title="Notify"
                                                type="button">
                                                <i className="bi-bell animate-target fs-sm" />
                                            </button>
                                            <button
                                                aria-label="Compare"
                                                className="btn btn-icon btn-sm btn-outline-secondary animate-rotate rounded-circle"
                                                data-bs-custom-class="tooltip-sm"
                                                data-bs-toggle="tooltip"
                                                title="Compare"
                                                type="button">
                                                <i className="bi-repeat animate-target fs-sm" />
                                            </button>
                                        </div>
                                    </div>
                                    <h3 className="h6 mb-2">
                                        <Link
                                            className="hover-effect-underline stretched-link me-1"
                                            to="/single-entry-cars">
                                            Volvo XC90 Sport 4WD
                                        </Link>
                                        <span className="fs-xs fw-normal text-body-secondary">
                                            (2019)
                                        </span>
                                    </h3>
                                    <div className="h6 mb-0">$43,500</div>
                                </div>
                                <div className="card-footer bg-transparent border-0 pt-0 pb-4">
                                    <div className="border-top pt-3">
                                        <div className="row row-cols-2 g-2 fs-sm">
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi bi-geo-alt" />
                                                Houston
                                            </div>
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi bi-speedometer" />
                                                78K mi
                                            </div>
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi bi-fuel-pump-diesel" />
                                                Diesel
                                            </div>
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi-gearbox" />
                                                Automatic
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col">
                    <article className="card h-100 hover-effect-scale bg-body-tertiary border-0">
                                <div className="card-img-top position-relative overflow-hidden">
                                    <div className="d-flex flex-column gap-2 align-items-start position-absolute top-0 start-0 z-1 pt-1 pt-sm-0 ps-1 ps-sm-0 mt-2 mt-sm-3 ms-2 ms-sm-3">
                                        <span className="badge text-bg-warning">Used</span>
                                    </div>
                                    <div
                                        className="ratio hover-effect-target bg-body-secondary"
                                        style={{
                                            "--fn-aspect-ratio": "calc(204 / 306 * 100%)",
                                        }}>
                                        <img alt="" src="assets/img/listings/cars/grid/02.jpg" />
                                    </div>
                                </div>
                                <div className="card-body pb-3">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <div className="fs-xs text-body-secondary me-3">
                                            16/08/2024
                                        </div>
                                        <div className="d-flex gap-2 position-relative z-2">
                                            <button
                                                aria-label="Add to wishlist"
                                                className="btn btn-icon btn-sm btn-outline-secondary animate-pulse rounded-circle"
                                                data-bs-custom-class="tooltip-sm"
                                                data-bs-toggle="tooltip"
                                                title="Wishlist"
                                                type="button">
                                                <i className="bi-heart animate-target fs-sm" />
                                            </button>
                                            <button
                                                aria-label="Notify"
                                                className="btn btn-icon btn-sm btn-outline-secondary animate-shake rounded-circle"
                                                data-bs-custom-class="tooltip-sm"
                                                data-bs-toggle="tooltip"
                                                title="Notify"
                                                type="button">
                                                <i className="bi-bell animate-target fs-sm" />
                                            </button>
                                            <button
                                                aria-label="Compare"
                                                className="btn btn-icon btn-sm btn-outline-secondary animate-rotate rounded-circle"
                                                data-bs-custom-class="tooltip-sm"
                                                data-bs-toggle="tooltip"
                                                title="Compare"
                                                type="button">
                                                <i className="bi-repeat animate-target fs-sm" />
                                            </button>
                                        </div>
                                    </div>
                                    <h3 className="h6 mb-2">
                                        <Link
                                            className="hover-effect-underline stretched-link me-1"
                                            to="/single-entry-cars">
                                            Porsche 911 Turbo S
                                        </Link>
                                        <span className="fs-xs fw-normal text-body-secondary">
                                            (2017)
                                        </span>
                                    </h3>
                                    <div className="h6 mb-0">$85,000</div>
                                </div>
                                <div className="card-footer bg-transparent border-0 pt-0 pb-4">
                                    <div className="border-top pt-3">
                                        <div className="row row-cols-2 g-2 fs-sm">
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi bi-geo-alt" />
                                                Chicago
                                            </div>
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi bi-speedometer" />
                                                32K mi
                                            </div>
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi bi-fuel-pump-diesel" />
                                                Gasoline
                                            </div>
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi-gearbox" />
                                                Manual
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col">
                    <article className="card h-100 hover-effect-scale bg-body-tertiary border-0">
                                <div className="card-img-top position-relative overflow-hidden">
                                    <div className="d-flex flex-column gap-2 align-items-start position-absolute top-0 start-0 z-1 pt-1 pt-sm-0 ps-1 ps-sm-0 mt-2 mt-sm-3 ms-2 ms-sm-3">
                                        <span className="badge text-bg-warning">Used</span>
                                    </div>
                                    <div
                                        className="ratio hover-effect-target bg-body-secondary"
                                        style={{
                                            "--fn-aspect-ratio": "calc(204 / 306 * 100%)",
                                        }}>
                                        <img alt="" src="assets/img/listings/cars/grid/03.jpg" />
                                    </div>
                                </div>
                                <div className="card-body pb-3">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <div className="fs-xs text-body-secondary me-3">
                                            30/09/2024
                                        </div>
                                        <div className="d-flex gap-2 position-relative z-2">
                                            <button
                                                aria-label="Add to wishlist"
                                                className="btn btn-icon btn-sm btn-outline-secondary animate-pulse rounded-circle"
                                                data-bs-custom-class="tooltip-sm"
                                                data-bs-toggle="tooltip"
                                                title="Wishlist"
                                                type="button">
                                                <i className="bi-heart animate-target fs-sm" />
                                            </button>
                                            <button
                                                aria-label="Notify"
                                                className="btn btn-icon btn-sm btn-outline-secondary animate-shake rounded-circle"
                                                data-bs-custom-class="tooltip-sm"
                                                data-bs-toggle="tooltip"
                                                title="Notify"
                                                type="button">
                                                <i className="bi-bell animate-target fs-sm" />
                                            </button>
                                            <button
                                                aria-label="Compare"
                                                className="btn btn-icon btn-sm btn-outline-secondary animate-rotate rounded-circle"
                                                data-bs-custom-class="tooltip-sm"
                                                data-bs-toggle="tooltip"
                                                title="Compare"
                                                type="button">
                                                <i className="bi-repeat animate-target fs-sm" />
                                            </button>
                                        </div>
                                    </div>
                                    <h3 className="h6 mb-2">
                                        <Link
                                            className="hover-effect-underline stretched-link me-1"
                                            to="/single-entry-cars">
                                            Ford Truck Lifted
                                        </Link>
                                        <span className="fs-xs fw-normal text-body-secondary">
                                            (2022)
                                        </span>
                                    </h3>
                                    <div className="h6 mb-0">$63,000</div>
                                </div>
                                <div className="card-footer bg-transparent border-0 pt-0 pb-4">
                                    <div className="border-top pt-3">
                                        <div className="row row-cols-2 g-2 fs-sm">
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi bi-geo-alt" />
                                                Boston
                                            </div>
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi bi-speedometer" />
                                                17K mi
                                            </div>
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi bi-fuel-pump-diesel" />
                                                Diesel
                                            </div>
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi-gearbox" />
                                                Automatic
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col">
                   <article className="card h-100 hover-effect-scale bg-body-tertiary border-0">
                                <div className="card-img-top position-relative overflow-hidden">
                                    <div className="d-flex flex-column gap-2 align-items-start position-absolute top-0 start-0 z-1 pt-1 pt-sm-0 ps-1 ps-sm-0 mt-2 mt-sm-3 ms-2 ms-sm-3">
                                        <span className="badge text-bg-warning">Used</span>
                                    </div>
                                    <div
                                        className="ratio hover-effect-target bg-body-secondary"
                                        style={{
                                            "--fn-aspect-ratio": "calc(204 / 306 * 100%)",
                                        }}>
                                        <img alt="" src="assets/img/listings/cars/grid/04.jpg" />
                                    </div>
                                </div>
                                <div className="card-body pb-3">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <div className="fs-xs text-body-secondary me-3">
                                            15/07/2024
                                        </div>
                                        <div className="d-flex gap-2 position-relative z-2">
                                            <button
                                                aria-label="Add to wishlist"
                                                className="btn btn-icon btn-sm btn-outline-secondary animate-pulse rounded-circle"
                                                data-bs-custom-class="tooltip-sm"
                                                data-bs-toggle="tooltip"
                                                title="Wishlist"
                                                type="button">
                                                <i className="bi-heart animate-target fs-sm" />
                                            </button>
                                            <button
                                                aria-label="Notify"
                                                className="btn btn-icon btn-sm btn-outline-secondary animate-shake rounded-circle"
                                                data-bs-custom-class="tooltip-sm"
                                                data-bs-toggle="tooltip"
                                                title="Notify"
                                                type="button">
                                                <i className="bi-bell animate-target fs-sm" />
                                            </button>
                                            <button
                                                aria-label="Compare"
                                                className="btn btn-icon btn-sm btn-outline-secondary animate-rotate rounded-circle"
                                                data-bs-custom-class="tooltip-sm"
                                                data-bs-toggle="tooltip"
                                                title="Compare"
                                                type="button">
                                                <i className="bi-repeat animate-target fs-sm" />
                                            </button>
                                        </div>
                                    </div>
                                    <h3 className="h6 mb-2">
                                        <Link
                                            className="hover-effect-underline stretched-link me-1"
                                            to="/single-entry-cars">
                                            Mercedes-Benz A205
                                        </Link>
                                        <span className="fs-xs fw-normal text-body-secondary">
                                            (2021)
                                        </span>
                                    </h3>
                                    <div className="h6 mb-0">$41,900</div>
                                </div>
                                <div className="card-footer bg-transparent border-0 pt-0 pb-4">
                                    <div className="border-top pt-3">
                                        <div className="row row-cols-2 g-2 fs-sm">
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi bi-geo-alt" />
                                                Chicago
                                            </div>
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi bi-speedometer" />
                                                60K mi
                                            </div>
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi bi-fuel-pump-diesel" />
                                                Gasoline
                                            </div>
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi-gearbox" />
                                                Automatic
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col">
                    <article className="card h-100 hover-effect-scale bg-body-tertiary border-0">
                                <div className="card-img-top position-relative overflow-hidden">
                                    <div className="d-flex flex-column gap-2 align-items-start position-absolute top-0 start-0 z-1 pt-1 pt-sm-0 ps-1 ps-sm-0 mt-2 mt-sm-3 ms-2 ms-sm-3">
                                        <span className="badge text-bg-info d-inline-flex align-items-center">
                                            Verified
                                            <i className="bi-shield ms-1" />
                                        </span>
                                        <span className="badge text-bg-warning">Used</span>
                                    </div>
                                    <div
                                        className="ratio hover-effect-target bg-body-secondary"
                                        style={{
                                            "--fn-aspect-ratio": "calc(204 / 306 * 100%)",
                                        }}>
                                        <img alt="" src="assets/img/listings/cars/grid/05.jpg" />
                                    </div>
                                </div>
                                <div className="card-body pb-3">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <div className="fs-xs text-body-secondary me-3">
                                            23/04/2024
                                        </div>
                                        <div className="d-flex gap-2 position-relative z-2">
                                            <button
                                                aria-label="Add to wishlist"
                                                className="btn btn-icon btn-sm btn-outline-secondary animate-pulse rounded-circle"
                                                data-bs-custom-class="tooltip-sm"
                                                data-bs-toggle="tooltip"
                                                title="Wishlist"
                                                type="button">
                                                <i className="bi-heart animate-target fs-sm" />
                                            </button>
                                            <button
                                                aria-label="Notify"
                                                className="btn btn-icon btn-sm btn-outline-secondary animate-shake rounded-circle"
                                                data-bs-custom-class="tooltip-sm"
                                                data-bs-toggle="tooltip"
                                                title="Notify"
                                                type="button">
                                                <i className="bi-bell animate-target fs-sm" />
                                            </button>
                                            <button
                                                aria-label="Compare"
                                                className="btn btn-icon btn-sm btn-outline-secondary animate-rotate rounded-circle"
                                                data-bs-custom-class="tooltip-sm"
                                                data-bs-toggle="tooltip"
                                                title="Compare"
                                                type="button">
                                                <i className="bi-repeat animate-target fs-sm" />
                                            </button>
                                        </div>
                                    </div>
                                    <h3 className="h6 mb-2">
                                        <Link
                                            className="hover-effect-underline stretched-link me-1"
                                            to="/single-entry-cars">
                                            Mercedes-Benz Coupe
                                        </Link>
                                        <span className="fs-xs fw-normal text-body-secondary">
                                            (2021)
                                        </span>
                                    </h3>
                                    <div className="h6 mb-0">$115,400</div>
                                </div>
                                <div className="card-footer bg-transparent border-0 pt-0 pb-4">
                                    <div className="border-top pt-3">
                                        <div className="row row-cols-2 g-2 fs-sm">
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi bi-geo-alt" />
                                                New York
                                            </div>
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi bi-speedometer" />
                                                15K mi
                                            </div>
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi bi-fuel-pump-diesel" />
                                                Gasoline
                                            </div>
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi-gearbox" />
                                                Manual
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col">
                   <article className="card h-100 hover-effect-scale bg-body-tertiary border-0">
                                <div className="card-img-top position-relative overflow-hidden">
                                    <div className="d-flex flex-column gap-2 align-items-start position-absolute top-0 start-0 z-1 pt-1 pt-sm-0 ps-1 ps-sm-0 mt-2 mt-sm-3 ms-2 ms-sm-3">
                                        <span className="badge text-bg-info d-inline-flex align-items-center">
                                            Verified
                                            <i className="bi-shield ms-1" />
                                        </span>
                                        <span className="badge text-bg-warning">Used</span>
                                    </div>
                                    <div
                                        className="ratio hover-effect-target bg-body-secondary"
                                        style={{
                                            "--fn-aspect-ratio": "calc(204 / 306 * 100%)",
                                        }}>
                                        <img alt="" src="assets/img/listings/cars/grid/06.jpg" />
                                    </div>
                                </div>
                                <div className="card-body pb-3">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <div className="fs-xs text-body-secondary me-3">
                                            28/06/2024
                                        </div>
                                        <div className="d-flex gap-2 position-relative z-2">
                                            <button
                                                aria-label="Add to wishlist"
                                                className="btn btn-icon btn-sm btn-outline-secondary animate-pulse rounded-circle"
                                                data-bs-custom-class="tooltip-sm"
                                                data-bs-toggle="tooltip"
                                                title="Wishlist"
                                                type="button">
                                                <i className="bi-heart animate-target fs-sm" />
                                            </button>
                                            <button
                                                aria-label="Notify"
                                                className="btn btn-icon btn-sm btn-outline-secondary animate-shake rounded-circle"
                                                data-bs-custom-class="tooltip-sm"
                                                data-bs-toggle="tooltip"
                                                title="Notify"
                                                type="button">
                                                <i className="bi-bell animate-target fs-sm" />
                                            </button>
                                            <button
                                                aria-label="Compare"
                                                className="btn btn-icon btn-sm btn-outline-secondary animate-rotate rounded-circle"
                                                data-bs-custom-class="tooltip-sm"
                                                data-bs-toggle="tooltip"
                                                title="Compare"
                                                type="button">
                                                <i className="bi-repeat animate-target fs-sm" />
                                            </button>
                                        </div>
                                    </div>
                                    <h3 className="h6 mb-2">
                                        <Link
                                            className="hover-effect-underline stretched-link me-1"
                                            to="/single-entry-cars">
                                            Maserati Granturismo
                                        </Link>
                                        <span className="fs-xs fw-normal text-body-secondary">
                                            (2020)
                                        </span>
                                    </h3>
                                    <div className="h6 mb-0">$73,000</div>
                                </div>
                                <div className="card-footer bg-transparent border-0 pt-0 pb-4">
                                    <div className="border-top pt-3">
                                        <div className="row row-cols-2 g-2 fs-sm">
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi bi-geo-alt" />
                                                Dallas
                                            </div>
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi bi-speedometer" />
                                                56K mi
                                            </div>
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi bi-fuel-pump-diesel" />
                                                Gasoline
                                            </div>
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi-gearbox" />
                                                Automatic
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col">
                   <article className="card h-100 hover-effect-scale bg-body-tertiary border-0">
                                <div className="card-img-top position-relative overflow-hidden">
                                    <div className="d-flex flex-column gap-2 align-items-start position-absolute top-0 start-0 z-1 pt-1 pt-sm-0 ps-1 ps-sm-0 mt-2 mt-sm-3 ms-2 ms-sm-3">
                                        <span className="badge text-bg-warning">Used</span>
                                    </div>
                                    <div
                                        className="ratio hover-effect-target bg-body-secondary"
                                        style={{
                                            "--fn-aspect-ratio": "calc(204 / 306 * 100%)",
                                        }}>
                                        <img alt="" src="assets/img/listings/cars/grid/07.jpg" />
                                    </div>
                                </div>
                                <div className="card-body pb-3">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <div className="fs-xs text-body-secondary me-3">
                                            19/10/2024
                                        </div>
                                        <div className="d-flex gap-2 position-relative z-2">
                                            <button
                                                aria-label="Add to wishlist"
                                                className="btn btn-icon btn-sm btn-outline-secondary animate-pulse rounded-circle"
                                                data-bs-custom-class="tooltip-sm"
                                                data-bs-toggle="tooltip"
                                                title="Wishlist"
                                                type="button">
                                                <i className="bi-heart animate-target fs-sm" />
                                            </button>
                                            <button
                                                aria-label="Notify"
                                                className="btn btn-icon btn-sm btn-outline-secondary animate-shake rounded-circle"
                                                data-bs-custom-class="tooltip-sm"
                                                data-bs-toggle="tooltip"
                                                title="Notify"
                                                type="button">
                                                <i className="bi-bell animate-target fs-sm" />
                                            </button>
                                            <button
                                                aria-label="Compare"
                                                className="btn btn-icon btn-sm btn-outline-secondary animate-rotate rounded-circle"
                                                data-bs-custom-class="tooltip-sm"
                                                data-bs-toggle="tooltip"
                                                title="Compare"
                                                type="button">
                                                <i className="bi-repeat animate-target fs-sm" />
                                            </button>
                                        </div>
                                    </div>
                                    <h3 className="h6 mb-2">
                                        <Link
                                            className="hover-effect-underline stretched-link me-1"
                                            to="/single-entry-cars">
                                            Tesla Model 3
                                        </Link>
                                        <span className="fs-xs fw-normal text-body-secondary">
                                            (2023)
                                        </span>
                                    </h3>
                                    <div className="h6 mb-0">$36,200</div>
                                </div>
                                <div className="card-footer bg-transparent border-0 pt-0 pb-4">
                                    <div className="border-top pt-3">
                                        <div className="row row-cols-2 g-2 fs-sm">
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi bi-geo-alt" />
                                                Los Angeles
                                            </div>
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi bi-speedometer" />
                                                13K mi
                                            </div>
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi bi-fuel-pump-diesel" />
                                                Electric
                                            </div>
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi-gearbox" />
                                                Automatic
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col">
                    <article className="card h-100 hover-effect-scale bg-body-tertiary border-0">
                                <div className="card-img-top position-relative overflow-hidden">
                                    <div className="d-flex flex-column gap-2 align-items-start position-absolute top-0 start-0 z-1 pt-1 pt-sm-0 ps-1 ps-sm-0 mt-2 mt-sm-3 ms-2 ms-sm-3">
                                        <span className="badge text-bg-warning">Used</span>
                                    </div>
                                    <div
                                        className="ratio hover-effect-target bg-body-secondary"
                                        style={{
                                            "--fn-aspect-ratio": "calc(204 / 306 * 100%)",
                                        }}>
                                        <img alt="" src="assets/img/listings/cars/grid/08.jpg" />
                                    </div>
                                </div>
                                <div className="card-body pb-3">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <div className="fs-xs text-body-secondary me-3">
                                            02/08/2024
                                        </div>
                                        <div className="d-flex gap-2 position-relative z-2">
                                            <button
                                                aria-label="Add to wishlist"
                                                className="btn btn-icon btn-sm btn-outline-secondary animate-pulse rounded-circle"
                                                data-bs-custom-class="tooltip-sm"
                                                data-bs-toggle="tooltip"
                                                title="Wishlist"
                                                type="button">
                                                <i className="bi-heart animate-target fs-sm" />
                                            </button>
                                            <button
                                                aria-label="Notify"
                                                className="btn btn-icon btn-sm btn-outline-secondary animate-shake rounded-circle"
                                                data-bs-custom-class="tooltip-sm"
                                                data-bs-toggle="tooltip"
                                                title="Notify"
                                                type="button">
                                                <i className="bi-bell animate-target fs-sm" />
                                            </button>
                                            <button
                                                aria-label="Compare"
                                                className="btn btn-icon btn-sm btn-outline-secondary animate-rotate rounded-circle"
                                                data-bs-custom-class="tooltip-sm"
                                                data-bs-toggle="tooltip"
                                                title="Compare"
                                                type="button">
                                                <i className="bi-repeat animate-target fs-sm" />
                                            </button>
                                        </div>
                                    </div>
                                    <h3 className="h6 mb-2">
                                        <Link
                                            className="hover-effect-underline stretched-link me-1"
                                            to="/single-entry-cars">
                                            Toyota Yaris GR Sport
                                        </Link>
                                        <span className="fs-xs fw-normal text-body-secondary">
                                            (2021)
                                        </span>
                                    </h3>
                                    <div className="h6 mb-0">$28,600</div>
                                </div>
                                <div className="card-footer bg-transparent border-0 pt-0 pb-4">
                                    <div className="border-top pt-3">
                                        <div className="row row-cols-2 g-2 fs-sm">
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi bi-geo-alt" />
                                                San Jose
                                            </div>
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi bi-speedometer" />
                                                21K mi
                                            </div>
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi bi-fuel-pump-diesel" />
                                                Hybrid
                                            </div>
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi-gearbox" />
                                                Automatic
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col">
                    <article className="card h-100 hover-effect-scale bg-body-tertiary border-0">
                                <div className="card-img-top position-relative overflow-hidden">
                                    <div className="d-flex flex-column gap-2 align-items-start position-absolute top-0 start-0 z-1 pt-1 pt-sm-0 ps-1 ps-sm-0 mt-2 mt-sm-3 ms-2 ms-sm-3">
                                        <span className="badge text-bg-info d-inline-flex align-items-center">
                                            Verified
                                            <i className="bi-shield ms-1" />
                                        </span>
                                        <span className="badge text-bg-warning">Used</span>
                                    </div>
                                    <div
                                        className="ratio hover-effect-target bg-body-secondary"
                                        style={{
                                            "--fn-aspect-ratio": "calc(204 / 306 * 100%)",
                                        }}>
                                        <img alt="" src="assets/img/listings/cars/grid/09.jpg" />
                                    </div>
                                </div>
                                <div className="card-body pb-3">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <div className="fs-xs text-body-secondary me-3">
                                            13/07/2024
                                        </div>
                                        <div className="d-flex gap-2 position-relative z-2">
                                            <button
                                                aria-label="Add to wishlist"
                                                className="btn btn-icon btn-sm btn-outline-secondary animate-pulse rounded-circle"
                                                data-bs-custom-class="tooltip-sm"
                                                data-bs-toggle="tooltip"
                                                title="Wishlist"
                                                type="button">
                                                <i className="bi-heart animate-target fs-sm" />
                                            </button>
                                            <button
                                                aria-label="Notify"
                                                className="btn btn-icon btn-sm btn-outline-secondary animate-shake rounded-circle"
                                                data-bs-custom-class="tooltip-sm"
                                                data-bs-toggle="tooltip"
                                                title="Notify"
                                                type="button">
                                                <i className="bi-bell animate-target fs-sm" />
                                            </button>
                                            <button
                                                aria-label="Compare"
                                                className="btn btn-icon btn-sm btn-outline-secondary animate-rotate rounded-circle"
                                                data-bs-custom-class="tooltip-sm"
                                                data-bs-toggle="tooltip"
                                                title="Compare"
                                                type="button">
                                                <i className="bi-repeat animate-target fs-sm" />
                                            </button>
                                        </div>
                                    </div>
                                    <h3 className="h6 mb-2">
                                        <Link
                                            className="hover-effect-underline stretched-link me-1"
                                            to="/single-entry-cars">
                                            Mitsubishi Padjero Sport
                                        </Link>
                                        <span className="fs-xs fw-normal text-body-secondary">
                                            (2019)
                                        </span>
                                    </h3>
                                    <div className="h6 mb-0">$33,500</div>
                                </div>
                                <div className="card-footer bg-transparent border-0 pt-0 pb-4">
                                    <div className="border-top pt-3">
                                        <div className="row row-cols-2 g-2 fs-sm">
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi bi-geo-alt" />
                                                Phoenix
                                            </div>
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi bi-speedometer" />
                                                57K mi
                                            </div>
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi bi-fuel-pump-diesel" />
                                                Diesel
                                            </div>
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi-gearbox" />
                                                Automatic
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col">
                    <article className="card h-100 hover-effect-scale bg-body-tertiary border-0">
                                <div className="card-img-top position-relative overflow-hidden">
                                    <div className="d-flex flex-column gap-2 align-items-start position-absolute top-0 start-0 z-1 pt-1 pt-sm-0 ps-1 ps-sm-0 mt-2 mt-sm-3 ms-2 ms-sm-3">
                                        <span className="badge text-bg-info d-inline-flex align-items-center">
                                            Verified
                                            <i className="bi-shield ms-1" />
                                        </span>
                                        <span className="badge text-bg-warning">Used</span>
                                    </div>
                                    <div
                                        className="ratio hover-effect-target bg-body-secondary"
                                        style={{
                                            "--fn-aspect-ratio": "calc(204 / 306 * 100%)",
                                        }}>
                                        <img alt="" src="assets/img/listings/cars/grid/10.jpg" />
                                    </div>
                                </div>
                                <div className="card-body pb-3">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <div className="fs-xs text-body-secondary me-3">
                                            25/04/2024
                                        </div>
                                        <div className="d-flex gap-2 position-relative z-2">
                                            <button
                                                aria-label="Add to wishlist"
                                                className="btn btn-icon btn-sm btn-outline-secondary animate-pulse rounded-circle"
                                                data-bs-custom-class="tooltip-sm"
                                                data-bs-toggle="tooltip"
                                                title="Wishlist"
                                                type="button">
                                                <i className="bi-heart animate-target fs-sm" />
                                            </button>
                                            <button
                                                aria-label="Notify"
                                                className="btn btn-icon btn-sm btn-outline-secondary animate-shake rounded-circle"
                                                data-bs-custom-class="tooltip-sm"
                                                data-bs-toggle="tooltip"
                                                title="Notify"
                                                type="button">
                                                <i className="bi-bell animate-target fs-sm" />
                                            </button>
                                            <button
                                                aria-label="Compare"
                                                className="btn btn-icon btn-sm btn-outline-secondary animate-rotate rounded-circle"
                                                data-bs-custom-class="tooltip-sm"
                                                data-bs-toggle="tooltip"
                                                title="Compare"
                                                type="button">
                                                <i className="bi-repeat animate-target fs-sm" />
                                            </button>
                                        </div>
                                    </div>
                                    <h3 className="h6 mb-2">
                                        <Link
                                            className="hover-effect-underline stretched-link me-1"
                                            to="/single-entry-cars">
                                            Smart Fortwo Cabrio
                                        </Link>
                                        <span className="fs-xs fw-normal text-body-secondary">
                                            (2018)
                                        </span>
                                    </h3>
                                    <div className="h6 mb-0">$17,600</div>
                                </div>
                                <div className="card-footer bg-transparent border-0 pt-0 pb-4">
                                    <div className="border-top pt-3">
                                        <div className="row row-cols-2 g-2 fs-sm">
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi bi-geo-alt" />
                                                New York
                                            </div>
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi bi-speedometer" />
                                                46K mi
                                            </div>
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi bi-fuel-pump-diesel" />
                                                Gasoline
                                            </div>
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi-gearbox" />
                                                Automatic
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col">
                    <article className="card h-100 hover-effect-scale bg-body-tertiary border-0">
                                <div className="card-img-top position-relative overflow-hidden">
                                    <div className="d-flex flex-column gap-2 align-items-start position-absolute top-0 start-0 z-1 pt-1 pt-sm-0 ps-1 ps-sm-0 mt-2 mt-sm-3 ms-2 ms-sm-3">
                                        <span className="badge text-bg-warning">Used</span>
                                    </div>
                                    <div
                                        className="ratio hover-effect-target bg-body-secondary"
                                        style={{
                                            "--fn-aspect-ratio": "calc(204 / 306 * 100%)",
                                        }}>
                                        <img alt="" src="assets/img/listings/cars/grid/11.jpg" />
                                    </div>
                                </div>
                                <div className="card-body pb-3">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <div className="fs-xs text-body-secondary me-3">
                                            05/09/2024
                                        </div>
                                        <div className="d-flex gap-2 position-relative z-2">
                                            <button
                                                aria-label="Add to wishlist"
                                                className="btn btn-icon btn-sm btn-outline-secondary animate-pulse rounded-circle"
                                                data-bs-custom-class="tooltip-sm"
                                                data-bs-toggle="tooltip"
                                                title="Wishlist"
                                                type="button">
                                                <i className="bi-heart animate-target fs-sm" />
                                            </button>
                                            <button
                                                aria-label="Notify"
                                                className="btn btn-icon btn-sm btn-outline-secondary animate-shake rounded-circle"
                                                data-bs-custom-class="tooltip-sm"
                                                data-bs-toggle="tooltip"
                                                title="Notify"
                                                type="button">
                                                <i className="bi-bell animate-target fs-sm" />
                                            </button>
                                            <button
                                                aria-label="Compare"
                                                className="btn btn-icon btn-sm btn-outline-secondary animate-rotate rounded-circle"
                                                data-bs-custom-class="tooltip-sm"
                                                data-bs-toggle="tooltip"
                                                title="Compare"
                                                type="button">
                                                <i className="bi-repeat animate-target fs-sm" />
                                            </button>
                                        </div>
                                    </div>
                                    <h3 className="h6 mb-2">
                                        <Link
                                            className="hover-effect-underline stretched-link me-1"
                                            to="/single-entry-cars">
                                            Land Rover Defender
                                        </Link>
                                        <span className="fs-xs fw-normal text-body-secondary">
                                            (2003)
                                        </span>
                                    </h3>
                                    <div className="h6 mb-0">$25,900</div>
                                </div>
                                <div className="card-footer bg-transparent border-0 pt-0 pb-4">
                                    <div className="border-top pt-3">
                                        <div className="row row-cols-2 g-2 fs-sm">
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi bi-geo-alt" />
                                                Dallas
                                            </div>
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi bi-speedometer" />
                                                138K mi
                                            </div>
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi bi-fuel-pump-diesel" />
                                                Diesel
                                            </div>
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi-gearbox" />
                                                Manual
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col">
                   <article className="card h-100 hover-effect-scale bg-body-tertiary border-0">
                                <div className="card-img-top position-relative overflow-hidden">
                                    <div className="d-flex flex-column gap-2 align-items-start position-absolute top-0 start-0 z-1 pt-1 pt-sm-0 ps-1 ps-sm-0 mt-2 mt-sm-3 ms-2 ms-sm-3">
                                        <span className="badge text-bg-info d-inline-flex align-items-center">
                                            Verified
                                            <i className="bi-shield ms-1" />
                                        </span>
                                        <span className="badge text-bg-warning">Used</span>
                                    </div>
                                    <div
                                        className="ratio hover-effect-target bg-body-secondary"
                                        style={{
                                            "--fn-aspect-ratio": "calc(204 / 306 * 100%)",
                                        }}>
                                        <img alt="" src="assets/img/listings/cars/grid/12.jpg" />
                                    </div>
                                </div>
                                <div className="card-body pb-3">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <div className="fs-xs text-body-secondary me-3">
                                            11/06/2024
                                        </div>
                                        <div className="d-flex gap-2 position-relative z-2">
                                            <button
                                                aria-label="Add to wishlist"
                                                className="btn btn-icon btn-sm btn-outline-secondary animate-pulse rounded-circle"
                                                data-bs-custom-class="tooltip-sm"
                                                data-bs-toggle="tooltip"
                                                title="Wishlist"
                                                type="button">
                                                <i className="bi-heart animate-target fs-sm" />
                                            </button>
                                            <button
                                                aria-label="Notify"
                                                className="btn btn-icon btn-sm btn-outline-secondary animate-shake rounded-circle"
                                                data-bs-custom-class="tooltip-sm"
                                                data-bs-toggle="tooltip"
                                                title="Notify"
                                                type="button">
                                                <i className="bi-bell animate-target fs-sm" />
                                            </button>
                                            <button
                                                aria-label="Compare"
                                                className="btn btn-icon btn-sm btn-outline-secondary animate-rotate rounded-circle"
                                                data-bs-custom-class="tooltip-sm"
                                                data-bs-toggle="tooltip"
                                                title="Compare"
                                                type="button">
                                                <i className="bi-repeat animate-target fs-sm" />
                                            </button>
                                        </div>
                                    </div>
                                    <h3 className="h6 mb-2">
                                        <Link
                                            className="hover-effect-underline stretched-link me-1"
                                            to="/single-entry-cars">
                                            Audi R8 Spyder
                                        </Link>
                                        <span className="fs-xs fw-normal text-body-secondary">
                                            (2022)
                                        </span>
                                    </h3>
                                    <div className="h6 mb-0">$97,500</div>
                                </div>
                                <div className="card-footer bg-transparent border-0 pt-0 pb-4">
                                    <div className="border-top pt-3">
                                        <div className="row row-cols-2 g-2 fs-sm">
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi bi-geo-alt" />
                                                Philadelphia
                                            </div>
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi bi-speedometer" />
                                                29K mi
                                            </div>
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi bi-fuel-pump-diesel" />
                                                Gasoline
                                            </div>
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi-gearbox" />
                                                Automatic
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col">
                    <article className="card h-100 hover-effect-scale bg-body-tertiary border-0">
                                <div className="card-img-top position-relative overflow-hidden">
                                    <div className="d-flex flex-column gap-2 align-items-start position-absolute top-0 start-0 z-1 pt-1 pt-sm-0 ps-1 ps-sm-0 mt-2 mt-sm-3 ms-2 ms-sm-3">
                                        <span className="badge text-bg-warning">Used</span>
                                    </div>
                                    <div
                                        className="ratio hover-effect-target bg-body-secondary"
                                        style={{
                                            "--fn-aspect-ratio": "calc(204 / 306 * 100%)",
                                        }}>
                                        <img alt="" src="assets/img/listings/cars/grid/13.jpg" />
                                    </div>
                                </div>
                                <div className="card-body pb-3">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <div className="fs-xs text-body-secondary me-3">
                                            16/08/2024
                                        </div>
                                        <div className="d-flex gap-2 position-relative z-2">
                                            <button
                                                aria-label="Add to wishlist"
                                                className="btn btn-icon btn-sm btn-outline-secondary animate-pulse rounded-circle"
                                                data-bs-custom-class="tooltip-sm"
                                                data-bs-toggle="tooltip"
                                                title="Wishlist"
                                                type="button">
                                                <i className="bi-heart animate-target fs-sm" />
                                            </button>
                                            <button
                                                aria-label="Notify"
                                                className="btn btn-icon btn-sm btn-outline-secondary animate-shake rounded-circle"
                                                data-bs-custom-class="tooltip-sm"
                                                data-bs-toggle="tooltip"
                                                title="Notify"
                                                type="button">
                                                <i className="bi-bell animate-target fs-sm" />
                                            </button>
                                            <button
                                                aria-label="Compare"
                                                className="btn btn-icon btn-sm btn-outline-secondary animate-rotate rounded-circle"
                                                data-bs-custom-class="tooltip-sm"
                                                data-bs-toggle="tooltip"
                                                title="Compare"
                                                type="button">
                                                <i className="bi-repeat animate-target fs-sm" />
                                            </button>
                                        </div>
                                    </div>
                                    <h3 className="h6 mb-2">
                                        <Link
                                            className="hover-effect-underline stretched-link me-1"
                                            to="/single-entry-cars">
                                            BMW 3 Series
                                        </Link>
                                        <span className="fs-xs fw-normal text-body-secondary">
                                            (2021)
                                        </span>
                                    </h3>
                                    <div className="h6 mb-0">$42,000</div>
                                </div>
                                <div className="card-footer bg-transparent border-0 pt-0 pb-4">
                                    <div className="border-top pt-3">
                                        <div className="row row-cols-2 g-2 fs-sm">
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi bi-geo-alt" />
                                                Orlando
                                            </div>
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi bi-speedometer" />
                                                31K mi
                                            </div>
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi bi-fuel-pump-diesel" />
                                                Diesel
                                            </div>
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi-gearbox" />
                                                Automatic
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col">
                    <article className="card h-100 hover-effect-scale bg-body-tertiary border-0">
                                <div className="card-img-top position-relative overflow-hidden">
                                    <div className="d-flex flex-column gap-2 align-items-start position-absolute top-0 start-0 z-1 pt-1 pt-sm-0 ps-1 ps-sm-0 mt-2 mt-sm-3 ms-2 ms-sm-3">
                                        <span className="badge text-bg-info d-inline-flex align-items-center">
                                            Verified
                                            <i className="bi-shield ms-1" />
                                        </span>
                                        <span className="badge text-bg-warning">Used</span>
                                    </div>
                                    <div
                                        className="ratio hover-effect-target bg-body-secondary"
                                        style={{
                                            "--fn-aspect-ratio": "calc(204 / 306 * 100%)",
                                        }}>
                                        <img alt="" src="assets/img/listings/cars/grid/14.jpg" />
                                    </div>
                                </div>
                                <div className="card-body pb-3">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <div className="fs-xs text-body-secondary me-3">
                                            29/05/2024
                                        </div>
                                        <div className="d-flex gap-2 position-relative z-2">
                                            <button
                                                aria-label="Add to wishlist"
                                                className="btn btn-icon btn-sm btn-outline-secondary animate-pulse rounded-circle"
                                                data-bs-custom-class="tooltip-sm"
                                                data-bs-toggle="tooltip"
                                                title="Wishlist"
                                                type="button">
                                                <i className="bi-heart animate-target fs-sm" />
                                            </button>
                                            <button
                                                aria-label="Notify"
                                                className="btn btn-icon btn-sm btn-outline-secondary animate-shake rounded-circle"
                                                data-bs-custom-class="tooltip-sm"
                                                data-bs-toggle="tooltip"
                                                title="Notify"
                                                type="button">
                                                <i className="bi-bell animate-target fs-sm" />
                                            </button>
                                            <button
                                                aria-label="Compare"
                                                className="btn btn-icon btn-sm btn-outline-secondary animate-rotate rounded-circle"
                                                data-bs-custom-class="tooltip-sm"
                                                data-bs-toggle="tooltip"
                                                title="Compare"
                                                type="button">
                                                <i className="bi-repeat animate-target fs-sm" />
                                            </button>
                                        </div>
                                    </div>
                                    <h3 className="h6 mb-2">
                                        <Link
                                            className="hover-effect-underline stretched-link me-1"
                                            to="/single-entry-cars">
                                            GMC Sierra 1500
                                        </Link>
                                        <span className="fs-xs fw-normal text-body-secondary">
                                            (2020)
                                        </span>
                                    </h3>
                                    <div className="h6 mb-0">$69,300</div>
                                </div>
                                <div className="card-footer bg-transparent border-0 pt-0 pb-4">
                                    <div className="border-top pt-3">
                                        <div className="row row-cols-2 g-2 fs-sm">
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi bi-geo-alt" />
                                                Boston
                                            </div>
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi bi-speedometer" />
                                                54K mi
                                            </div>
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi bi-fuel-pump-diesel" />
                                                Diesel
                                            </div>
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi-gearbox" />
                                                Automatic
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col">
                    <article className="card h-100 hover-effect-scale bg-body-tertiary border-0">
                                <div className="card-img-top position-relative overflow-hidden">
                                    <div className="d-flex flex-column gap-2 align-items-start position-absolute top-0 start-0 z-1 pt-1 pt-sm-0 ps-1 ps-sm-0 mt-2 mt-sm-3 ms-2 ms-sm-3">
                                        <span className="badge text-bg-warning">Used</span>
                                    </div>
                                    <div
                                        className="ratio hover-effect-target bg-body-secondary"
                                        style={{
                                            "--fn-aspect-ratio": "calc(204 / 306 * 100%)",
                                        }}>
                                        <img alt="" src="assets/img/listings/cars/grid/15.jpg" />
                                    </div>
                                </div>
                                <div className="card-body pb-3">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <div className="fs-xs text-body-secondary me-3">
                                            03/07/2024
                                        </div>
                                        <div className="d-flex gap-2 position-relative z-2">
                                            <button
                                                aria-label="Add to wishlist"
                                                className="btn btn-icon btn-sm btn-outline-secondary animate-pulse rounded-circle"
                                                data-bs-custom-class="tooltip-sm"
                                                data-bs-toggle="tooltip"
                                                title="Wishlist"
                                                type="button">
                                                <i className="bi-heart animate-target fs-sm" />
                                            </button>
                                            <button
                                                aria-label="Notify"
                                                className="btn btn-icon btn-sm btn-outline-secondary animate-shake rounded-circle"
                                                data-bs-custom-class="tooltip-sm"
                                                data-bs-toggle="tooltip"
                                                title="Notify"
                                                type="button">
                                                <i className="bi-bell animate-target fs-sm" />
                                            </button>
                                            <button
                                                aria-label="Compare"
                                                className="btn btn-icon btn-sm btn-outline-secondary animate-rotate rounded-circle"
                                                data-bs-custom-class="tooltip-sm"
                                                data-bs-toggle="tooltip"
                                                title="Compare"
                                                type="button">
                                                <i className="bi-repeat animate-target fs-sm" />
                                            </button>
                                        </div>
                                    </div>
                                    <h3 className="h6 mb-2">
                                        <Link
                                            className="hover-effect-underline stretched-link me-1"
                                            to="/single-entry-cars">
                                            Porsche 911 Carrera
                                        </Link>
                                        <span className="fs-xs fw-normal text-body-secondary">
                                            (2019)
                                        </span>
                                    </h3>
                                    <div className="h6 mb-0">$108,500</div>
                                </div>
                                <div className="card-footer bg-transparent border-0 pt-0 pb-4">
                                    <div className="border-top pt-3">
                                        <div className="row row-cols-2 g-2 fs-sm">
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi bi-geo-alt" />
                                                New York
                                            </div>
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi bi-speedometer" />
                                                47K mi
                                            </div>
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi bi-fuel-pump-diesel" />
                                                Gasoline
                                            </div>
                                            <div className="col d-flex align-items-center gap-2">
                                                <i className="bi-gearbox" />
                                                Automatic
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                    <nav aria-label="Listings pagination" className="pt-3 mt-3">
                        <ul className="pagination pagination-lg">
                            <li aria-current="page" className="page-item active">
                                <span className="page-link">
                                    1<span className="visually-hidden">(current)</span>
                                </span>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to="#!">
                                    2
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to="#!">
                                    3
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to="#!">
                                    4
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to="#!">
                                    5
                                </Link>
                            </li>
                            <li className="page-item">
                                <span className="page-link px-2 pe-none">...</span>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to="#!">
                                    10
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </main>
}