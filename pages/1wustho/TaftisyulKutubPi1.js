const TaftisyulKutubPi1 = () => {
    const app = document.getElementById('app');
    app.innerHTML = `<div class="kelas px-4" data-aos="fade">
    <h1 class="mb-5">- TAFTISYUL KUTUB -</h1>
    <form action="" method="post" id="form" name="form-nilai">
      <input type="hidden" name="mapel" value="Taftisyul Kutub Pi">
      <table class="table table-striped mb-4">
        <thead>
          <tr>
            <th scope="col" class="no">#</th>
            <th scope="col">Nama</th>
            <th scope="col" class="nilai">Nilai</th>
          </tr>
        </thead>
        <tbody id="baris">
          
        </tbody>
      </table>
      <div class="d-flex justify-content-between">
        <button onclick="kelas1()" class="btn btn-outline-secondary btn-mapel">KEMBALI</button>
        <div class="pisah"></div>
        <button type="submit" class="btn btn-outline-success btn-mapel" id="kirim">KIRIM</button>
      </div>
    </form>
  </div>
`;

// Get Data
  $.ajax({
    url : 'assets/data.json',
    dataType: 'json',
  }).done( data => {
    const kelas1 = data.filter(el => el.kelas == '1' && el.gender === 'p')
    var i = 1
    kelas1.forEach(santri => {
      const baris = document.getElementById('baris');
      const tr = document.createElement('tr')
      tr.innerHTML = `<th scope="row">${i}</th>
              <td><label for="${santri.slug}">${santri.nama}</label></td>
              <td class="nilai">
                      <div class="input-group">
                              <input type="number" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" name="${santri.nama}" id="${santri.slug}" max="100" autocomplete="off">
                            </div>
              </td>`
              i++
      baris.appendChild(tr)
    });
  });
  
  // Post Data
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxQ1akl-sbUWQWMtLf9YFJda4x-XbMUr-Xlp3Ve8NrzXQ6ByJqwqrDd7Thg1MT2-PeZ7A/exec'
  const form = document.forms['form-nilai']

  form.addEventListener('submit', e => {
    e.preventDefault();
    Swal.fire({
      title: 'Nilai akan disimpan. Lanjutkan?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Simpan',
      denyButtonText: `Jangan Simpan`,
      cancelButtonText : 'Batal',
      icon : 'question'
    }).then((result) => {
      if (result.isConfirmed) {
        $('#kirim').html(`<div class="spinner-border spinner-border-sm" role="status">
        <span class="visually-hidden">Loading...</span>
      </div> TUNGGU SEBENTAR ...`)
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {
            Swal.fire('Nilai anda berhasil disimpan!', '', 'success')
            $('#kirim').html('KIRIM')
            console.log('Success!', response)
            setCookie('TaftisyulKutubPi1', 'sudah', 20)
            kelas1()
          })
          .catch(error => {
            Swal.fire({
              icon: 'error',
              title: 'Mohon maaf..',
              text: 'Ada kesalahan sistem',
              footer: '<a href="https://wa.me/6281358134816" class="text-decoration-none">Hubungi operator?</a>'
            })
            $('#kirim').html('KIRIM')
            console.error('Error!', error.message)
          })
        
      } else if (result.isDenied) {
        Swal.fire('Nilai tidak tersimpan!', '', 'info')
      }
    })
    



    
  })
}