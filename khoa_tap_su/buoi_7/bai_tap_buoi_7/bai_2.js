var romanToInt = function (s){
    //Roman Number convert board
    const Roman ={
        'I': 1,
        'V': 5,  
        'X':  10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    }

    let result = 0;

    for (let i=0; i<s.length;i++)
    {
        let num = Roman[s[i]];
        let next_num = Roman[s[i + 1]];

        if (num < next_num) //kiem tra xxem ki tu s[i]co be hon s[i +1]
        {
            result += next_num-num; //TRUE thi result + voi hieu s[i-1] -s[i], sau do chi so i phai +1
            i++;
        }  
        else
        {
            result += num;
        }
    }
    return result;



}