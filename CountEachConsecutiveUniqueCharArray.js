// input =  "aaaasssiia"
// output = [ { a: 4 }, { s: 3 }, { i: 2 }, { a: 1 } ]

function CountEachConsecutiveUniqueCharArray(char) {
    let result = {}
    if (typeof char === 'string') {
        char.split("").forEach((item) => {
            if (result[item]) {
                result[item]++
            } else {
                result[item] = 1
            }
        })
    } else {
        throw "please input string data"
    }
    return result
}