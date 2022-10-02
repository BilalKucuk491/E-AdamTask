
const ReLoadCarList = () => {

  let carDataUrl = "http://localhost:8001/getCars";

  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var obj = this.response;
      var obj1 = JSON.parse(obj);

      // araba markasina gore alfabetik siralandi
      let showArray = obj1.sort(function (a, b) {
        return a.brand.localeCompare(b.brand);
      });

      ShowList(showArray);
      console.log(showArray);
    }
  };

  xhttp.open("GET", carDataUrl, true);
  xhttp.send();
};
