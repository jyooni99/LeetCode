var simplifyPath = function(path) {
    let answer = [];

    path.split('/').forEach((item, idx) => {
        if(item === '..'){
            answer.pop();
        }else if(item !== '.' && item !== ''){
            answer.push(item);
        }
    })

    return '/' + answer.join('/');
};