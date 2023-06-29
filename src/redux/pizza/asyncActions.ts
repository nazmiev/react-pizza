import { createAsyncThunk } from "@reduxjs/toolkit";
import { Pizza, SearchPizzaParams } from "./types";
import axios from "axios";

export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
    'pizza/fetchPizzasStatus',
    async (params) => {
        const { sortBy, category, search, currentPage } = params;
        const { data } = await axios.get<Pizza[]>(
            `https://62f5f074612c13062b430099.mockapi.io/pizza?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=asc${search}`
        );
        return data;
    }
)