var img = document.querySelector("img");

affichage();

function affichage(element){
    listfilm(element).then(function(json){

    img.src = json["download_url"];
    console.log(json["download_url"]);

    })
}


async function listfilm(element){
    var recuperation = await fetch(`https://picsum.photos/id/${localStorage.getItem("id")}/info`);
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