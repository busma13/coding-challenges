/* Get Domain

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet


From: https://www.codewars.com/kata/514a024011ea4fb54200004b
*/

// Input a URL as a string. Never empty, always a valid URL. Always start with 'http'
//Returns just the domain name as a string. No TLD.

// function domainName(url) {
//     // Convert the url to an array - split by '/'
//     let arr = url.split('/')
//     //grab 2nd index
//     let str = arr[2]
//     //replace 'www.' with ''
//     str = str.replace('www.', '')
//     //split into array at '.' 
//     arr = str.split('.')
//     //return the string at the 0th index
//     return arr[arr.length - 2]
// }

const domainName = url => {
    let arr = url.split('/')[2].replace('www.', '').split('.')
    return arr[arr.length - 2]
}

console.log(domainName("http://github.com/carbonfive/raygun"), "github")
console.log(domainName("http://games.zombie-bites.com"), "zombie-bites")
console.log(domainName("https://www.cnet.com"), "cnet")