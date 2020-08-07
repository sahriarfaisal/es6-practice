//Simple Array concat. Not Using threeDots.
const ages = [12, 14, 16, 19, 17];
const ages2 =[15, 16, 12];
const ages3 = [25, 36, 22, 29];
const allAges = ages.concat(ages2).concat([10]).concat(ages3);
// const allAges2 = [ages, ages2, 5, ages3];
const allAges2 = [...ages, ...ages2, 5, ...ages3];
console.log(allAges);
console.log(allAges2);
//=========================================================================
//When store all value variable separate variable. then fiend max value using this way.
const business = 650;
const minister = 450;
const sochib = 250;
const takaPoisha = [650, 450, 250];
// const maximum = Math.max(business, minister, sochib);
const maximum = Math.max(...takaPoisha);
console.log(maximum);