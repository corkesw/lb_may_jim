const {
  measureNumberOfIncreasesInDepth,
  measureIncreasesInSlidingWindow,
} = require(".");
const { depthMeasures } = require("./data");

console.log(measureNumberOfIncreasesInDepth(depthMeasures));

console.log(measureIncreasesInSlidingWindow(depthMeasures));
