// input =  "aaaasssiia"
// output = { a: 5, s: 3, i: 2 }

function CountUniqueChar(char) {
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
        throw console.error("please input string data")
    }
    return result
}