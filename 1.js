
 let arr1 = [3,2,1]
 let size=arr1.length
 console.log(size, "array size")
arra2 = []
for (let i = 0; i <size; i++) {
    let n = 1;
    for (let j = 0; j <size; j++) {
        if (i!= j) {
            n = n * arr1[j]
        }

    }
    arra2.push(n) 

}
console.log(arra2, "array data")


    