// Filtreleme

const SelectBoxFilter = (obj1) => {
  var carInput = document.getElementById("carInput");
  var btnSortBy = document.getElementById("btnSortBy");
  var select = document.getElementById("carCategories");

  let maxBrandLenght = Math.max(...obj1.map((el) => el.brand.length));

  const sortByHandler = (e) => {
    e.preventDefault();

    var selectValue = select.options[select.selectedIndex].value;

    if (carInput.value !== "" && carInput.value.length <= maxBrandLenght) {
      const sortedArray = obj1.filter(
        (obj) => obj.brand.toUpperCase() == carInput.value.toUpperCase()
      );
      ShowList(sortedArray);
    } else if (
      carInput.value !== "" &&
      carInput.value.length >= maxBrandLenght
    ) {
      const sortedArray = obj1.filter(
        (obj) =>
          (obj.brand + " " + obj.plate).toUpperCase() ==
          carInput.value.toUpperCase()
      );
      ShowList(sortedArray);
    } else if (carInput.value === "") {
      const sortedArray = obj1.filter(
        (obj) => obj.categories.toUpperCase() == selectValue.toUpperCase()
      );
      ShowList(sortedArray);
    } else {
      const sortedArray = obj1.filter(
        (obj) =>
          obj.categories.toUpperCase() == selectValue.toUpperCase() &&
          obj.brand.toUpperCase() == carInput.value.toUpperCase()
      );
      ShowList(sortedArray);
    }

    selectValue = 0;
    carInput.value = "";
  };

  btnSortBy.addEventListener("click", sortByHandler);
};
