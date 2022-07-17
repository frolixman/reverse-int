module.exports = function reverse (n) {
    n = n > 0 ? n : -n;
    const resultStr = Number(String(n).split('').reverse().join(''));
    
    return resultStr;
}

