var hIndex = function(citations) {
    const sorted = citations.sort((a, b) => b - a);
    let h = 0;

    for(let i = 0; i < sorted.length; i++){
        if(sorted[i] >= i + 1) h++;
    }
    return h;
};