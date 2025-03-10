/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
  let gift = 1;
  let amountOfCandiesPerPerson = new Array(num_people).fill(0);
  let i = 0;
  while (candies >= gift) {
    let index = i % amountOfCandiesPerPerson.length;
    let candiesPerson = amountOfCandiesPerPerson[index];
    candies = candies - gift;
    amountOfCandiesPerPerson[index] = candiesPerson + gift;
    gift++;
    i++;
  }
  if (gift > 0)
    amountOfCandiesPerPerson[i % amountOfCandiesPerPerson.length] += candies;

  return amountOfCandiesPerPerson;
};
