module.exports = function towelSort (matrix) {
  let resultArr = []
  for (let i in matrix){
    if (i % 2 !== 0){
      matrix[i].reverse()
    }

    for (let j in matrix[i]){
      resultArr.push(matrix[i][j])
    }
  }
  return resultArr
}
