var section = document.querySelector("section");
affichage();

// var h1 = document.querySelector("h1");

function affichage(element){
    listfilm(element).then(function(json){
        
        for (i = 0; i < 10; i++){
            let h1 = document.createElement("h1");
            let bouton = document.createElement("div");
            let img = document.createElement("img");
            let article = document.createElement("article");
            let main = document.createElement("main");

            let source = json[i]["download_url"];
            source = source.replace(json[i]["height"], "600");
            source = source.replace(json[i]["width"], "600");
            console.log(source);

            h1.textContent = json[i]["author"];
            img.src = source;
            bouton.textContent = "Visit";
            bouton.id = json[i]["id"];

            section.append(article);
            article.append(main);
            main.append(h1);
            main.append(bouton);
            article.append(img);
        }


    })
}


async function listfilm(element){
    var recuperation = await fetch(`https://picsum.photos/v2/list?page=${element}&limit=10`);
    if (recuperation.ok){
        let json = recuperation.json();
        // return Promise.resolve(json);
        return json;
    } else {
        img.src = "";
        h1.textContent = "Impossible";
        h2.textContent  = "";
    }
}


var bouton = document.querySelectorAll("button");

bouton[0].addEventListener("click",function(){ 
    let suppr = document.querySelectorAll("article");
    for (i = 0; i < suppr.length; i++){
        suppr[i].style.display = "none";
    }
    affichage(1);
});

bouton[1].addEventListener("click",function(){ 
    let suppr = document.querySelectorAll("article");
    for (i = 0; i < suppr.length; i++){
        suppr[i].style.display = "none";
    }
    affichage(2);
});

bouton[2].addEventListener("click",function(){ 
    let suppr = document.querySelectorAll("article");
    for (i = 0; i < suppr.length; i++){
        suppr[i].remove();
    }
    affichage(3);
});





document.addEventListener('click', (e) => {
    let element = e.target;
    if(element.tagName == "DIV"){        
        // alert(element.id);
        localStorage.setItem('id', element.id);
        window.location = "page.html";
    }
});
