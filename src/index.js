// You should implement your task here.

module.exports = function towelSort(matrix) {
   if (typeof matrix !== "undefined") {
      for (let i = 0; i < matrix.length; i++) {
         for (let j = 0; j < matrix[i].length; j++) {
            i % 2 ? matrix[i].sort((a, b) => (b - a)) : matrix[i].sort((a, b) => (a - b));
         }
      }
      return [].concat(...matrix);
   } else {
      return [];
   }
}
