/**
 * @param {number[]} cards
 * @return {boolean}
 */
function generateSums(a, b) {
  var sumsWithVariousOperation = [a + b, a - b, b - a, a * b];
  if (a !== 0) sumsWithVariousOperation.push(b / a);
  if (b !== 0) sumsWithVariousOperation.push(a / b);
  console.log(sumsWithVariousOperation);
  return sumsWithVariousOperation;
}
function dfs(cards) {
  console.log([cards]);
  if (cards.length === 1) return Math.abs(cards[0]) - 24 < 0.001;

  for (let i = 0; i < cards.length; i++) {
    for (let j = i + 1; j < cards.length; j++) {
      let sums = generateSums(cards[i], cards[j]);
      const filteredCards = cards.filter((card, index) => {
        if (index !== i && index !== j) {
          return sums.find(sum => {
            const res = dfs([sum, card]);
            console.log({ res });
            return res;
          });
        }
      });
      console.log({ filteredCards });
    }
  }

  return false;
}

var judgePoint24 = function(cards) {
  return dfs(cards);
};

const cards = [4, 1, 8, 7];
judgePoint24(cards);
