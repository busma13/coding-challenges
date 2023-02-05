/* ASCII Fun #2: Funny Dots

Funny Dots

You will get two integers n (width) and m (height) and your task is to draw the following pattern. Each line is seperated with a newline (\n)

Both integers are equal or greater than 1; no need to check for invalid parameters.
Examples


                                            +---+---+---+
             +---+                          | o | o | o |
dot(1, 1) => | o |            dot(3, 2) =>  +---+---+---+            
             +---+                          | o | o | o |
                                            +---+---+---+


PREP
Parameters: Two integers greater than 0.
Returns: A string that conforms to the pattern explained above.  Lines are seperated by a newline.
Examples: see above.
Pseudo code: Create a border string.  Add '+---' n times. Add the closing '+\n'.  Create a dot string. Add '| o ' n times. Add the closing '|\n'. Loop m times, adding a border and a dot string to a result string.  Add a bottom border.  Return result string.
*/

function dot(n,m){
    let border, dot, result = '';
    border = '+---'.repeat(n) + '+\n';
    dot = '| o '.repeat(n) + '|\n';
    for (let i = 0; i < m; i++) {
        result+= border + dot;
    }
    result+= border.slice(0, -1);
    return result;
  }

  console.log(dot(1, 1));
  console.log(dot(3, 2));
  console.log(dot(1, 5));
