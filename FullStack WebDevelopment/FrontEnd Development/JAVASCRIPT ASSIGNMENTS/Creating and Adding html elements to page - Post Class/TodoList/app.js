let addbtn = document.getElementsByClassName('todo-button')[0];
let ul = document.getElementsByClassName('todo-list')[0];

addbtn.addEventListener("click",(event)=>{
    event.preventDefault();
  });

addbtn.addEventListener('click',addElement)

function addElement(){

    // creating element 
    let li = document.createElement('li');
    let dltBtn = document.createElement('button');
    let cmptBtn = document.createElement('button');
    let div = document.createElement('div');

    let listText = document.getElementsByClassName('todo-input')[0].value;
    div.className ="todo";
    li.className = "todo-item"
    li.innerText = listText;

    dltBtn.innerText = 'delete';
    dltBtn.className = 'trash-btn';

    cmptBtn.innerText = 'completed';
    cmptBtn.className = 'complete-btn';

    div.append(li,cmptBtn,dltBtn);
    ul.appendChild(div);

    let completedBtn = document.getElementsByClassName('todo-list')[0];
    let completeValue = false;

    completedBtn.addEventListener('click',completedElement);

    function completedElement(e) {
        if (e.target.className == 'complete-btn') {
            let targetbtn = e.target;
            let div = targetbtn.parentNode;
            if(completeValue==false)
			{	
				// console.log(div.children[0]);
				div.children[0].style.textDecoration="line-through solid rgb(0, 0, 0)";
				completeValue=true;
			}
			else
			{	
				
				div.children[0].style.textDecoration="none";
				completeValue=false;
			}
        }
    }

    let removebtn=document.getElementsByClassName("todo-list")[0];
	removebtn.addEventListener("click",removeElement);
	function removeElement(e)
	{		
		if(e.target.className=="trash-btn")
		{			
			e.target.parentNode.remove();
		}
	}
}
