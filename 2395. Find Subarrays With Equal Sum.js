/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function(nums,set = new Set()) {
    
    for(let i = 1; i < nums.length; i++) sum = nums[i] + nums[i-1]{
        let ;
        if(set.has(sum)) return true;
        set.add(sum);
    }
    return false;
};