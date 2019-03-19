/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let counter = 0;
  let triangles = [];
  for (let i = 1; i < preferences.length; i++) {
    let first = preferences[i - 1];
    let second = preferences[first - 1];
    let third = preferences[second - 1]; 
    if (i === third && first !== third) {
     triangles.push(first, second, third);
    }
  }
  counter = Math.round(triangles.length / 9);
    return counter;
};