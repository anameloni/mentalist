function start() {
  var secretNumber = parseInt(Math.random() *10);
  console.log(secretNumber);

  var element = document.getElementById('result');
  var attempts = 3;

  while(attempts>0) {
    var shot = parseInt(prompt('Digite um número de 1 a 10: '));

    if(secretNumber == shot) {
      var backgroundRight = document.getElementById('bgImage');
      backgroundRight.style = `
      background-image: url("https://media.giphy.com/media/xTv6kG7GUXfj2/giphy.gif");
      width:100%;
    `;

      element.innerText = 'PARABÉNS!!! Você acertou!';
      element.style = `color: white`;
      break;
  
    } else if(shot > secretNumber) {
        var backgroundWrong = document.getElementById('bgImage');
        backgroundWrong.style = `
          background-image: url("https://i.pinimg.com/originals/d1/f5/1e/d1f51e302ffef0120950f855b846a5be.gif");
          background-position: center bottom;
        `;
    
        element.innerText = 'Eroooooou!! O número é menor';
        element.style = `color: white`;
    
        attempts--;
        XMLHttpRequestUpload();

      } else if (shot < secretNumber) {
          var backgroundWrong = document.getElementById('bgImage');
          backgroundWrong.style = `
            background-image: url("https://i.pinimg.com/originals/d1/f5/1e/d1f51e302ffef0120950f855b846a5be.gif");
            background-position: center bottom;
            background-size: auto;
            text-align:center;
          `;
      
          element.innerText = 'Eroooooou! O número é maior';
          element.style = `
            color: white;
            top:35%`;
      
          attempts--;
        }
  }
  if (shot != secretNumber) {
    element.innerText = 'Suas tentativas acabaram... O número era '+secretNumber  ;
  }
}