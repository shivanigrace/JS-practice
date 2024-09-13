//Numeric conversion//

let str= "123";
let num = Number(str);
// console.log(typeof num);// number
// console.log(num);//123

// str="Shivani";
// num = Number(str);
// console.log(typeof num);// number
// console.log(num);//NaN

// str=undefined;
// num = Number(str);
// console.log(typeof num);// number
// console.log(num);//NaN

// str=null;
// num = Number(str);
// console.log(typeof num);// number
// console.log(num);//0

// str=true;
// num = Number(str);
// console.log(typeof num);// number
// console.log(num);//1

// str=false;
// num = Number(str);
// console.log(typeof num);// number
// console.log(num);//0

// str="";
// num = Number(str);
// console.log(typeof num);// number
// console.log(num);//0

// str=" ";
// num = Number(str);
// console.log(typeof num);// number
// console.log(num);//0

// str="33abc";
// num = Number(str);
// console.log(typeof num);// number
// console.log(num);//NaN(error reading a number at "abc")


//******************************************//
// Boolean Conversion//
let str1=0;
let bool=Boolean(str1);
// console.log(typeof bool);//boolean
// console.log(bool);//false

// str1=1;
// bool=Boolean(str1);
// console.log(typeof bool);//boolean
// console.log(bool);//true

// str1="";
// bool=Boolean(str1);
// console.log(typeof bool);//boolean
// console.log(bool);//false

// str1=" ";
// bool=Boolean(str1);
// console.log(typeof bool);//boolean
// console.log(bool);//true

// str1="Shivani";
// bool=Boolean(str1);
// console.log(typeof bool);//boolean
// console.log(bool);//true

// str1=null;
// bool=Boolean(str1);
// console.log(typeof bool);//boolean
// console.log(bool);//false

// str1=undefined;
// bool=Boolean(str1);
// console.log(typeof bool);//boolean
// console.log(bool);//false

// str1=NaN;
// bool=Boolean(str1);
// console.log(typeof bool);//boolean
// console.log(bool);//false

str1="0";
bool=Boolean(str1);
console.log(typeof bool);//boolean
console.log(bool);//true