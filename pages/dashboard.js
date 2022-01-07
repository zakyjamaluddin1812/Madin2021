const dashboard = () => {
    const app = document.getElementById('app');
    app.innerHTML = `<div class="dashboard" data-aos="fade">
    <h1 class="mb-5">- PILIH KELAS -</h1>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item ">
              <div class="card mx-auto bg-light" style="width: 18rem;" onclick="kelas1()">
                      <img src="assets/1.png" class="card-img-top px-5 mt-5" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">Kelas I - Wustho</h5>
                        <p class="card-text text-left">
                          Wali Kelas Pa: Zaky Jamaluddin<br>
                          Santri Putra : 10 anak<br>
                          Wali Kelas Pi: Ustdz. Roudlotul J.<br>
                          Santri Putri : 31 anak</p>
                          
                      </div>
                    </div>
            </div>
            <div class="carousel-item active">
              <div class="card mx-auto bg-light" style="width: 18rem;" onclick="kelas2()">
                      <img src="assets/2.png" class="card-img-top px-5 mt-5" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">Kelas II - Wustho</h5>
                        <p class="card-text text-left">
                        Wali Kelas Pa: Ust. Ahmad Ikmal<br>
                        Santri Putra : 11 anak<br>
                        Wali Kelas Pi: Ustdz. Robiatul M.<br>
                        Santri Putri : 28 anak</p>
                          
                      </div>
                    </div>
            </div>
            <div class="carousel-item">
                  <div class="card mx-auto bg-light" style="width: 18rem;" onclick="kelas3()">
                          <img src="assets/3.png" class="card-img-top px-5 mt-5" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">Kelas III - Wustho</h5>
                            <p class="card-text text-left">
                              Wali Kelas Pa: Ust. Ahmad Kamil<br>
                              Santri Putra : 9 anak<br>
                              Wali Kelas Pi: Ust. Haris Abdulloh<br>
                              Santri Putri : 26 anak</p>
                              
                          </div>
                  </div>
            </div>
            <div class="carousel-item">
                  <div class="card mx-auto bg-light" style="width: 18rem;" onclick="kelas4()">
                          <img src="assets/4.png" class="card-img-top px-5 mt-5" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">Kelas IV - Wustho</h5>
                            <p class="card-text text-left">
                              Wali Kelas Pa: Ust. Zainul Mustofa<br>
                              Santri Putra : 4 anak<br>
                              Wali Kelas Pi: Ny. Hj. Mahsunah<br>
                              Santri Putri : 24 anak</p>
                              
                          </div>
                  </div>
            </div>
            <div class="carousel-item">
                  <div class="card mx-auto bg-light" style="width: 18rem;" onclick="ulya1()">
                          <img src="assets/ulya1.png" class="card-img-top px-5 mt-5" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">Kelas I - Ulya</h5>
                            <p class="card-text text-left">
                            Wali Kelas Pa: Ust. Habib Yahya<br>
                            Santri Putra Putri : 6 anak<br>
                             
                          </div>
                  </div>
            </div>
            <div class="carousel-item">
                  <div class="card mx-auto bg-light" style="width: 18rem;" onclick="ulya2()">
                          <img src="assets/ulya2.png" class="card-img-top px-5 mt-5" alt="...">
                          <div class="card-body">
                            <h5 class="card-title">Kelas II - Ulya</h5>
                            <p class="card-text text-left">
                            Wali Kelas : Ust. Moh. Muttaqin<br>
                              Santri Putra Putri : 14 anak<br>
                            
                          </div>
                  </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
  </div>

  <div class="d-flex px-5 justify-content-between mt-3 prev" >
  <a role="button" class="btn btn-outline-success" data-bs-target="#carouselExampleControls" data-bs-slide="prev">&lt; Prev</a>
  <a role="button" class="btn btn-outline-success" data-bs-target="#carouselExampleControls" data-bs-slide="next">Next &gt;</a>
  </div>
  `
}