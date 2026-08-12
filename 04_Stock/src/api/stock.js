import axios from "axios";

const API_URL =
    "http://localhost:5000";


// GET ALL STOCK

export const getStock = async () => {

    const response =
        await axios.get(
            `${API_URL}/stock`
        );

    return response.data;
};


// GET LOW STOCK

export const getLowStock = async () => {

    const response =
        await axios.get(
            `${API_URL}/stock/low`
        );

    return response.data;
};


// GET ALL MOVEMENTS

export const getMovements = async () => {

    const response =
        await axios.get(
            `${API_URL}/stock/movements`
        );

    return response.data;
};


// GET PRODUCT

export const getProductStock =
    async (id) => {

        const response =
            await axios.get(
                `${API_URL}/stock/product/${id}`
            );

        return response.data;
    };


// GET PRODUCT MOVEMENTS

export const getProductMovements =
    async (id) => {

        const response =
            await axios.get(
                `${API_URL}/stock/product/${id}/movements`
            );

        return response.data;
    };


// STOCK IN

export const stockIn =
    async (data) => {

        const response =
            await axios.post(
                `${API_URL}/stock/in`,
                data
            );

        return response.data;
    };


// STOCK OUT

export const stockOut =
    async (data) => {

        const response =
            await axios.post(
                `${API_URL}/stock/out`,
                data
            );

        return response.data;
    };


// ADJUSTMENT

export const adjustment =
    async (data) => {

        const response =
            await axios.post(
                `${API_URL}/stock/adjustment`,
                data
            );

        return response.data;
    };