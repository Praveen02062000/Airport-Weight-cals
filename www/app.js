
const arr1 = [0];
const arr2 = [];


function convert(){
    const get_value = document.getElementById("kg").value;
    const table = document.getElementById("table");

    let a = arr1[0];
    let b = get_value
    let c = a-get_value;
    console.log(c*(-1))
    arr2.push(c*(-1))
    arr1.pop();
    arr1.push(b);
    console.log(arr2)



    console.log(arr1)

    const row = table.insertRow(-1);
    cell1 = row.insertCell(0);
    cell2 = row.insertCell(1);
    cell1.innerText = c*(-1);
    cell2.innerText = arr1[0];

    /*for(let i=0;i<arr1.length;i++){
        a  = arr1[i]
        console.log(a)
    }*/
    

    
   

}


const remove1=()=>{
    const table1 = document.getElementById("table");
    table1.deleteRow(1);
    arr2.pop();
    console.log(arr2)

    
}

function clear1(){
    console.log("fuck you")
    const table2 = document.getElementById("table");
    var table3 = table2.rows.length;
    for(let i = table3 - 1;i>0;i--){
        table2.deleteRow(i);
        arr1.pop()
        arr1.push(0)

    }
    const input = document.getElementById("kg");
    input.value ="";
    
}












