//        int[] nums = {2,7,11,15};
//        int target = 9;
// --------------------------------------------
// function twoSum(nums,target) {
//     let res = {};
    
//     for(let i = 0; i<nums.length;i++){
//         if (res[target-nums[i]] !== undefined) {
//              return [res[target-nums[i]],i];
            
//             }
//             res[nums[i]] = i;
//         }
        
// }


var twoSum = function(nums, target) {
    let map = new Map;
      for (var i = 0; i < nums.length; i++) {
          let complement = target - nums[i];
          if (map.has(complement)) {
              return [map.get(complement), i]
          }
          map.set(nums[i], i);
      }
  };

console.log(twoSum([2,7,11,15],9));