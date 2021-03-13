module.exports = function reverse (n) {
 if(n > 0) {
     let number = String(n);
     return +number.split('').reverse().join('');
 } else {
     let number = String(-n);
     return +number.split('').reverse().join('');

 }

}
