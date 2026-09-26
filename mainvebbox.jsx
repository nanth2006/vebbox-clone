// MainVebbox.jsx
import Home from "./Home.jsx";

function MainVebbox() {
    // All sections (Home, Services, Products, About us, Contact) now live
    // together on one page inside Home.jsx. Navbar links scroll to them
    // using their #id instead of routing to separate pages.
    return <Home />;
}

export default MainVebbox;
