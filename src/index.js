module.exports = function toReadable (number) {
    let result = '';
  if (number >= 100){

  } else if (number > 19) {

  } else if (number === 0) {
            result = 'zero'
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
