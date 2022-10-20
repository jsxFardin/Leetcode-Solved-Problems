
function cleanObj(obj) {

    for (let propName in obj) {
        if (typeof obj[propName] === 'object') {
            cleanObj(obj[propName]);
        } else {
            if (obj[propName] === null || obj[propName].length === 0 || obj[propName] === '-' || obj[propName] === 'N/A') {
                if (Array.isArray(obj)) {
                    obj.splice(propName, 1);
                }
                else {
                    delete obj[propName];
                }
            }
        }
    }
    return obj;
}