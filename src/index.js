exports.min = function min(array) {
    if (array == undefined || !array.length) {
        return 0;
    }
    return array.reduce((acc, value) => (value < acc ? value : acc), array[0]);
};

exports.max = function max(array) {
    if (array == undefined || !array.length) {
        return 0;
    }
    return array.reduce((acc, value) => (value > acc ? value : acc), array[0]);
};

exports.avg = function avg(array) {
    if (array == undefined || !array.length) {
        return 0;
    }
    return array.reduce((acc, value) => acc + value, 0) / array.length;
};
