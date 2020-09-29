/* Write a Program to convert an array of objects to an object
	based on a given key */

/*const convert = (arrayOne, keyField) => {
	if (!Array.isArray(arrayOne)) {
		return null;
	}
	const result = (array, keyField) =>
		arrayOne.reduce((obj, item) => {
			obj[item[keyField]] = item
			return obj
		}, {})
	const finResult = result(arrayOne, keyField)
	return finResult;
};*/
/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
            '1': {id: 1, value: 'abc'},
            '2': {id: 2, value: 'xyz'}
         }
*/
/*module.exports = convert;*/
const convert = (arrayOne, keyField) => {
        if(!Array.isArray(arrayOne))
       {
           return null;
       }
        const result = (array, keyField) =>
           arrayOne.reduce((obj, item) => {
               obj[item[keyField]] = item
               return obj
           }, {})
       const finResult = result(arrayOne, keyField)
       return finResult;
   };
/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
            '1': {id: 1, value: 'abc'},
            '2': {id: 2, value: 'xyz'}
         }
*/
module.exports = convert;
