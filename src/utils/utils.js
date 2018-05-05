export const objToArray = (myObj) => {
  console.log('OBJ', myObj);
  const objWithKeys = Object.entries(myObj).map(entry => { 
    const objWithId = {
      ...entry[1],
      id: entry[0]
    }
    return objWithId;
  })
  return objWithKeys
}

// export const objToArray = (myObj) => {
//   // var firstKey = Object.keys(obj)[0];
//   // if (obj[firstKey].hasOwnProperty('id')) { 
//   //   console.log('OBJ', obj);
//   //   return obj 
//   // }
//   const objWithKeys = Object.entries(myObj).map(entry => { 
//     const objWithId = {
//       ...entry[1],
//       id: entry[0]
//     }
//     console.log('ENTRY', objWithId)
//     // entry[1].id = typeof entry[0] === 'number' ? parseInt(entry[0]) : entry[0] // 0: key, 1: indiv obj 
//     // return entry[1];
//     return objWithId;

//   })
//   return objWithKeys
// }