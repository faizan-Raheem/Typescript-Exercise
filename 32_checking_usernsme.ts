let current_users = ['faIzan','umaIr','muBeen','ilys','talha'];

let new_users = [] = ['ali','faraz','umaIr','muBeen','faiez'];

new_users.forEach(newusersname => {
  let lowerCase = newusersname.toLowerCase();
if(current_users.map(c_user => c_user.toLowerCase()). includes(lowerCase)){
    console.log(`the username &{newUsername} is not available.please write a diffrent username`);
}
else{
console.log(` the username &{newusername} is available.`);
}
}) 
