import React from "react";

function Header() {
  return (
    <>
      <header>
        <div class="container header">
          <div class="logo">NovaMart</div>

          <div class="search">
            <input placeholder="Search products..." />
            <button>
              <i class="fas fa-search"></i>
            </button>
          </div>

          <div class="actions">
            <div class="icon">
              <i class="far fa-user"></i>
            </div>
            <div class="icon">
              <i class="far fa-heart"></i>
              <span class="badge">2</span>
            </div>
            <div class="icon">
              <i class="fas fa-cart-shopping"></i>
              <span class="badge">3</span>
            </div>
          </div>
        </div>
      </header>
      <nav>
        <div class="container nav">
          <a href="#">Home</a>
          <a href="#">Deals</a>
          <a href="#">New</a>
          <a href="#">Categories</a>
          <a href="#">Contact</a>
        </div>
      </nav>
    </>
  );
}

export default Header;
