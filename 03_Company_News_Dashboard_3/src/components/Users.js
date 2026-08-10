import { Link, useNavigate } from "react-router-dom"
import { deleteUser } from "../server/delete"
import { toast } from "react-toastify";
import { useState } from "react";
export const Users = ({ main, setMain, Update }) => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    return <main className="content">
        <div className="container-fluid p-0">
            <h1 className="h3 mb-3">Users</h1>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <div className="row mb-3">
                                <div className="col-md-6 mb-2 mb-md-0">
                                    <div className="input-group input-group-search">
                                        <input
                                            className="form-control"

                                            placeholder="Search users…"
                                            type="text"
                                            onChange={(e) => setSearch(e.target.value)}
                                            onKeyUp={() => {
                                                if (search === "") {
                                                    Update();
                                                } else {
                                                    console.log("users", main.users);
                                                    setMain((prev) => ({
                                                        ...prev,
                                                        users: prev.users.filter((user) =>
                                                            user.name
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
                                        <Link className="btn btn-primary btn-lg" to="/add-user">
                                            <i className="bi-plus" /> Add Customer
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <table className="table w-100" >
                                <thead>
                                    <tr>
                                        <th className="text-start">Image</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Role</th>
                                        <th>Status</th>
                                        <th className="text-end">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {main?.users?.length > 0 ? (
                                        main.users.map((user) => (
                                            <tr key={user.id}>
                                                <td>
                                                    <img
                                                        alt="Avatar"
                                                        className="rounded-circle my-n1"
                                                        width="32"
                                                        height="32"
                                                        src={user.image || "../assets/images/products/product-img-1.jpg"}
                                                    />
                                                </td>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>{user.phone}</td>
                                                <td>{user.role}</td>
                                                <td>
                                                    <span
                                                        className={`badge ${user.status === "active"
                                                            ? "badge-subtle-success"
                                                            : "badge-subtle-danger"
                                                            }`}
                                                    >
                                                        {user.status}
                                                    </span>
                                                </td>
                                                <td className="text-end">
                                                    <button className="btn btn-sm btn-outline-primary"
                                                        onClick={() =>
                                                            navigate(`/edit-user`, {
                                                                state: { user },
                                                            })
                                                        }>
                                                        Edit
                                                    </button>
                                                    <button className="btn btn-sm btn-outline-danger ms-2" type="button"
                                                        onClick={async (e) => {
                                                            e.preventDefault();
                                                            const confirmDelete = window.confirm(
                                                                "Are you sure you want to delete this user?",
                                                            );
                                                            if (!confirmDelete) {
                                                                return;
                                                            } else {
                                                                try {
                                                                    await deleteUser(user.id);

                                                                    toast.success(
                                                                        "User deleted successfully",
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
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="6" className="text-center py-4">
                                                No Users Found
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