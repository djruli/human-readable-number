module.exports = function toReadable (number) {
    let result = '';

    if (number === 0) {
            result = 'zero'
        return result;
    }

  if (number >= 100){

    let hundreeds = Math.trunc(number/100);

    if (hundreeds === 1) {
        result = result +'one hundred'
        number = number - 100;
    } else if (hundreeds === 2) {
        result = result +'two hundred'
        number = number - 200;
    } else if (hundreeds === 3) {
        result = result +'three hundred'
        number = number - 300;
    } else if (hundreeds === 4) {
        result = result +'four hundred' 
        number = number - 400;
    } else if (hundreeds === 5) {
        result = result +'five hundred'
        number = number - 500;
    } else if (hundreeds === 6) {
        result = result +'six hundred'
        number = number - 600;
    } else if (hundreeds === 7) {
        result = result +'seven hundred'
        number = number - 700;
    } else if (hundreeds === 8) {
        result = result +'eight hundred'
        number = number - 800;
    } else if (hundreeds === 9) {
        result = result +'nine hundred'
        number = number - 900;
    } 
    if (number === 0) {
        return result;
    } else {
        result = result + " "
    }
  }
    

  if (number === 1){
    result = result +'one'
    return result
  }else if (number === 2){
    result = result +'two'
    return result
  } else if (number === 3){
    result = result +'three'
    return result
  } else if (number === 4){
    result = result +'four'
    return result
  } else if (number === 5){
    result = result +'five'
    return result
  }  else if (number === 6){
    result = result +'six'
    return result
  }  else if (number === 7){
    result = result +'seven'
    return result
  }  else if (number === 8){
    result = result +'eight'
    return result
  }  else if (number === 9){
    result = result +'nine'
    return result
  }  else if (number === 10){
    result = result + 'ten'
    return result
  } else if (number === 11) {
    result = result +'eleven';
    return result
  } else if (number === 12){
    result = result +'twelve'
    return result
  } else if (number === 13){
    result = result +'thirteen'
    return result
  } else if (number === 14){
    result = result +'fourteen'
    return result
  } else if (number === 15){
    result = result +'fifteen'
    return result
  } else if (number === 16){
    result = result +'sixteen'
    return result
  } else if (number === 17){
    result = result +'seventeen'
    return result
  } else if (number === 18){
    result = result +'eighteen'
    return result
  } else if (number === 19){
    result = result +'nineteen'
    return result
  }

  if (number > 19) {
    let tenth = Math.trunc(number/10);
    if (tenth === 2) {
        result = result +'twenty'
        number = number - 20;
    } else if (tenth === 3) {
        result = result +'thirty'
        number = number - 30;
    } else if (tenth === 4) {
        result = result +'forty'
        number = number - 40;
    } else if (tenth === 5) {
        result = result +'fifty'
        number = number - 50;
    } else if (tenth === 6) {
        result = result +'sixty'
        number = number - 60;
    } else if (tenth === 7) {
        result = result +'seventy'
        number = number - 70;
    } else if (tenth === 8) {
        result = result +'eighty'
        number = number - 80;
    } else if (tenth === 9) {
        result = result +'ninety'
        number = number - 90;
    }

  } 
  if (number === 0) {
    return result;
    } else {
        result = result + " "
    }
    
    if (number === 1){
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
      }


    return result;
   
}
