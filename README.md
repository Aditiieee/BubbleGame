# BubbleGame
var time, score & hitrn were created globally to be used later
fuction makeBubble --> var bubbleCount calculates the innerwidth of the window /9 & floor helps to bring it to a whole number as a bubble can't be created in decimals. var clutter is created within the function to be used later in the for loop where actually the bubbles are created.
for loop --> i is set to 1 where i<bubbleCount & i is iterated. var rn is created to store a random number created by using random function & than it is rounded to the nearest whole value multiplied by 10. That random number is than added to the clutter & later added to the HTMlL using the innerHTML.
