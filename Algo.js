

// Exercice 1 - Complexité O(n²) // 

function twoSumBruteForce(nums, k) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === k) {
                return true;
            }
        }
    }
    return false;
}
console.log(twoSumBruteForce([10, 15, 3, 7], 17));  // Output attendu: true
console.log(twoSumBruteForce([1, 8, 10, 21], 19));   // Output attendu: false


// Exercice 2 - Complexité O(n²) // 

function sunsetViewsBruteForce(buildings) {
    let count = 0;
    let maxHeight = 0;
    for (let height of buildings) {
        if (height > maxHeight) {
            maxHeight = height;
            count++;
        }
    }
    return count;
}
console.log(sunsetViewsBruteForce([3, 7, 8, 3, 6, 1]));  // Output attendu: 3
console.log(sunsetViewsBruteForce([1, 4, 5, 8]));         // Output attendu: 1

// Exercice 3 - Complexité O(n) // 


function twoSumLinear(nums, k) {
    const seen = new Set();
    for (let num of nums) {
        if (seen.has(k - num)) {
            return true;
        }
        seen.add(num);
    }
    return false;
}
console.log(twoSumLinear([10, 15, 3, 7], 17));  // Output attendu: true
console.log(twoSumLinear([1, 8, 10, 21], 19));   // Output attendu: false

// Exercice 4 - Complexité O(n) // 


function sunsetViewsLinear(buildings) {
    let count = 0;
    const stack = [];
    for (let height of buildings) {
        while (stack.length && height >= stack[stack.length - 1]) {
            stack.pop();
        }
        stack.push(height);
        count++;
    }
    return count;
}
console.log(sunsetViewsLinear([3, 7, 8, 3, 6, 1]));  // Output attendu: 3
console.log(sunsetViewsLinear([1, 4, 5, 8]));         // Output attendu: 1

// Exercice 5 - Un seul passage // 


function twoSumOnePass(nums, k) {
    const seen = {};
    for (let num of nums) {
        if (k - num in seen) {
            return true;
        }
        seen[num] = true;
    }
    return false;
}
console.log(twoSumOnePass([10, 15, 3, 7], 17));  // Output attendu: true
console.log(twoSumOnePass([1, 8, 10, 21], 19));   // Output attendu: false

// Exercice 6 - Un seul passage // 


function sunsetViewsOnePass(buildings) {
    let count = 0;
    let maxHeight = 0;
    for (let i = buildings.length - 1; i >= 0; i--) {
        if (buildings[i] > maxHeight) {
            maxHeight = buildings[i];
            count++;
        }
    }
    return count;
}
console.log(sunsetViewsOnePass([3, 7, 8, 3, 6, 1]));  // Output attendu: 3
console.log(sunsetViewsOnePass([1, 4, 5, 8]));         // Output attendu: 1

