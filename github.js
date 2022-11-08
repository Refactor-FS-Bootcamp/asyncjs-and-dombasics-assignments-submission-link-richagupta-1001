const API_URL ="https://api.github.com/users/";
const main=document.getElementById("main");
const form=document.getElementById("form");
const search=document.getElementById("search");
const getUser=async username =>{
    const res=await fetch(API_URL+username);
    const resData=await res.json();
    CreateUserCard(resData)
    getRepos(username);
}
const getRepos=async username=>{
    const res=await fetch(API_URL+username+"/repos");
    const resData = await res.json();
    addReposToCard(resData);
}
const addReposToCard=repos=>{
    const reposEL=document.getElementById("repos");
    repos.forEach(repo => {
        const repoEL=document.createElement("a");
        repoEL.classList.add("repo");
        repoEL.href=repo.html_url;
        repoEL.target="_blank";
        repoEL.innerText=repo.name;
        reposEL.appendChild(repoEL);
    })
}
const CreateUserCard= user=>{
    const cardHTML=`
    <div class="card">
    <div>
    <img class="avatar" src="${user.avatar_url}" alt="${user.name}"/>
    </div>
    <div class="user-info">
    <h2>${user.name}</h2>
    <p>${user.bio}</p>
    <ul class="info">
        <li><strong>Followers:</strong>${user.followers}</li>
        <li><strong>Following:</strong>${ user.following }</li>
        <li><strong>Repos:</strong>${user.public_repos}</li>
        <li><strong>Followers:</strong>${user.twitter_username}</li>
        <li><strong>Followers:</strong>${user.location}</li>
    </ul>
    <div id="repos"></div>
    </div>
    </div>`;
    main.innerHTML=cardHTML;
}
getUser("richagupta-1001");
form.addEventListener("submit",e=>{
    e.preventDefault();
    const user=search.value;
    if(user){
        getUser(user);
        search.value="";
    }
})