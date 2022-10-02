const ModalCarRegister = (obj1) => {
  // modal butonu

  var btnModalAddCar = document.getElementById("btnModalAddCar");
  var btnModalClearAll = document.getElementById("btnModalClearAll");

  // modala yeni arac ekleme

  const btnModalAddCarHandler = (e) => {
    e.preventDefault();

    var brandInput = document.getElementById("brandInput");
    var select = document.getElementById("carModalCategories");
    var selectValue = select.options[select.selectedIndex].value;

    var seriesInput = document.getElementById("seriesInput");
    var yearInput = document.getElementById("yearInput");
    var colorInput = document.getElementById("colorInput");
    var kmInput = document.getElementById("kmInput");
    var engineCapacityInput = document.getElementById("engine capacityInput");
    var plateInput = document.getElementById("plateInput");

    let plateInputValue = plateInput.value;
    let plateInputValueSplit = plateInputValue.replace(/ /g, "").split("");
    let isPlateInputValueLength = plateInputValueSplit.length;
    let firstTwoLetters =
      parseInt(plateInputValueSplit[0] + plateInputValueSplit[1]) >= 01 &&
      parseInt(plateInputValueSplit[0] + plateInputValueSplit[1]) <= 81;

    const isPlate = () => {

      // -------------------------------------------------------------
    //--------------------------------------------------------------

      // Plakanın önceden kayit edilip edilmediği
      // plaka uzunlugunun 7-8 arasinda olmasi gerektigini
      // ilk 2 basamaginin 01-81 arasinda olmak zorunda oldugunu 
      // plaka harfleri ortada bulunması gerektigini 2-3 basamakli olması geretigi
      // plaka harfleri  a1b 1eb a11 32g gf2 seklinde yazilamacagini
      // son basamaklarin sayi olup olmadigi kontrol edildi.

      const findPlate = obj1.find(
        (obj) =>
          obj.plate.replace(/ /g, "").toLowerCase() ==
          plateInputValue.replace(/ /g, "").toLowerCase()
      );

      var isPlateFound = findPlate === undefined ? true : false;

      if (
        (isPlateInputValueLength === 7 || isPlateInputValueLength === 8) &&
        firstTwoLetters &&
        isPlateFound
      ) {
        var isNumberCondition1 =
          parseInt(
            plateInputValueSplit[2] +
              plateInputValueSplit[3] +
              plateInputValueSplit[4]
          ) >= 0;
        var isNumberCondition2 =
          parseInt(plateInputValueSplit[2] + plateInputValueSplit[3]) >= 0;

        if (!isNumberCondition1) {
          var index = 0;
          const deneme = [...plateInputValueSplit.splice(5)];
          for (let i = 0; i < deneme.length; i++) {
            index += parseInt(deneme[i]);
          }
          if (index >= 0) {
            return true;
          }
        } else if (!isNumberCondition2) {
          var index = 0;
          const deneme = [...plateInputValueSplit.splice(4)];
          for (let i = 0; i < deneme.length; i++) {
            index += parseInt(deneme[i]);
          }
          if (index >= 0) {
            return true;
          }
        }
      }
    };


    //  yil, km , enginecapacity bos olup olmadigi ve sayi grilip girilmedigi kontrol edildi.
    // brand , series , color bos olup olmadigi ve string bir deger oldugu kontrol edildi.
    // Plaka ve diger kosullar saglandiginda number tipinde olanı number string tipinde olanı string olarak gonderiyoruz. 
    // Veri gonderildiginde  { status: "success" } seklinde yazdirildi.
    // Hata ile karsilasildiginda messagebox ile bize uyari yollar.

    if (
      [yearInput, kmInput, engineCapacityInput].every(
        (el) => el.value !== "" && parseInt(el.value) >= 0
      ) &&
      [brandInput, seriesInput, colorInput].every((el) => el.value !== "") &&
      isPlate()
    ) {
      let carSaveUrl = "http://localhost:8001/saveCar";
      var xhr = new XMLHttpRequest();
      xhr.open("POST", carSaveUrl, true);
      xhr.setRequestHeader("Content-Type", "application/json");

      xhr.upload.onload = () => {
        console.log(JSON.stringify({ status: "success" }));
      };

      //Veriyi gonderdigimiz kisim

      xhr.send(
        JSON.stringify({
          categories: selectValue.toUpperCase(),
          brand: brandInput.value,
          series: seriesInput.value,
          year: parseInt(yearInput.value),
          color: colorInput.value,
          km: parseInt(kmInput.value),
          engineCapacity: parseInt(engineCapacityInput.value),
          plate: plateInput.value,
        })
      );

      modalMessageBox("New Car Added");
      ClearAllInputs();
    } else {
      modalMessageBox("Error,data not entered properly");
    }
  };

  btnModalAddCar.addEventListener("click", btnModalAddCarHandler);

   // -------------------------------------------------------------
    //--------------------------------------------------------------

  // Modaldeki degerleri gonderilme ya da all clear butonuna basildiginda input icindeki her degeri temizliyoruz.

  const ClearAllInputs = () => {
    for (let t = 0; t < categories.length; t++) {
      var modalInputName = categories[t].toLowerCase() + "Input";
      var modalInput = document.getElementById(modalInputName.toString());
      modalInput.value = "";
    }
  };

  const btnModalClearAllHandler = (e) => {
    e.preventDefault();
    ClearAllInputs();
  };
  btnModalClearAll.addEventListener("click", btnModalClearAllHandler);

   // -------------------------------------------------------------
    //--------------------------------------------------------------
};
