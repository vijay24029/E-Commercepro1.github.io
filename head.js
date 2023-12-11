document.write(`<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>E-commerce</title>
  <link rel="shortcut icon" href="img/v.jpg" type="image/x-icon">
  <link rel="stylesheet" href="bootstrap.min.css">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
</head>

<body>



  <nav class="navbar navbar-expand-lg navbar-light side2 sticky-top"  >
    <div class="container-fluid">
      <a class="navbar-brand ms-5" href="#"><img src="img/logo.png" alt="" width="50" class="ms-5 "></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto side1">
          <li class="nav-item ms-4 fs-5">
            <a class="nav-link active fw-bold " aria-current="page" href="index.html"><i
                class="fa-solid fa-house me-2"></i>Home</a>
          </li>
          <li class="nav-item ms-4 fs-5">
            <a class="nav-link active fw-bold " aria-current="page" href="shop.html"><i
                class="fa-solid fa-cart-shopping me-2"></i> Shop</a>
          </li>
          <li class="nav-item ms-4 fs-5">
            <a class="nav-link active fw-bold " aria-current="page" href="blog.html"><i
                class="fa-brands fa-microblog me-2"></i> Blog</a>
          </li>
          <li class="nav-item ms-4 fs-5">
            <a class="nav-link active fw-bold " aria-current="page" href="men.html"><i class="fa-solid fa-person me-2"></i>
              Men</a>
          </li>
          <li class="nav-item ms-4 fs-5">
            <a class="nav-link active fw-bold " aria-current="page" href="women.html"><i
                class="fa-solid fa-person-dress me-2"></i> Wemen</a>
          </li>
          <li class="nav-item ms-4 fs-5">
            <a class="nav-link active fw-bold " aria-current="page" href="about.html"><i
                class="fa-regular fa-address-card me-2"></i>About</a>
          </li>
          <li class="nav-item ms-4 fs-5">
            <a class="nav-link active fw-bold " aria-current="page" href="contact.html"><i
                class="fa-solid fa-id-badge me-2"></i>Contact</a>
          </li>
        </ul>

      </div>
      <div class="d-none d-lg-block  side">
        <i class="fa-solid fa-search ms-5 fs-5 p-2"></i> <i class="fa-solid fa-cart-arrow-down me-2 fs-5 p-2"></i><i class="fa-solid fa-user fs-5 me-5 ms-2" onclick="log()"></i>
      </div>

    </div>
  </nav>`)