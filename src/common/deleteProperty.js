export function deleteProperty(obj,prop) {
    const newObject = Object.keys(obj).reduce((object,key)=> {
        if(key !== prop) {
            object[key] = obj[key]
        }
        return object
    },{});
    return newObject;
  }