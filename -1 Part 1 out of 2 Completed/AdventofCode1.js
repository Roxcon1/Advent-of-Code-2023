const fs = require("fs");

const fileData = fs.readFileSync("input.txt", "utf-8", (err, data) => {
    if(err){
        console.err(err);
        return;
    } 
    return data
})

function dataArray(data) {
    let lineex = "\n"
    let arrData = data.split(lineex)

    return arrData
} 

const ArrData = dataArray(fileData)
function dataDigits(arrData) {

    let digits = []
    let left = []
    let right = []

    for(let i = 0; i < arrData.length; i++) {
        let line = arrData[i]
        for(let l = 0; l < line.length; l++) {
            if (!isNaN(line[l])){
                left.push(line[l])
                break
            }
        }
        for(let r = line.length - 1; r >= 0; r--) {
            if (!isNaN(line[r])){
                right.push(line[r])
                break
            }
        }
        digits.push(left[i] + right[i])
    }

    return digits

}
const Digits = (dataDigits(ArrData))
function result(digits) {
    let result = 0

    for(let i = 0; i < digits.length; i++) {
        result += Number(digits[i])
    }
    return result
}

const Sum = result(Digits)

console.log(Sum)