
// async function req() {
//     let url = 'https://api.github.com/users';
//     let response = await fetch(url);

//     let commits = await response.json();

//     return commits

// }
// let r;
// req().then(res => {
//    r= res;
// });
// console.log(r);

function req() {
   
fetch('https://api.github.com/users')
  .then(response => response.json())
  .then(commits => {
      for(index=0;index<commits.length;index++){
          btn(commits[index].login);  
        // console.log(commits[index]);
      };
  });

}
// document.write('<button onClick="req()">click</button>');

req();

function btn(name) {
    let btn = document.createElement("button");
    btn.innerHTML = name;
    document.body.appendChild(btn);
    btn.onclick = () => {
        // console.log(name);
        // window.open('https://www.google.com');  
        window.open(`./login.html?user=${name}`);  
    }
    // prof(commits[index].avatar_url)
    // prof(commits[index].login);
}

// function prof(name) {
        
//     const paramsString = 'user=login';
//     searchParams.set(`user=${name}`);
   
// }