
// store the location in a array. make sure the array is not in alphabetical order.
let places :string[] = ['karachi', 'germany','new yourk','eifel tower','agra'];

// print your arry in its orrignal order.
console.log('original ' + places);

// print your array in alphabatical order without modifying the actual list.
console.log('copy ' + [...places].sort());

//show that your array is still in its orrignal order by printing it.
console.log('original ' + places);

// print your array in reverse alphabatical order without changing the order of the original list.
console.log('copy ' + [...places].sort().reverse());

// show that your array is still in its original order by printing it again.
console.log('original ' + places);

// reverse the order of your list.print the arrar to show that its order has change.
console.log( 'original ' + places.reverse());

// reverse the order of your list again.print the list to show it's back to its original order.
console.log('original ' + places.reverse());

// sort your array so its stored in alphabetical order.print the array to show that its order has been canged.
console.log('original ' + places.sort());

// sort to change your array so its stored in reverse alphabetical order.print the list to show that its order has changed.
console.log('original ' + places.sort().reverse());