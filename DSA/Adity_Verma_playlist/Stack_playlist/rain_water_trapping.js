/**
 * https://leetcode.com/problems/trapping-rain-water/description/
 *
 * Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 *
 * Explanation: The above elevation map (black section) is represented by
 * array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section)
 * are being trapped.
 *
 * water[i] = min(maxL,maxR) - height[i]
 */

//TIP: remember the formulae;
//totalWater += Math.min(maxLeft[i], maxRight[i]) - height[i];
function rainWaterTripping(height) {
  const lastIndex = height.length - 1;
  const maxLeft = [height[0]]; //initialise with first
  const maxRight = [];
  maxRight[lastIndex] = height[lastIndex]; //initialise with last value
  //const water = [];
  let totalWater = 0;

  //create maxLeft array
  for (let i = 1; i < height.length; i++) {
    if (height[i] > maxLeft[maxLeft.length - 1]) {
      maxLeft[i] = height[i];
    } else {
      maxLeft[i] = maxLeft[maxLeft.length - 1];
    }
  }

  //console.log("maxLeft", maxLeft);

  //create maxRight from reverese
  for (let i = height.length - 2; i >= 0; i--) {
    if (height[i] > maxRight[i + 1]) {
      maxRight[i] = height[i];
    } else {
      maxRight[i] = maxRight[i + 1];
    }
  }

  //console.log("maxRight", maxRight);

  for (let i = 0; i < height.length; i++) {
    //water[i] = Math.min(maxLeft[i], maxRight[i]) - height[i];
    totalWater += Math.min(maxLeft[i], maxRight[i]) - height[i];
  }

  //console.log("water", water);
  return totalWater;
}

const result = rainWaterTripping([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
console.log(result);
