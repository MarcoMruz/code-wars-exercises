"use strict";

// 1. find similarities between common URL
// 2. get name of website from URL
// 3. return name

function domainName(url) {
  url = url.replace("http://", "").replace("www.", "").replace("https://", "");

  let arr = url.split(".");

  return arr[0];
}

console.log(domainName("http://google.com"));
console.log(domainName("http://www.google.co.jp"));
domainName("www.xakep.ru");
domainName("http://github.com/carbonfive/raygun");
