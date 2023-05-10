let myScores = [92, 98, 84, 76, 77, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAverage(scores) {
  let sum = 0;

  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }

  let average = sum / scores.length;
  return average;
}

function getMedian(scores) {
  scores.sort(function (a, b) {
    return +a - +b;
  });
  if (scores.length % 2 == 0) {
    // is even

    // x  x  x  x  x | x  x  x  x  x
    // 0  1  2  3  4 | 5  6  7  8  9
    const left = scores.length / 2 - 1;
    const right = scores.length / 2;
    return getAverage([scores[left], scores[right]]);
  } else {
    // is odd
    const middleIndex = Math.floor(scores.length / 2);
    return scores[middleIndex];
  }
}

function getMin(scores) {
  scores.sort(function (a, b) {
    return +a - +b;
  });
  return scores[0];
}

function getMax(scores) {
  scores.sort(function (a, b) {
    return +b - +a;
  });
  return scores[0];
}

console.log('max score', getMax(myScores));
console.log('min score', getMin(myScores));
const median = getMedian(myScores);
console.log('got median', median);

/*

x first sort from least to greatest
  if array.length is even {
    // somehow get indices of middle two numbers
    average middle two numbers
    return average
  } else {
    // somehow get middle index
    return value at middle index
  }
*/
