

let Guest_list :string[] = ['umair','mubeen','osama',] ;

// for(let i=0; i<Guest_list.length; i++){

//     console.log('dear mr.' + Guest_list[i] + ',\n\nit is our pleasure to invite you in our party.\n\nthank you!')
// }

let absent_guest :string = 'umair' ;

let new_guest :string = 'kamran tessori' ;

Guest_list[0] = new_guest ;

for(let i=0; i<Guest_list.length; i++){

    console.log('dear mr. ' + Guest_list[i] + ',\n\nit is our pleasure to invite you in our party.\n\nthank you!')

}    
    console.log(`mr. ${absent_guest} is not comming to the party`);

    console.log('Good News! we find big table so we are inviting 3 more guests.')

    Guest_list.unshift('sir zia khan') ;

    Guest_list.splice(2 , 0 ,'maryam nawaz') ;

    Guest_list.push('bilawal bhutto zardari');

for(let i=0; i<Guest_list.length; i++){

    console.log('dear mr. ' + Guest_list[i] + ',\n\nit is our pleasure to invite you in our party.\n\nthank you!')

} 

