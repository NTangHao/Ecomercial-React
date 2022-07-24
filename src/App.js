import './App.css';
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import Error from "./pages/error/Error";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import SharedLayout from "./pages/SharedLayout";
import ShopPage from "./pages/shop/shop.component";

const HatPages = () => {

    return (
        <div>
            <h1>Hats page</h1>
            <Link to='/' className='btn'> Topic</Link>
        </div>
    );
}

const TopPicID = () => {

    return (
        <div>
            <h1>Đây là topic</h1>
        </div>
    );
}

function App() {
    return (
       <BrowserRouter>

           {/* !*Từ khóa exact chỉ : Phải đúng xác định dường dẫn nếu ko có thì nó đúng thì nó lấy hết*!*/}
            <Routes>

                <Route exact path='/' element={<SharedLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="shop" element={<ShopPage/>}/>
                    <Route path="products" element={<Product/>}/>
                    <Route path="*" element={<Error/>}/>
                </Route>
            </Routes>

        </BrowserRouter>

        /*<ShopPage/>*/
    );
}

export default App;
