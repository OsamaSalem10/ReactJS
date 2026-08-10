import { Link  ,  useNavigate} from "react-router-dom";
import { deleteCategory } from "../server/delete";
import { toast } from "react-toastify";
import { useState } from "react";

export const Categories = ({ main, setMain, Update }) => {
      const [search, setSearch] = useState("");
    const navigate = useNavigate();
    return <main className="content">
        <div className="container-fluid p-0">
            <h1 className="h3 mb-3">Categories</h1>
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
                                            placeholder="Search categories..."
                                             onChange={(e) => setSearch(e.target.value)}
                                            onKeyUp={() => {
                                                if (search === "") {
                                                    Update();
                                                } else {
                                                    setMain((prev) => ({
                                                        ...prev,
                                                        categories: prev.categories.filter((category) =>
                                                            category.name
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
                                        <Link className="btn btn-primary btn-lg" to="/add-category">
                                            <i className="bi-plus" /> Add Category
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <table className="table w-100">
                                <thead>
                                    <tr>
                                        <th className="text-start">Image</th>
                                        <th >Category Name</th>
                                        <th>Description</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {main && main.categories && main.categories.length > 0 ? main.categories.map((category) => (
                                        <tr key={category.id}>
                                            <td>
                                                <img
                                                    alt="Avatar"
                                                    className="rounded-circle my-n1"
                                                    width="32"
                                                    height="32"
                                                    src={category.image || "../assets/images/products/product-img-1.jpg"}
                                                />
                                            </td>
                                            <td>{category.name}</td>
                                            <td>{category.description}</td>
                                            <td>
                                                <button className="btn btn-sm btn-outline-primary"
                                                    onClick={() =>
                                                        navigate(`/edit-category`, {
                                                            state: { category },
                                                        })
                                                    }
                                                >Edit</button>
                                                <button className="btn btn-sm btn-outline-danger ms-2"
                                                    onClick={async (e) => {
                                                        e.preventDefault();
                                                        const confirmDelete = window.confirm(
                                                            "Are you sure you want to delete this category?",
                                                        );
                                                        if (!confirmDelete) {
                                                            return;
                                                        } else {
                                                            try {
                                                                await deleteCategory(category.id);

                                                                toast.success(
                                                                    "Category deleted successfully",
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
                                                No categories found.
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