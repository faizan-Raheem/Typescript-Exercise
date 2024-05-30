

const usernNames: string[] = ['admin','bugs bunny','daffy duck','sylvester','tweety'];

for(let i=0; i <usernNames.length; i++){
    if(usernNames[i] === 'admin')
    {
        console.log('Hello admin, would you like to see a status report?');
    }
    else{
        console.log(`Hello &{usernNames[i]} ,thank you for logging in again`)
    }
}