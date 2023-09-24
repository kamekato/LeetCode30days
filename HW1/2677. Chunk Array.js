/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    const result = [];
    
    for (let i = 0; i < arr.length; i += size) {
        const chunked = arr.slice(i, i + size);
        
        result.push(chunked);
    }
    
    return result;
};
