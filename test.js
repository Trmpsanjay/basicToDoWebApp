// var todoList  =[];


// const getLocalStorage = () => {
//     if (localStorage.getItem('todos') !== null) {
//       todoList = JSON.parse(localStorage.getItem('todos'));
//     }
//   }

//   const updateLocalStorage = ()=> {
//     localStorage.setItem('todos', JSON.stringify(todoList));
//   }
  


// const input = document.getElementById("input");
// const button = document.getElementById("submit");
//  button.addEventListener("click",() =>{
//      todoList.push(input.value);
//      input.value = "";
//      console.log(todoList);
//      const output = document.getElementById('table-wrap');
//      const myNode = document.getElementById("table-wrap");
//      while (myNode.firstChild) {
//         myNode.removeChild(myNode.lastChild);
//       }
//       let newH1;
//      todoList.map((list,index)=>{
        
//           newH1 = document.createElement("h1");
//           newH1.setAttribute('id',index);
//         newH1.innerText = list;
//          console.log(list+" "+index);
//          output.appendChild(newH1);
//          newH1.addEventListener('click',(id)=>{
//              //const id = document.getElementById('')
//              console.log(id.path[0]);
//             //  const iid = PointerEvent.path;
//             //  console.log(iid);
//             const clickedH1 = id.path[0];
//             const clickedId = clickedH1.id;
//             console.log(clickedH1);
//             // output.removeChild(clickedH1);
//             clickedH1.style.textDecoration = 'line-through';
//          })
//          newH1.addEventListener('dblclick',(id)=>{
//             //const id = document.getElementById('')
//             //console.log(id.path[0]);
//            //  const iid = PointerEvent.path;
//            //  console.log(iid);
//            const clickedH1 = id.path[0];
//            const clickedId = clickedH1.id;
//            console.log("clicked Id" +clickedId);
//            todoList.splice(id,1);
//            output.removeChild(clickedH1);
           
//         })

       
        
//      });




//  });


//  const handleSingleClick = (arr,index)=>{
//     return arr.splice(index, 1);
//  }

 

var todoList  =[];
const updateLocalStorage = function() {
    localStorage.setItem('todos', JSON.stringify(todoList));
  }
  const getLocalStorage = function (){
      todoList = JSON.parse(localStorage.getItem('todos'));
  }
  
  getLocalStorage();

  // if(todoList.length!=0){
  //   console.log("inside if");
  //   todoList.map(list,index,()=>{
  //    const  data = document.createElement("h1");
  //   data.innerText = list;
  //    console.log(list+" "+index);
  //    output.appendChild(data);
  //   });
  // }




const input = document.getElementById("input");
const button = document.getElementById("submit");
 button.addEventListener("click",() =>{
     todoList.push(input.value);
     updateLocalStorage();
     input.value = "";
     console.log(todoList);
     const output = document.getElementById('table-wrap');
     const myNode = document.getElementById("table-wrap");
     while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
      }
      
      let newH1;
     todoList.map((list,index)=>{
        
          newH1 = document.createElement("h1");
          newH1.setAttribute('id',index);
        newH1.innerText = list;
         console.log(list+" "+index);
         output.appendChild(newH1);
         newH1.addEventListener('click',(id)=>{
             //const id = document.getElementById('')
             console.log(id.path[0]);
            //  const iid = PointerEvent.path;
            //  console.log(iid);
            const clickedH1 = id.path[0];
            const clickedId = clickedH1.id;
            console.log(clickedH1);
            // output.removeChild(clickedH1);
            clickedH1.style.textDecoration = 'line-through';
         })
         newH1.addEventListener('dblclick',(id)=>{
            //const id = document.getElementById('')
            //console.log(id.path[0]);
           //  const iid = PointerEvent.path;
           //  console.log(iid);
           const clickedH1 = id.path[0];
           const clickedId = clickedH1.id;
           console.log("clicked Id" +clickedId);
           todoList.splice(id,1);
           output.removeChild(clickedH1);
           updateLocalStorage();
           
        })

       updateLocalStorage();
        
     });




 });



 

