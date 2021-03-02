const generateButton = document.getElementById("submitbutton");
generateButton.addEventListener("click", function () {

  const voltagelen = document.getElementById("voltageInput1").value;
  const resistancelen = document.getElementById("resistanceInput1").value;
  const power = (voltagelen * voltagelen) / resistancelen;
  document.getElementById("output1").value = power;
})