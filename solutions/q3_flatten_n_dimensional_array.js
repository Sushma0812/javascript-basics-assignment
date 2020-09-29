/* Write a Program to Flatten a given n-dimensional array */

const flatten = (input) => {
	//var input = [1, [2, 3], [[4], [5]]];
	if (!Array.isArray(input)) {
		return null;
	}
	Array.prototype.flatten = (array) => {
		const newArray = [];
		const flat = (array) => {
			array.map(i => {
				Array.isArray(i) ? flat(i) : newArray.push(i)
			})
		}
		flat(input);
		return newArray;
	};
	const result = input.flatten();
	console.log(result);
	return result;
};
flatten([1, [2, 3], [[4], [5]]]);
/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]
*/
module.exports = flatten;