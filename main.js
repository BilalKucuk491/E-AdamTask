let carDataUrl = "http://localhost:8001/getCars";
let categories = [
  "brand",
  "series",
  "year",
  "color",
  "km",
  "engine Capacity",
  "plate",
];

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var obj = this.response;
    var obj1 = JSON.parse(obj);

    data = obj1;
    // araba markasina gore alfabetik siralandi
    let showArray = obj1.sort(function (a, b) {
      return a.brand.localeCompare(b.brand);
    });

    ShowList(showArray);

    // -------------------------------------------------------------
    //--------------------------------------------------------------

    // Filtreleme

    SelectBoxFilter(obj1);

    // -------------------------------------------------------------
    //--------------------------------------------------------------

    //Araclarin sorgulalanma isleminin gerceklestigi yer 

    CarRegisterNavBar(categories);

    // -------------------------------------------------------------
    //--------------------------------------------------------------

    // modal acma - kapatma
    Modal();

     // -------------------------------------------------------------
    //--------------------------------------------------------------

    // modala arac ekleme

    ModalCarRegister(obj1);

    // -------------------------------------------------------------
    //--------------------------------------------------------------

    // remove car
    DeleteCar(obj1);

    // -------------------------------------------------------------
    //--------------------------------------------------------------
  }
};
xhttp.open("GET", carDataUrl, true);
xhttp.send();



