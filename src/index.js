module.exports = function slugger([...strs]){
    if(strs.length == 0 || strs == null) {
        return "";
    }

    if(strs.length == 1){
        return strs[0];
    }

    let res = "";

    for (const str of strs) {
        res += str + "-";
    }
    
    return res.slice(0, -1);
}


