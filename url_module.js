const url = require('url');

const myUrl = new URL('https://thatsongs.com/index.html?id=23&status=active');

//serialized url
console.log(myUrl.href)

//root domain
console.log(myUrl.host)

//domain
console.log(myUrl.hostname);

//pathname
console.log(myUrl.pathname);

//serialized quert 
console.log(myUrl.search);

//params obj
console.log(myUrl.searchParams);

//add params
myUrl.searchParams.append('keyDisplay','valueDisplay');
console.log(myUrl.searchParams);

//loop through shit
myUrl.searchParams.forEach( (value, key)=>{
    console.log(`${value} ${key}`)
});

