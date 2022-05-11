exports.measureNumberOfIncreasesInDepth = (depthMeasures) => {
  let numberOfIncreasedMeasures = 0;

  // starting at second index, iterate through and check if index is more than the previous index
  for (let i = 1; i < depthMeasures.length; i++) {
    if (depthMeasures[i] > depthMeasures[i - 1]) {
      numberOfIncreasedMeasures++;
    }
  }
  return numberOfIncreasedMeasures;
};

exports.measureIncreasesInSlidingWindow = (depthMeasures) => {
  let numberOfIncreasedMeasures = 0;

  // iterate through and grab the current three and next three totals stopping when a group of three cannot be formed
  for (let i = 0; i < depthMeasures.length - 3; i++) {
    const setOne =
      depthMeasures[i] + depthMeasures[i + 1] + depthMeasures[i + 2];
    const setTwo =
      depthMeasures[i + 1] + depthMeasures[i + 2] + depthMeasures[i + 3];
    if (setTwo > setOne) {
      numberOfIncreasedMeasures++;
    }
  }
  return numberOfIncreasedMeasures;
};
