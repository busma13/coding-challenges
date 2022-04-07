/* Well of Ideas - Easy Version

For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
*/

function well(x){
    const justGood = x.filter( item => item === 'good');
    if (justGood.length > 2) {
      return "I smell a series!";
    } else if (justGood.length > 0) {
      return "Publish!";
    } else {
      return "Fail!"
    }
}

well(['bad', 'bad', 'bad']) //Fail!
well(['good', 'bad', 'bad', 'bad', 'bad'])// 'Publish!'
well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']) // 'I smell a series!'