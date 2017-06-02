function mergeData(data, copy, left, right) {
  if (left >= right) {
    return 0;
  }
  var middle = Math.floor((left + right) / 2);
  var i = 0, index1 = 0, index2 = 0;
  var leftCount = 0;
  var rightCount = 0;
  var count = 0;
  var k = 0;
  leftCount = mergeData(data, copy, left, middle);
  rightCount = mergeData(data, copy, middle + 1, right);
  for (i = left; i <= right; i++) {
    copy[i] = data[i];
  }
  index1 = left;
  index2 = middle + 1;
  k = left;
  while (index1 <= middle && index2 <= right) {
    if (copy[index1] <= copy[index2]) {
      data[k++] = copy[index1++];
    } else {
      data[k++] = copy[index2++];
      count += middle - index1 + 1;
    }
  }
  while (index1 <= middle) {
    data[k++] = copy[index1++];
  }
  while (index2 <= right) {
    data[k++] = copy[index2++];
  }
  return count + leftCount + rightCount;
}

function InversePairs(data)
{
    // write code here
    var copy = [];
    var count = mergeData(data, copy, 0, data.length - 1);
    return count;
}

var ret = InversePairs([364,637,341,406,747,995,234,971,571,219,993,407,416,366,315,301,601,650,418,355,460,505,360,965,516,648,727,667,465,849,455,181,486,149,588,233,144,174,557,67,746,550,474,162,268,142,463,221,882,576,604,739,288,569,256,936,275,401,497,82,935,983,583,523,697,478,147,795,380,973,958,115,773,870,259,655,446,863,735,784,3,671,433,630,425,930,64,266,235,187,284,665,874,80,45,848,38,811,267,575]);
console.log(ret);