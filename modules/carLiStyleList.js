const ShowList = (array) => {

  let list = document.getElementById("div");

  if (list.innerHTML!=="") {
  list.innerHTML="";
  }
  

  for (let i = 0; i < array.length; i++) {
    list.innerHTML += `
    <div class="car-content">
      <h4>${JSON.stringify(array[i].categories)}</h4>
      <li>BRAND: ${JSON.stringify(array[i].brand)}</li>
      <li>SERIES: ${JSON.stringify(array[i].series)}</li>
      <li>YEAR: ${JSON.stringify(array[i].year)}</li>
      <li>COLOR: ${JSON.stringify(array[i].color)}</li>
      <li>KM: ${JSON.stringify(array[i].km)}</li>
      <li>ENGINE CAPACITY: ${JSON.stringify(array[i].engineCapacity)}></li>
      <li>PLATE: ${JSON.stringify(array[i].plate)}</li>
      <br/>
      <button id="btnRemoveCar" class="btnRemoveCar">Sell Car</button>
      </div>
      <br/>
    `;
  }
  document.getElementById("cont").appendChild(list);
};
