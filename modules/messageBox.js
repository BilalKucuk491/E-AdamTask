const modalMessageBox = (messageText = "Enter Text") => {
  
  // modal message box

  var modalMessage = document.getElementById("modal-message");
  var messageElement = document.createElement("p");

  const modalTimeOut = () => {
    modalMessage.style.display = "none";
    modalMessage.removeChild(messageElement);
  };

  modalMessage.style.display = "block";
  messageElement.innerText = messageText.toUpperCase();
  modalMessage.appendChild(messageElement);

  myTimeout = setTimeout(modalTimeOut, 1000);
};
