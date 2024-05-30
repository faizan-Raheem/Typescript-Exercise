import { features } from "process";


function storeCarInfo(manufacturer: string, modelName:string, ...extraOption: { [key: string]:any } [] ){
    const carInfo = {
        manufacturer,
        modelName,
...Object.assign({}, ...extraOption)
    }
    return carInfo; 
};
let answer = storeCarInfo('honda','civic',{colr:'black'},{features: ['navigation','power window']})

console.log(answer);

