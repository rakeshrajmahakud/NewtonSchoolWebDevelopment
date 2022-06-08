
const heading = document.getElementById('heading');
const next = document.getElementById('load_next');
const prev = document.getElementById('load_prev');
const list = document.getElementById('list');
let pageNumber = 1;


function Issues(pageNumber) {
    return fetch(`https://api.github.com/repositories/1296269/issues?page=${pageNumber}&per_page=5`)
            .then(res => res.json()).then(res => res);

}

async function showIssues(pageNumber){
    let issue = await Issues(pageNumber);
    // console.log(issue);
    list.innerHTML = "";
    heading.innerText = `Page number ${pageNumber}`;
    issue.forEach(element => {
        let li = document.createElement('li');
        li.innerText = element.node_id;
        list.appendChild(li);
    });
}

showIssues(1);

next.addEventListener('click', () => {
    pageNumber++;
    showIssues(pageNumber);
})
prev.addEventListener('click', () => {
    if (pageNumber > 1) {
         pageNumber--;
         showIssues(pageNumber);
    }
})