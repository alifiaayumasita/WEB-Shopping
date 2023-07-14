const menu = document.querySelector(".menu");
const navOpen = document.querySelector(".hamburger");
const navClose = document.querySelector(".close");

const navLeft = menu.getBoundingClientRect().left;
navOpen.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.add("show");
    document.body.classList.add("show");
    navBar.classList.add("show");
  }
});

navClose.addEventListener("click", () => {
  if (navLeft < 0) {
    menu.classList.remove("show");
    document.body.classList.remove("show");
    navBar.classList.remove("show");
  }
});

// Fixed Nav
const navBar = document.querySelector(".nav");
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
  } else {
    navBar.classList.remove("fix-nav");
  }
});

// Scroll To
const links = [...document.querySelectorAll(".scroll-link")];
links.map(link => {
  if (!link) return;
  link.addEventListener("click", e => {
    e.preventDefault();

    const id = e.target.getAttribute("href").slice(1);

    const element = document.getElementById(id);
    const fixNav = navBar.classList.contains("fix-nav");
    let position = element.offsetTop - navHeight;

    window.scrollTo({
      top: position,
      left: 0,
    });

    navBar.classList.remove("show");
    menu.classList.remove("show");
    document.body.classList.remove("show");
  });
});

gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".hamburger", { opacity: 0, duration: 1, delay: 1, x: 20 });
gsap.from(".BA-img", { opacity: 0, duration: 1, delay: 1, x: -200 });
gsap.from(".BA-content h2", { opacity: 0, duration: 1, delay: 1, y: -50 });
gsap.from(".BA-content h1", { opacity: 0, duration: 1, delay: 1, y: -45 });
gsap.from(".BA-content a", { opacity: 0, duration: 1, delay: 1, y: 50 });
    
    var totBarang = 0;
    var totBarang2 = 0;
    var totBarang3 = 0;
    var totBarang4 = 0;
    var totBarang5 = 0;
    var totBarang6 = 0;
    var totBarang7 = 0;
    var totBarang8 = 0;
  
      //hitung list
      function list1(){
          if (document.form1.namaBarang.value==0){
              document.form1.jumBarang.value = null;
              document.form1.totBarang.value = null;
              document.form1.hargaBarang.value = null;
              totBarang=0;
          } else if (document.form1.jumBarang.value > 0){
              var hargabarang = document.form1.namaBarang.value;
              document.form1.hargaBarang.value = hargabarang;
  
              var jumBarang = document.form1.jumBarang.value;
              document.form1.totBarang.value = document.form1.namaBarang.value * jumBarang;
              totBarang = document.form1.totBarang.value;
          } else {
              var hargabarang = document.form1.namaBarang.value;
              document.form1.hargaBarang.value = hargabarang;
          }
          hargatotalbarang();
      }
    
    function hargabarang1(){
          if (document.form1.namaBarang.value==0){
              document.form1.jumBarang.value = null;
              document.form1.totBarang.value = null;
              totBarang = 0;
          } else {
              var jumBarang = document.form1.jumBarang.value;
              document.form1.totBarang.value = document.form1.namaBarang.value * jumBarang;
              totBarang = document.form1.totBarang.value;
          }
          hargatotalbarang();
      }
    
    //hitung list baris 2
      function list2(){
          if (document.form1.namaBarang2.value==0){
              document.form1.jumBarang2.value = null;
              document.form1.totBarang2.value = null;
              document.form1.hargaBarang2.value = null;
              totBarang2=0;
          } else if (document.form1.jumBarang2.value > 0){
              var hargabarang2 = document.form1.namaBarang2.value;
              document.form1.hargaBarang2.value = hargabarang2;
  
              var jumBarang2 = document.form1.jumBarang2.value;
              document.form1.totBarang2.value = document.form1.namaBarang2.value * jumBarang2;
              totBarang2 = document.form1.totBarang2.value;
          } else {
              var hargabarang2 = document.form1.namaBarang2.value;
              document.form1.hargaBarang2.value = hargabarang2;
          }
          hargatotalbarang();
      }
    
    function hargabarang2(){
          if (document.form1.namaBarang2.value==0){
              document.form1.jumBarang2.value = null;
              document.form1.totBarang2.value = null;
              totBarang2 = 0;
          } else {
              var jumBarang2 = document.form1.jumBarang2.value;
              document.form1.totBarang2.value = document.form1.namaBarang2.value * jumBarang2;
              totBarang2 = document.form1.totBarang2.value;
          }
          hargatotalbarang();
      }
  
    //hitung list baris 3
      function list3(){
          if (document.form1.namaBarang3.value==0){
              document.form1.jumBarang3.value = null;
              document.form1.totBarang3.value = null;
              document.form1.hargaBarang3.value = null;
              totBarang3=0;
          } else if (document.form1.jumBarang3.value > 0){
              var hargabarang3 = document.form1.namaBarang3.value;
              document.form1.hargaBarang3.value = hargabarang3;
  
              var jumBarang3 = document.form1.jumBarang3.value;
              document.form1.totBarang3.value = document.form1.namaBarang3.value * jumBarang3;
              totBarang3 = document.form1.totBarang3.value;
          } else {
              var hargabarang3 = document.form1.namaBarang3.value;
              document.form1.hargaBarang3.value = hargabarang3;
          }
          hargatotalbarang();
      }
    
    function hargabarang3(){
          if (document.form1.namaBarang3.value==0){
              document.form1.jumBarang3.value = null;
              document.form1.totBarang3.value = null;
              totBarang3 = 0;
          } else {
              var jumBarang3 = document.form1.jumBarang3.value;
              document.form1.totBarang3.value = document.form1.namaBarang3.value * jumBarang3;
              totBarang3 = document.form1.totBarang3.value;
          }
          hargatotalbarang();
      }
  
    //hitung list baris 4
      function list4(){
          if (document.form1.namaBarang4.value==0){
              document.form1.jumBarang4.value = null;
              document.form1.totBarang4.value = null;
              document.form1.hargaBarang4.value = null;
              totBarang2=0;
          } else if (document.form1.jumBarang4.value > 0){
              var hargabarang4 = document.form1.namaBarang4.value;
              document.form1.hargaBarang4.value = hargabarang4;
  
              var jumBarang4 = document.form1.jumBarang4.value;
              document.form1.totBarang4.value = document.form1.namaBarang4.value * jumBarang4;
              totBarang4 = document.form1.totBarang4.value;
          } else {
              var hargabarang4 = document.form1.namaBarang4.value;
              document.form1.hargaBarang4.value = hargabarang4;
          }
          hargatotalbarang();
      }
    
    function hargabarang4(){
          if (document.form1.namaBarang4.value==0){
              document.form1.jumBarang4.value = null;
              document.form1.totBarang4.value = null;
              totBarang4 = 0;
          } else {
              var jumBarang4 = document.form1.jumBarang4.value;
              document.form1.totBarang4.value = document.form1.namaBarang4.value * jumBarang4;
              totBarang4 = document.form1.totBarang4.value;
          }
          hargatotalbarang();
      }
  
    //hitung list baris 5
      function list5(){
          if (document.form1.namaBarang5.value==0){
              document.form1.jumBarang5.value = null;
              document.form1.totBarang5.value = null;
              document.form1.hargaBarang5.value = null;
              totBarang5=0;
          } else if (document.form1.jumBarang5.value > 0){
              var hargabarang5 = document.form1.namaBarang5.value;
              document.form1.hargaBarang5.value = hargabarang5;
  
              var jumBarang5 = document.form1.jumBarang5.value;
              document.form1.totBarang5.value = document.form1.namaBarang5.value * jumBarang5;
              totBarang5 = document.form1.totBarang5.value;
          } else {
              var hargabarang5 = document.form1.namaBarang5.value;
              document.form1.hargaBarang5.value = hargabarang5;
          }
          hargatotalbarang();
      }
    
    function hargabarang5(){
          if (document.form1.namaBarang5.value==0){
              document.form1.jumBarang5.value = null;
              document.form1.totBarang5.value = null;
              totBarang5 = 0;
          } else {
              var jumBarang5 = document.form1.jumBarang5.value;
              document.form1.totBarang5.value = document.form1.namaBarang5.value * jumBarang5;
              totBarang5 = document.form1.totBarang5.value;
          }
          hargatotalbarang();
      }
  
    //hitung list baris 6
      function list6(){
          if (document.form1.namaBarang6.value==0){
              document.form1.jumBarang6.value = null;
              document.form1.totBarang6.value = null;
              document.form1.hargaBarang6.value = null;
              totBarang6=0;
          } else if (document.form1.jumBarang6.value > 0){
              var hargabarang6 = document.form1.namaBarang6.value;
              document.form1.hargaBarang6.value = hargabarang6;
  
              var jumBarang6 = document.form1.jumBarang6.value;
              document.form1.totBarang6.value = document.form1.namaBarang6.value * jumBarang6;
              totBarang6 = document.form1.totBarang6.value;
          } else {
              var hargabarang6 = document.form1.namaBarang6.value;
              document.form1.hargaBarang6.value = hargabarang6;
          }
          hargatotalbarang();
      }
    
    function hargabarang6(){
          if (document.form1.namaBarang6.value==0){
              document.form1.jumBarang6.value = null;
              document.form1.totBarang6.value = null;
              totBarang6 = 0;
          } else {
              var jumBarang6 = document.form1.jumBarang6.value;
              document.form1.totBarang6.value = document.form1.namaBarang6.value * jumBarang6;
              totBarang6 = document.form1.totBarang6.value;
          }
          hargatotalbarang();
      }
  
    //hitung list baris 7
      function list7(){
          if (document.form1.namaBarang7.value==0){
              document.form1.jumBarang7.value = null;
              document.form1.totBarang7.value = null;
              document.form1.hargaBarang7.value = null;
              totBarang7=0;
          } else if (document.form1.jumBarang7.value > 0){
              var hargabarang7 = document.form1.namaBarang7.value;
              document.form1.hargaBarang7.value = hargabarang7;
  
              var jumBarang7 = document.form1.jumBarang7.value;
              document.form1.totBarang7.value = document.form1.namaBarang7.value * jumBarang2;
              totBarang7 = document.form1.totBarang7.value;
          } else {
              var hargabarang7 = document.form1.namaBarang7.value;
              document.form1.hargaBarang7.value = hargabarang7;
          }
          hargatotalbarang();
      }
    
    function hargabarang7(){
          if (document.form1.namaBarang7.value==0){
              document.form1.jumBarang7.value = null;
              document.form1.totBarang7.value = null;
              totBarang7 = 0;
          } else {
              var jumBarang7 = document.form1.jumBarang7.value;
              document.form1.totBarang7.value = document.form1.namaBarang7.value * jumBarang7;
              totBarang7 = document.form1.totBarang7.value;
          }
          hargatotalbarang();
      }
  
    //hitung list baris 8
      function list8(){
          if (document.form1.namaBarang8.value==0){
              document.form1.jumBarang8.value = null;
              document.form1.totBarang8.value = null;
              document.form1.hargaBarang8.value = null;
              totBarang8=0;
          } else if (document.form1.jumBarang8.value > 0){
              var hargabarang8 = document.form1.namaBarang8.value;
              document.form1.hargaBarang8.value = hargabarang8;
  
              var jumBarang8 = document.form1.jumBarang8.value;
              document.form1.totBarang8.value = document.form1.namaBarang8.value * jumBarang8;
              totBarang8 = document.form1.totBarang8.value;
          } else {
              var hargabarang8 = document.form1.namaBarang8.value;
              document.form1.hargaBarang8.value = hargabarang8;
          }
          hargatotalbarang();
      }
    
    function hargabarang8(){
          if (document.form1.namaBarang8.value==0){
              document.form1.jumBarang8.value = null;
              document.form1.totBarang8.value = null;
              totBarang8 = 0;
          } else {
              var jumBarang8 = document.form1.jumBarang8.value;
              document.form1.totBarang8.value = document.form1.namaBarang8.value * jumBarang8;
              totBarang8 = document.form1.totBarang8.value;
          }
          hargatotalbarang();
      }
  
    function hargatotalbarang(){
          document.form1.totaltab1.value = parseInt(totBarang)+parseInt(totBarang2)+parseInt(totBarang3)+parseInt(totBarang4)+parseInt(totBarang5)+parseInt(totBarang6)+parseInt(totBarang7)+parseInt(totBarang8);
      }
    
    function pengiriman(){
          if (document.form1.ekspedisi.value == 0){
              document.form1.hargaOngkir.value = null;
              document.form1.beratOngkir.value = null;
              document.form1.totOngkir.value = null;
          } else {
        var hargaOngkir = document.form1.ekspedisi.value;
              document.form1.hargaOngkir.value = hargaOngkir;
        
        var beratOngkir = document.form1.beratOngkir.value;
              document.form1.totOngkir.value = document.form1.ekspedisi.value * beratOngkir;
              totOngkir = document.form1.totOngkir.value;
          } 
      }
    
    function pembayaranadmin(){
          if (document.form1.pembayaran.value == 0){
              document.form1.biayaAdmin.value = null;
          } else {
        var biayaAdmin = document.form1.pembayaran.value;
              document.form1.biayaAdmin.value = biayaAdmin;
      }
      totPembayaran();
    }
    
    function totPembayaran(){
      var totalbarang = document.form1.totaltab1.value;
      var totOngkir = document.form1.totOngkir.value;
      var biayaAdmin = document.form1.biayaAdmin.value;
      
          document.form1.totPembayaran.value = parseInt(totalbarang) + parseInt(totOngkir) + parseInt(biayaAdmin);
      }
    
    function barcode() {

        var popup = document.getElementById('popup');
        popup.classList.toggle('active');
        // var popup = document.getElementById('popup');
        // popup.classList.toggle('notactive');  
        var Image_Id = document.getElementById('getImage');
        
        
              if (document.form1.pembayaran.value == "1000") {
                  Image_Id.src = "./images/ATM.jpg";
              }
        else if (document.form1.pembayaran.value == "1500"){
          Image_Id.src = "./images/Alfa.jpg";
          
        }
        else if (document.form1.pembayaran.value == "3000"){
          Image_Id.src = "./images/KartuKredit.jpg";
        }
        else if (document.form1.pembayaran.value == "2000"){
          Image_Id.src = "./images/COD.jpg";
        }
              else {
                  Image_Id.src = "";
              }
      }  

      function popup() {
        var popup = document.getElementById('popup');
        popup.classList.toggle('active');
      }

      function info() {
        var infoberat = document.getElementById('infoberat');
        infoberat.classList.toggle('active');
      }