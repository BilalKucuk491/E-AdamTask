const Modal = ()=>{

    // modal acma
    var modal = document.getElementById("simpleModal");
    var modalBtn = document.getElementById("btnAddNewCar");

    var closeBtn = document.getElementsByClassName("closeBtn")[0];

    modalBtn.addEventListener("click", openModal);
    closeBtn.addEventListener("click", closeModal);


    function openModal() {
      modal.style.display = "block";
    }
    function closeModal() {
      ReLoadCarList();
      modal.style.display = "none";
    }

}