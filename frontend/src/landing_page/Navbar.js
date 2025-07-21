import React from "react";

function Navbar() {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom " style={{backgroundColor: "white"}}>
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src="media/images/logo.svg" alt="logo" style={{width:"25%"}}/>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
            <form class="d-flex" role="search">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Signup
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Product
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link avtive" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Support
                </a>
              </li>
              
            </ul>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
