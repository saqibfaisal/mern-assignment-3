const arr = [
    {
        ram : 128,
        rom:6,
        price:300000,
        model:"v13",
        companyName: "iPhone",
    },
    {
        ram:64,
        rom:4,
        price:18000,
        model:"hot9Play",
        companyName:"infinix",
    },
    {
        ram:64,
        rom:6,
        price:25000,
        model:"9d",
        companyName:"redmi",
    }
]
const newarr = arr.map(function(arr) {
    document.getElementById("mobileName").innerHTML += `
    <option>${arr.companyName}</option>`
    // return  i ;
    // console.log(arr.companyName)
    
})
// console.log(newarr)


mobiles()
function mobiles() {
    let mobile = document.getElementById("mobileName").value
    document.getElementById("model").innerHTML = " "
    const newarr1 =  arr.filter( user => user.companyName == mobile);
    const newarr2 = newarr1.map(function (arr) {
        document.getElementById("model").innerHTML+=`
        <option>${arr.model}</option>`
    })
    // console.log(newarr2)
}
function searchVal(){
    let model = document.getElementById("model").value
    const newarr1 =  arr.filter( user => user.model == model);
    console.log(newarr1)
}
