import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Form from "../components/Form/Form";

export const Router = () => {
  return (
    <BrowserRouter>
            <Routes >
                <Route index element={<Home />} />
                <Route
                    path="/form"
                    element={<Form />} />
            </Routes>
        </BrowserRouter>
    );
  
}

export default Router;
