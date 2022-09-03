/*2325. Decode the Message

You are given the strings key and message, which represent a cipher key and a secret message, respectively. The steps to decode message are as follows:

Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
Align the substitution table with the regular English alphabet.
Each letter in message is then substituted using the table.
Spaces ' ' are transformed to themselves.
For example, given key = "happy boy" (actual key would have at least one instance of each letter in the alphabet), we have the partial substitution table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').
Return the decoded message.

 

Example 1:


Input: key = "the quick brown fox jumps over the lazy dog", message = "vkbs bs t suepuv"
Output: "this is a secret"
Explanation: The diagram above shows the substitution table.
It is obtained by taking the first appearance of each letter in "the quick brown fox jumps over the lazy dog".
Example 2:


Input: key = "eljuxhpwnyrdgtqkviszcfmabo", message = "zwx hnfx lqantp mnoeius ycgk vcnjrdb"
Output: "the five boxing wizards jump quickly"
Explanation: The diagram above shows the substitution table.
It is obtained by taking the first appearance of each letter in "eljuxhpwnyrdgtqkviszcfmabo".
 

Constraints:

26 <= key.length <= 2000
key consists of lowercase English letters and ' '.
key contains every letter in the English alphabet ('a' to 'z') at least once.
1 <= message.length <= 2000
message consists of lowercase English letters and ' '.
*/

/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
 var decodeMessage = function(key, message) {
    // Create variables for decode array and for new string
    let decodeArray = [];
    let output = '';
    // Loop through key until we reach 26 unique characters (while the length of the decode array is less than 26)
    for (let i = 0; decodeArray.length < 26; i++) {
      // if its a space, continue
      if(key[i] === " ") continue;
      // if the character already exists inside of the decode array, continue
      if(decodeArray.includes(key[i])) continue;
      // push the character to the end of the decode array
      decodeArray.push(key[i]);
    }
      
    // Loop through the message string
    for (let i = 0; i < message.length; i++) {
      // If its a space, concatenate a space
      if (message[i] === ' ') {
        output += ' ';
      } else {
        // if its a character, find the index that correlates with that character => convert it to ascii value with fromCharCode()
        output += String.fromCharCode(97 + decodeArray.indexOf(message[i]))   
      } 
    }
    // Return the decoded message
    return output;
  };

  console.log(decodeMessage("the quick brown fox jumps over the lazy dog", "vkbs bs t suepuv")); //this is a secret