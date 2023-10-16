document.getElementById("checkCarrier").addEventListener("click", function () {
    const mtn = document.getElementById("mtn");
    const glo = document.getElementById("glo");
    const airtel = document.getElementById("airtel");
    const mobile = document.getElementById("9mobile");
    const phoneInput = document.getElementById("phoneInput").value;
    const resultElement = document.getElementById("result");
    const carrier = detectCarrier(phoneInput);
    if (carrier) {
      resultElement.innerHTML = `Carrier: ${carrier}`;
    } else {
      resultElement.innerHTML = "Unable to detect carrier.";
    }
  });
  
  function detectCarrier(phoneNumber) {
    // Regular expressions to match carrier patterns
    const mtnPattern =
      /^(\+234|0)(0702|0704|0803|0806|0703|0706|0813|0816|0810|0814|0903|0906|0913|0810)/;
    const gloPattern =
      /^(\+234|0)(0805|0807|0705|0815|0811|0905)/;
    const airtelPattern =
      /^(\+234|0)(0802|0808|0708|0812|0701|0901|0902|0907|0912)/;
    const etisalatPattern = /^(\+234|0)(808|809|909|807|817|908|817|908|909|807)/;
  
    if (mtnPattern.test(phoneNumber)) {
      mtn.style.display = "block";
      return "MTN";
    } else if (gloPattern.test(phoneNumber)) {
      glo.style.display = "block";
      return "Glo";
    } else if (airtelPattern.test(phoneNumber)) {
      airtel.style.display = "block";
      return "Airtel";
    } else if (etisalatPattern.test(phoneNumber)) {
      mobile.style.display = "block";
      return "9mobile";
    } else {
      return "Unknown";
    }
  }
  