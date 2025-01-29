import { Link } from "react-router";

const Home = () => {
    return (
      <div className="container-fluid mb-5">
        <div className="row border-t px-xl-5">
          <div className="col-lg-3 hidden lg:block">
            <a
              className="btn shadow-none d-flex items-center justify-between bg-primary text-white w-full"
              style={{ height: '65px', marginTop: '-1px', padding: '0 30px' }}
              data-toggle="collapse"
              href="#navbar-vertical"
            >
              <h6 className="m-0">Categories</h6>
              <i className="fa fa-angle-down text-dark"></i>
            </a>
            <nav className="collapse show navbar navbar-vertical navbar-light items-start p-0 border-t-0 border-b-0" id="navbar-vertical">
              <div className="navbar-nav w-full overflow-hidden" style={{ height: '410px' }}>
                <div className="nav-item dropdown">
                  <Link href="#" className="nav-link" data-toggle="dropdown">
                    Dresses <i className="fa fa-angle-down float-right mt-1"></i>
                  </Link>
                  <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-full m-0">
                    <Link href="#" className="dropdown-item">
                      Mens Dresses
                    </Link>
                    <Link href="#" className="dropdown-item">
                      Womens Dresses
                    </Link>
                    <Link href="#" className="dropdown-item">
                      Babys Dresses
                    </Link>
                  </div>
                </div>
                <Link href="#" className="nav-item nav-link">Shirts</Link>
                <Link href="#" className="nav-item nav-link">Jeans</Link>
                <Link href="#" className="nav-item nav-link">Swimwear</Link>
                <Link href="#" className="nav-item nav-link">Sleepwear</Link>
                <Link href="#" className="nav-item nav-link">Sportswear</Link>
                <Link href="#" className="nav-item nav-link">Jumpsuits</Link>
                <Link href="#" className="nav-item nav-link">Blazers</Link>
                <Link href="#" className="nav-item nav-link">Jackets</Link>
                <Link href="#" className="nav-item nav-link">Shoes</Link>
              </div>
            </nav>
          </div>
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
              <a href="#" className="text-decoration-none d-block d-lg-none">
                <h1 className="m-0 display-5 font-semibold">
                  <span className="text-primary font-bold border px-3 mr-1">E</span>Shopper
                </h1>
              </a>
              <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-between" id="navbarCollapse">
                <div className="navbar-nav mr-auto py-0">
                  <a href="index.html" className="nav-item nav-link active">Home</a>
                  <a href="shop.html" className="nav-item nav-link">Shop</a>
                  <a href="detail.html" className="nav-item nav-link">Shop Detail</a>
                  <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                    <div className="dropdown-menu rounded-0 m-0">
                      <a href="cart.html" className="dropdown-item">Shopping Cart</a>
                      <a href="checkout.html" className="dropdown-item">Checkout</a>
                    </div>
                  </div>
                  <a href="contact.html" className="nav-item nav-link">Contact</a>
                </div>
                <div className="navbar-nav ml-auto py-0">
                  <a href="#" className="nav-item nav-link">Login</a>
                  <a href="#" className="nav-item nav-link">Register</a>
                </div>
              </div>
            </nav>
            <div className="relative">
              <img className="img-fluid w-full" src="img/carousel-1.jpg" alt="Image" style={{ height: '410px' }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-3 max-w-xl text-center">
                  <h4 className="text-light text-uppercase font-medium mb-3">10% Off Your First Order</h4>
                  <h3 className="display-4 text-white font-semibold mb-4">Fashionable Dress</h3>
                  <a href="#" className="btn btn-light py-2 px-3">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Home