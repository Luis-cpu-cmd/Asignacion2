let N= prompt('Ingresa un numero positivo');
const main = document.getElementById("main");


let row,result,concat,text="",par;
while(N<=0){
    alert("Ingresa un numero positivo");
    N = Number(prompt('Ingrese un numero positivo'));
}
const fragment = document.createDocumentFragment();
for(let i=0;i<N;i++){
    for(let j=0;j<10;j++){
        row= (1+i)+"*"+(1+j);
        result=(1+i)*(1+j);
        concat=row+"= "+result;
        //text+='<li>'+concat+'</li>'; 
        plantilla=concat;
        const itemList = document.createElement('li');
        if(result%2==0){
            itemList.textContent=plantilla;
            itemList.style.color="#D54322";
            fragment.appendChild(itemList);
        }else{
            itemList.textContent=plantilla;
            itemList.style.color="#156DED";
            fragment.appendChild(itemList);
        }
        
    }
    const ulList = document.createElement('ul');
    const divS= document.createElement('div');
    const TableName=document.createElement('h1');
    TableName.textContent="Tabla del "+(1+i);
    TableName.style.color="#FFFFFF"
    divS.style.backgroundColor="#181717"
    ulList.appendChild(fragment);
    divS.appendChild(TableName);
    divS.appendChild(ulList)
    main.appendChild(divS);
    //plantilla='<div><ul>'+text+ '</ul></div>';
    //main.innerHTML+=plantilla;
    text="";
}
