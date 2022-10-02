const DeleteCar = (obj1) => {
  let sellCarUrl = "http://localhost:8001/sellCar";

  function deletePost(array,plate) {
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
      if (xhr.status === 200) {
        console.table(this.response);
        // deletion operations will on this line 
      } else {
        console.log("Error, You cannot delete the post");
      }
    };

    xhr.open("DELETE", sellCarUrl);
    xhr.send();
  }

  var btnRemoveCar = document.getElementById("btnRemoveCar");

  const btnRemoveCarHandler = () => {
    myArray = obj1.filter((obj) => {
      return obj.plate !== plate;
    });
    deletePost(obj1);
  };

  btnRemoveCar.addEventListener("click", btnRemoveCarHandler);
};
