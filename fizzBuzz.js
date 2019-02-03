function fizzBuzz(a) {
    if(a % 3 == 0 && a % 5 == 0){
        return "FizzBuzz"
    }
    else if(parseInt(a / 10) == 3){
        if(a % 5 == 0 || a % 10 == 5){
            return "FizzBuzz"
        }else{
            return "Fizz"   
        }
    }
    else if(parseInt(a / 10) == 5){
        if(a % 3 == 0 || a % 10 == 3){
            return "FizzBuzz"
        }else{
            return "Buzz"   
        }
    }
    else if(a % 3 == 0){
        return "Fizz"
    }
    else if(a % 5 == 0){
        return "Buzz"
    }
    else{
        return a.toString()
    }
    
}
module.exports = fizzBuzz;
