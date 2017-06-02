function StrToInt(str)
{
    // write code here
    if (str.length <= 0) {
      return 0;
    }
    var strarr = str.split('');
    var signum = 1;
    var curr = 0;
    var num = 0;
    if (strarr[curr] === '+') {
      signum = 1;
      curr++;
    } else if (strarr[curr] === '-') {
      signum = -1;
      curr++;
    }
    for (; curr < strarr.length; curr++) {
      switch (strarr[curr]) {
        case '0':
          num = num * 10;
          break;
        case '1':
          num = num * 10 + 1;
          break;
        case '2':
          num = num * 10 + 2;
          break;
        case '3':
          num = num * 10 + 3;
          break;
        case '4':
          num = num * 10 + 4;
          break;
        case '5':
          num = num * 10 + 5;
          break;
        case '6':
          num = num * 10 + 6;
          break;
        case '7':
          num = num * 10 + 7;
          break;
        case '8':
          num = num * 10 + 8;
          break;
        case '9':
          num = num * 10 + 9;
          break;
        default:
          return 0;
      }
    }
    return signum * num;
}

console.log(StrToInt('123'));