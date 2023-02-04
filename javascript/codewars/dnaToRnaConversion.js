/* DNA to RNA conversion

Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"

The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

PREP
Paramters: a string of arbitrary length. It can be an empty string. All imput valid ('G', 'C', 'A' and/or 'T').
Returns: a string representing RNA. All 'T' characters are replaced with 'U'.
Examples: DNAtoRNA('GCAT'); //GCAU
Pseudo code: Call replaceAll function on argument string.
             If character is a 'T' replace with a 'U'.
             Return the string.
*/

function DNAtoRNA(dna){
    return dna.replaceAll('T', 'U');
    //regex return dna.replace(/T/g, 'U');
}

console.log(DNAtoRNA('GCAT'));// GCAU
console.log(DNAtoRNA(''));// ''
console.log(DNAtoRNA('ACGTACGTTGACGTATGTCAGTATGAC'));// ACGUACGUUGACGUAUGUCAGUAUGAC