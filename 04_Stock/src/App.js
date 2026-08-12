import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Stock from "./components/Stock";
import StockDetails from "./components/StockDetails";


function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/stock"
                    element={<Stock />}
                />

                <Route
                    path="/stock/:id"
                    element={<StockDetails />}
                />

            </Routes>

        </BrowserRouter>

    );
}

export default App;