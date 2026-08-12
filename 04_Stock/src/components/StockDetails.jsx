import {
    useEffect,
    useState
} from "react";

import {
    getProductStock,
    getProductMovements
} from "../api/stock";

import {
    useNavigate,
    useParams
} from "react-router-dom";


const StockDetails = () => {

    const { id } =
        useParams();

    const navigate =
        useNavigate();


    const [product, setProduct] =
        useState(null);

    const [movements, setMovements] =
        useState([]);

    const [loading, setLoading] =
        useState(true);


    // ======================================
    // UPDATE
    // ======================================

    const update = async () => {

        try {

            setLoading(true);


            const [
                productData,
                movementsData
            ] = await Promise.all([

                getProductStock(id),

                getProductMovements(id)

            ]);


            setProduct(productData);

            setMovements(movementsData);


        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }
    };


    useEffect(() => {

        update();

    }, [id]);


    if (loading) {

        return (

            <div className="container py-5 text-center">

                Loading...

            </div>

        );

    }


    if (!product) {

        return (

            <div className="container py-5">

                <div className="alert alert-danger">

                    Product not found

                </div>

            </div>

        );

    }


    // ======================================
    // TOTAL IN
    // ======================================

    const totalIn =
        movements
            .filter(
                movement =>
                    movement.type === "IN"
            )
            .reduce(
                (sum, movement) =>
                    sum +
                    Number(
                        movement.quantity
                    ),
                0
            );


    // ======================================
    // TOTAL OUT
    // ======================================

    const totalOut =
        movements
            .filter(
                movement =>
                    movement.type === "OUT"
            )
            .reduce(
                (sum, movement) =>
                    sum +
                    Number(
                        movement.quantity
                    ),
                0
            );


    const isLow =
        Number(product.quantity) <=
        Number(product.min_quantity);


    return (

        <div className="container-fluid py-4">


            {/* HEADER */}

            <div className="mb-4">

                <button
                    className="btn btn-outline-secondary mb-3"
                    onClick={() =>
                        navigate("/stock")
                    }
                >

                    ← Back

                </button>


                <div className="d-flex justify-content-between">

                    <div>

                        <h2>
                            {product.name}
                        </h2>

                        <p className="text-muted">
                            Stock Details
                        </p>

                    </div>


                    <div>

                        {isLow ? (

                            <span className="badge bg-danger fs-6">

                                Low Stock

                            </span>

                        ) : (

                            <span className="badge bg-success fs-6">

                                Available

                            </span>

                        )}

                    </div>

                </div>

            </div>


            {/* STATISTICS */}

            <div className="row g-3 mb-4">


                <div className="col-md-3">

                    <div className="card">

                        <div className="card-body">

                            <small className="text-muted">
                                Current Stock
                            </small>

                            <h3>

                                {product.quantity}

                                <small className="fs-6 ms-1">

                                    {product.unit}

                                </small>

                            </h3>

                        </div>

                    </div>

                </div>


                <div className="col-md-3">

                    <div className="card">

                        <div className="card-body">

                            <small className="text-muted">
                                Minimum
                            </small>

                            <h3>

                                {product.min_quantity}

                                <small className="fs-6 ms-1">

                                    {product.unit}

                                </small>

                            </h3>

                        </div>

                    </div>

                </div>


                <div className="col-md-3">

                    <div className="card">

                        <div className="card-body">

                            <small className="text-muted">
                                Total IN
                            </small>

                            <h3 className="text-success">

                                +{totalIn}

                            </h3>

                        </div>

                    </div>

                </div>


                <div className="col-md-3">

                    <div className="card">

                        <div className="card-body">

                            <small className="text-muted">
                                Total OUT
                            </small>

                            <h3 className="text-danger">

                                -{totalOut}

                            </h3>

                        </div>

                    </div>

                </div>

            </div>


            {/* PRODUCT INFO */}

            <div className="card mb-4">

                <div className="card-body">

                    <h5>
                        Product Information
                    </h5>


                    <div className="row mt-3">


                        <div className="col-md-3">

                            <small className="text-muted">
                                Product
                            </small>

                            <p>
                                {product.name}
                            </p>

                        </div>


                        <div className="col-md-3">

                            <small className="text-muted">
                                Category
                            </small>

                            <p>
                                {
                                    product.category_name ||
                                    "-"
                                }
                            </p>

                        </div>


                        <div className="col-md-3">

                            <small className="text-muted">
                                Unit
                            </small>

                            <p>
                                {product.unit}
                            </p>

                        </div>


                        <div className="col-md-3">

                            <small className="text-muted">
                                Price
                            </small>

                            <p>
                                {product.price}
                            </p>

                        </div>

                    </div>

                </div>

            </div>


            {/* MOVEMENTS */}

            <div className="card">

                <div className="card-body">

                    <div className="d-flex justify-content-between mb-3">

                        <h5>
                            Movement History
                        </h5>

                        <span className="badge bg-secondary">

                            {movements.length}

                        </span>

                    </div>


                    <div className="table-responsive">

                        <table className="table table-hover">

                            <thead>

                                <tr>

                                    <th>
                                        #
                                    </th>

                                    <th>
                                        Type
                                    </th>

                                    <th>
                                        Quantity
                                    </th>

                                    <th>
                                        Unit
                                    </th>

                                    <th>
                                        Note
                                    </th>

                                    <th>
                                        Date
                                    </th>

                                </tr>

                            </thead>


                            <tbody>

                                {movements.map(
                                    movement => (

                                        <tr
                                            key={
                                                movement.id
                                            }
                                        >

                                            <td>
                                                {
                                                    movement.id
                                                }
                                            </td>


                                            <td>

                                                {movement.type === "IN" && (

                                                    <span className="badge bg-success">
                                                        IN
                                                    </span>

                                                )}


                                                {movement.type === "OUT" && (

                                                    <span className="badge bg-danger">
                                                        OUT
                                                    </span>

                                                )}


                                                {movement.type === "ADJUSTMENT" && (

                                                    <span className="badge bg-warning text-dark">
                                                        ADJUSTMENT
                                                    </span>

                                                )}

                                            </td>


                                            <td>

                                                <strong>
                                                    {
                                                        movement.quantity
                                                    }
                                                </strong>

                                            </td>


                                            <td>
                                                {
                                                    movement.unit
                                                }
                                            </td>


                                            <td>
                                                {
                                                    movement.note ||
                                                    "-"
                                                }
                                            </td>


                                            <td>

                                                {
                                                    new Date(
                                                        movement.created_at
                                                    ).toLocaleString()
                                                }

                                            </td>

                                        </tr>

                                    )
                                )}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>

    );
};


export default StockDetails;