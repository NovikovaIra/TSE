function openCity(evt, cityName) {
    // Объявить все переменные
    var i, tabcontent, tablinks;
  
    // Получить все элементы с помощью class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Получить все элементы с помощью class="tablinks" и удалить класс "active"
   tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Показать текущую вкладку и добавить класс "active" по ссылке, открывшей вкладку
    document.getElementById(cityName).style.display = "flex";
    evt.currentTarget.className += " active";
  }
// var swiper = new Swiper(".mySwiper", {});
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}