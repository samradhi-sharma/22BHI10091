
function calAverage(numbers){
    if(!numbers || numbers.length === 0){
        return 0;
    }
// the above three lines simply says that if the numbers array is empty or not present just return 0.


// with the help of reduce method we are calculating the sum 
    const sum = numbers.reduce((acc, num) => acc+num, 0);
    
    // this is how average is calculated 
    return sum/numbers.length;
}
module.exports = {calAverage};