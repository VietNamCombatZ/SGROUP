var findWords = function (words) {

    var keyboard_words = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];

    var result = [];

    for(let i = 0; i < words.length; i++) //xet tung chuoi ki tu tung words
    {
        
        let check;
        //kiem tra xem chuoi co the nhap voi 1 day ban phim ko
        for(keyboard_word of keyboard_words)
        {
            //kiem tra tung ki tu trong phan tu thu i
            for ( let j = 0; j <words[i].length;j++)
            {
                if(keyboard_word.indexOf(words[i][j].toLowerCase()) == -1)
                {
                    check = false;
                    break;

                }
                check = true;
            }
            
            //push phan tu thu i vao chuoi result neu nhap dc bang 1 day ban phim
            if(check == true)
            {
                result.push(words[i]);

            }
            
        }
    }
    return result;
};
