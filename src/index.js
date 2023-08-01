module.exports = function toReadable (number) {
    let result = '';
    if (number === 0) {
            result = 'zero'
        return result;
  } 
  if (number >= 100){
    let hundreeds = Math.trunc(number/100);
    if (hundreeds === 1) {
        result = result +'one hundreed '
        number = number - 100;
    } else if (hundreeds === 2) {
        result = result +'two hundreed '
        number = number - 200;
    } else if (hundreeds === 3) {
        result = result +'three hundreed '
        number = number - 300;
    } else if (hundreeds === 4) {
        result = result +'four hundreed ' 
        number = number - 400;
    } else if (hundreeds === 5) {
        result = result +'five hundreed '
        number = number - 500;
    } else if (hundreeds === 6) {
        result = result +'six hundreed '
        number = number - 600;
    } else if (hundreeds === 7) {
        result = result +'seven hundreed '
        number = number - 700;
    } else if (hundreeds === 8) {
        result = result +'eight hundreed '
        number = number - 800;
    } else if (hundreeds === 9) {
        result = result +'nine hundreed '
        number = number - 900;
    } 
  }
    if (number === 0) {
        return result;
  }

  if (number > 19) {

  } else if (number === 1){
    result = result +'one'
  }else if (number === 2){
    result = result +'two'
  } else if (number === 3){
    result = result +'three'
  } else if (number === 4){
    result = result +'four'
  } else if (number === 5){
    result = result +'five'
  }  else if (number === 6){
    result = result +'six'
  }  else if (number === 7){
    result = result +'seven'
  }  else if (number === 8){
    result = result +'eight'
  }  else if (number === 9){
    result = result +'nine'
  }  else if (number === 10){
    result = result + 'ten'
  } else if (number === 11) {
    result = result +'eleven';
  } else if (number === 12){
    result = result +'twelve'
  } else if (number === 13){
    result = result +'thirteen'
  } else if (number === 14){
    result = result +'fourteen'
  } else if (number === 15){
    result = result +'fifteen'
  } else if (number === 16){
    result = result +'sixteen'
  } else if (number === 17){
    result = result +'seventeen'
  } else if (number === 18){
    result = result +'eighteen'
  } else if (number === 19){
    result = result +'nineteen'
  }

  return result;
}
