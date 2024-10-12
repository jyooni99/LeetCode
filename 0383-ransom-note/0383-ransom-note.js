/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    magazineMap = new Map();
    magazine.split('').forEach(char => {
        magazineMap.set(char, (magazineMap.get(char) || 0)+ 1);
    })

    for(let i = 0; i < ransomNote.length; i++){
        let char = ransomNote[i];

        if(magazineMap.get(char) !== undefined){
            magazineMap.set(char, (magazineMap.get(char) - 1));
            if(magazineMap.get(char) === 0 ){
                magazineMap.delete(char);
            }
        }else{
            return false;
        }
    }

    return true;
};