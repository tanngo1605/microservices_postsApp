function findKElementCombination(eleList, result, curCom, k, curIdx) {
    if (curCom.length == k) {
        result.push([...curCom])
        return;
    }

    //if (curIdx + k - 1 >= eleList.length) return;

    for (let i = curIdx; i < eleList.length; i++) {
        curCom.push(eleList[i])
        findKElementCombination(eleList, result, curCom, k, i + 1)
        curCom.pop()


    }

}

function main(list) {
    let result = [];
    //let list = [2, 6, 1, 4, 7]
    for (let k = 0; k <= list.length; k++)
        findKElementCombination(list, result, [], k, 0);
    console.warn(result, "size: " + result.length)
}
main()


/*k =2

 1 2 3

 1   2    3
/\    \3
2 3

 */