function login() {
    // const searchParams1 = new URLSearchParams(paramsString1);
    let param=location.href.split('=')[1];
    // searchParams1.get(`https://api.github.com/users${name}`);
    // console.log(param);
    const paramsString = `https://api.github.com/users/${param}`;

    fetch(paramsString)
    .then(response => response.json())
    .then(commits => {
        console.log(commits);
        let im = document.createElement('img');
        document.body.appendChild(im);
        im.src = commits.avatar_url;
        im.style.width = '100px';
        im.style.height = '100px';
            pd(commits.login);
            pd(commits.company);
            pd(commits.location);
            pd(commits.id);
            pd(commits.blog);
            pd(commits.type);

    }); 
// window.open(`https://api.github.com/users${param}`)
}

login();

function pd(value){
    let pl = document.createElement('p');
    document.body.appendChild(pl);
    pl.innerHTML = value;
}