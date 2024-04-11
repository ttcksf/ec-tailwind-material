import Top from "./screen/Top";
import Archive from "./screen/Archive";
import Single from "./screen/Single";
import Cart from "./screen/Cart";
import LogIn from "./screen/LogIn";
import SignUp from "./screen/SignUp";
import NotFound from "./screen/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/archive/:productId" element={<Single />} />
          <Route path="/archive/cart" element={<Cart />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
