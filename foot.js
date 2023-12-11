document.write(`<div class="container-fluid p-5">
<div class="container">
  <div class="row">
    <div class="col-lg-4 col-md-12 col-sm-12 mt-4">
    <img src="img/logo.png" alt="" width="40px">
    <p class="fw-bold mt-3 pe-5">Some Paragraph about logo</p>
      <p class="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, sequi. Quisquam, voluptatem. Explicabo minus voluptatibus consectetur pariatur sit necessitatibus maxime. Fugiat a, maxime consectetur tenetur, vitae esse provident.</p>
    </div>
    <div class="col-lg-4 col-md-12 col-sm-12 mt-4">
      <h5 class=" mb-4 mt-3 ">Quick Links</h5>
      <a href="index.html" class="  text-decoration-none  text-dark fw-bold  " >HOME</a></p>
      <p><a href="shop.html" class="text-decoration-none text-dark fw-bold  " >SHOP</a></p>
      <p><a href="blog.html" class="text-decoration-none text-dark fw-bold  " >BLOG</a></p>
      <p><a href="about.html" class="text-decoration-none text-dark fw-bold  ">ABOUT</a></p>
      <p><a href="contact.html" class="text-decoration-none text-dark fw-bold  ">CONTACT</a></p>
    </div>
    <div class="col-lg-4 col-md-12 col-sm-12 mt-4">
    <h5 class="fs-4 mb-3 mt-3">Contact Information</h5>
    <p class="fw-bold">Address  :-
       203, Sri Sai Krishna Apartment, Ram Suchit Mishra Path, Sri Krishna Nagar, Kidwaipuri, Patna, Bihar 800001</p>
       <p class="fw-bold">Mobile :- +91-7004525294</p>
       <p class="fw-bold cur" onclick="mail()">Email :- SpecBits@gmail.com</p>
       <div class="mt-5">        <i class="fa-brands fa-facebook me-4 fs-4 mt-3 point" onclick="face()"></i><i class="fa-brands fa-instagram fs-4 me-4 mt-3 point " onclick="face1()"></i><i class="fa-brands fa-twitter me-4 fs-4 mt-3 point" onclick=" face2()"></i><i class="fa-brands fa-youtube me-4 fs-4 mt-3 point " onclick="face3()"></i>
       
      </div>

    </div>
  </div>
</div>
</div>

<div class="container-fluid bg-secondary ">
<p class="p-5 text-center">2023 &copy copy rights <span class="fw-bold">Design by vijay patel</span></p>
</div>
</div>

  <script src="bootstrap.bundle.min.js"></script>
  <script>
      function face(){
        window.location="https://www.facebook.com/"
      }
      function face1(){
        window.location="https://www.instagram.com"
      }
      function face2(){
        window.location="https://www.twitter.com"
      }
      function face3(){
        window.location="http://www.youtube.com/"
      }
      function mail(){
        window.location="http://www.gmail.com/"
      }
      function log(){
        window.location = "login.html"
      }
    </script>
</body>
</html>`)