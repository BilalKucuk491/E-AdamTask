const CarRegisterNavBar = (categories = []) => {

  var btnAddNewCar = document.getElementById("btnAddNewCar");
  const btnAddNewCarHandler = (e) => {
    e.preventDefault();

    let modalContent = document.getElementById("modal-content");
    modalContent.innerHTML = "";

    modalContent.innerHTML += `

      <select name="cars" class="modalSelect" id="carModalCategories">
      <option value="sedan">SEDAN</option>
      <option value="hatchback">HATCHBACK</option>
      <option value="station">STATION</option>
      <option value="cabrio">CABRIO</option>
      <option value="suv">SUV</option>
      </select>

      `;

    for (let i = 0; i < categories.length; i++) {
      let obj = categories[i];
      modalContent.innerHTML += `
        <table>
          <thead>
          <tr>
            <th><div>${obj.toUpperCase()}</div></th>
          </tr>
          <tr>
            <th><input class="objInput" id="${obj.toLowerCase()}Input" type="text"></th>
          </tr>
        </table>
        `;
    }
    document.getElementById("modal-body").appendChild(modalContent);
  };

  btnAddNewCar.addEventListener("click", btnAddNewCarHandler);
};
