let mybtn = document.querySelector('#btn');
let mytable = document.querySelector('#table');

async function getdata() {
    let x = await fetch('https://jsonplaceholder.typicode.com/users')
    let res =   await x.json();
   console.log(res);
   myfunc(res);
}
getdata()

function myfunc(data){
    mybtn.addEventListener('click',()=>{
        let table = document.createElement('table');
        let thead = document.createElement('thead');
        let tbody = document.createElement('tbody');
        let tr = document.createElement('tr');
        let objkey = Object.keys(data[0]);
        let headingdata = 
            
             `
                    <th>id</th>
                    <th>name</th>
                    <th>username</th>
                    <th>email</th>
                    <th>address</th>
                    <th>phone</th>
                    <th>website</th>
                    <th>company</th>
            `
    
        
        tr.innerHTML=headingdata;
        thead.appendChild(tr)
        table.appendChild(thead);

        let datarow = data.map((e)=>{
            return `<tr>
                        <td>${e.id}</td>
                        <td>${e.name}</td>
                        <td>${e.username}</td>
                        <td>${e.email}</td>
                        <td>${e.address.city}</td>
                        <td>${e.phone}</td>
                        <td>${e.website}</td>
                        <td>${e.company.name}</td>
                    </tr>
                    `
        })

        tbody.innerHTML = datarow;
        table.appendChild(tbody);
        mytable.appendChild(table);
     
        
        console.log();

    })

}