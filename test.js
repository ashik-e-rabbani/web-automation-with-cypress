
function sortAndRemoveDuplicates(array){

    let l = array.length-1
    let tempArray = []

    for(let i=0;i<=l;i++){
        if(!tempArray.includes(array[i])){
                tempArray.push(array[i])
        }
        
    }

    return tempArray.sort((a,b) => a-b)
    // console.log(`Sorted and duplicate removed ${tempArray.sort}`)



}

const taskArray = [4,4,5,9,1,2]

console.log(sortAndRemoveDuplicates(taskArray))