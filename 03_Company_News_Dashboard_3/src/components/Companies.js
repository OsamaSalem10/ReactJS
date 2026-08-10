import { Link, useNavigate } from "react-router-dom";
import { deleteCompany } from "../server/delete";
import { toast } from "react-toastify";
import { useState } from "react";

export const Companies = ({ main, setMain, Update }) => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    return <main className="content">
        <div className="container-fluid p-0">
            <h1 className="h3 mb-3">Companies</h1>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <div className="row mb-3">
                                <div className="col-md-6 mb-2 mb-md-0">
                                    <div className="input-group input-group-search">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search companies..."
                                            onChange={(e) => setSearch(e.target.value)}
                                            onKeyUp={() => {
                                                if (search === "") {
                                                    Update();
                                                } else {
                                                    setMain((prev) => ({
                                                        ...prev,
                                                        companies: prev.companies.filter((company) =>
                                                            company.name
                                                                .toLowerCase()
                                                                .includes(search.toLowerCase()),
                                                        ),
                                                    }));
                                                }
                                            }}
                                        />
                                        <button className="btn" type="button">
                                            <i className="bi-search align-middle" />
                                        </button>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="text-sm-end">
                                        <button className="btn btn-light btn-lg me-2" type="button">
                                            <i className="bi-download" /> Export
                                        </button>
                                        <Link className="btn btn-primary btn-lg" to="/add-company">
                                            <i className="bi-plus" /> Add Company
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <table className="table w-100">
                                <thead>
                                    <tr>
                                        <th className="text-start">Logo</th>
                                        <th>User</th>
                                        <th>Category</th>
                                        <th>Company</th>
                                        <th>Cover</th>
                                        <th>Description</th>
                                        <th>Web Site</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Address</th>
                                        <th>City</th>
                                        <th>Country</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {main && main.companies && main.companies.length > 0 ? main.companies.map((company) => (
                                        <tr key={company.id}>
                                            <td>
                                                <img
                                                    alt="Avatar"
                                                    className="rounded-circle my-n1"
                                                    width="32"
                                                    height="32"
                                                    src={company.logo || "../assets/images/products/product-img-1.jpg"}
                                                />
                                            </td>
                                            <td>
                                                {main &&
                                                    main.users?.find((e) => e.id === company.user_id)
                                                        ?.name}
                                            </td>
                                            <td>
                                                {main && main.categories &&
                                                    main.categories.find(
                                                        (e) => e.id === company.category_id,
                                                    )?.name}
                                            </td>
                                            <td>{company.name}</td>
                                            <td>
                                                <img
                                                    alt="Avatar"
                                                    className="rounded-circle my-n1"
                                                    width="32"
                                                    height="32"
                                                    src={company.cover || "../assets/images/products/product-img-1.jpg"}
                                                />
                                            </td>
                                            <td>
                                                {company.description
                                                    ? company.description.slice(0, 10)
                                                    : "No Description"}
                                            </td>
                                            <td>
                                                {company.website
                                                    ? company.website.slice(0, 10)
                                                    : "No website"}
                                            </td>
                                            <td> {company.email
                                                    ? company.email.slice(0, 10)
                                                    : "No website"}</td>
                                            <td>{company.phone}</td>
                                            <td>{company.address}</td>
                                            <td>{company.city}</td>
                                            <td>{company.country}</td>
                                            <td>
                                                <button className="btn btn-sm btn-outline-primary"
                                                    onClick={() =>
                                                        navigate(`/edit-company`, {
                                                            state: { company },
                                                        })
                                                    }
                                                >Edit</button>
                                                <button className="btn btn-sm btn-outline-danger ms-2"
                                                    onClick={async (e) => {
                                                        e.preventDefault();
                                                        const confirmDelete = window.confirm(
                                                            "Are you sure you want to delete this company?",
                                                        );
                                                        if (!confirmDelete) {
                                                            return;
                                                        } else {
                                                            try {
                                                                await deleteCompany(company.id);

                                                                toast.success(
                                                                    "Company deleted successfully",
                                                                );

                                                                Update();
                                                            } catch (error) {
                                                                toast.error(
                                                                    error.response?.data?.message ||
                                                                    "Delete failed",
                                                                );
                                                            }
                                                        }
                                                    }}
                                                >Delete</button>
                                            </td>
                                        </tr>
                                    )) : (
                                        <tr>
                                            <td colSpan="3" className="text-center">
                                                No companies found.
                                            </td>
                                        </tr>
                                    )}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
}