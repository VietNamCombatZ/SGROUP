var missingNumber = function (nums) {

    var Check = new Array(nums.length + 1).fill(false);

    for(num of nums){
        Check[num] = true;
    }

    for(let i=0; i < Check.length; i++)
    {
        if(Check[i] == false)
        {
            return i;
        }
    }

};
