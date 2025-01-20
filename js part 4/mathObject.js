/**
 * Math Object
 * 
 * -------properties-------
 * MAth.PI
 * Math.E
 * 
 * -------Methods---------
 * abs(n);
 * math.pow(a,b);
 * Math.floor(n);
 * math.ceil(n);
 * math.random();
 * 
 */

/**
 * Random Integers
 * 
 * from 1 to 10
 * 
 * strp 1: let num = Meth.random();
 * 
 * strp 2: num = num*10;
 * 
 * step 3: num = math.floor(num);
 * step 4: num  = num +1;
 */

let num = Math.random();
num = num*100;
num = Math.floor(num);
num = num+1;
console.log(num);