const ulya2 = () => {
    const app = document.getElementById('app');
    app.innerHTML = `<div class="kelas px-4" data-aos="fade">
    <h1 class="mb-5">- Kelas II Ulya -</h1>
    <div id="wadahMapel">
        
    </div>
    
</div>
<div class="btn btn-secondary ms-4" onclick="dashboard()">Kembali</div>`


// Get DATA
$.ajax({
  url : 'assets/mapel.json',
  dataType: 'json',
}).done( data => {
  const mapel1 = data.filter(el => el.kelas === 'ulya2')
  mapel1.forEach(mapel => {
    const wadah = document.getElementById('wadahMapel');
    const div = document.createElement('div')
    div.classList.add('card', 'card-kelas', 'mb-3')
    div.innerHTML = `<div class="card-header">
                        ${mapel.guru}
                      </div>
                      <div class="card-body">
                      ${mapel.mapel.map((pel, i) => 
                        `${i== 0 ? "" : "<hr>"}
                        <span class="d-flex justify-content-between" onclick="${pel.slug + mapel.kelas}()">
                            <h3>${pel.nama} </h3>
                            <h3 class="checklist d-none" id="${pel.slug + mapel.kelas}">&check;</h3>
                          </span>`).join("")}
                      </div>`
                      
                        
                        
    wadah.appendChild(div)
    mapel.mapel.forEach(el => {
      const slug = el.slug + mapel.kelas
      if (getCookie(slug) === 'sudah') {
        const check = document.getElementById(slug)
        check.classList.remove('d-none')
      }
    });
    
  });
  


});

};

