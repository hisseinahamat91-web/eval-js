fetch("game.json")
    .then(rep => rep.json())
    .then(game => {

        // ici j'ai accces a data, ma donnée
        console.log(game)
        //afficherpartie(game)

        console.log(game.nomCommercial)
        console.log(game.avantagesClients)


        afficherMissions(game)
        afficheravantage(game)
        affichertemoignages(game)
    })


// les cartes des missions 
//role : afficher les cartes des missions dans mon html
//parametre : données
//return : rien car elel affiche

function afficherMissions(donnee) {

    //chercher les activites 1 par 1 
    donnee.activites.forEach(activite => {

        let nom = activite.nom
        let image = activite.imageUrl
        let description = activite.description

        console.log(nom, description, image)

        //créer une carte avec l'activités récupérer

        document.getElementById("sectionActivites").innerHTML +=

            `
            <div  class="card-activite "><!-- div carte -->
                <div class="mb-10">
                    <div class="flex space-arounde"><!-- div-img -->

                        <img class="w-100 mb-30"
                            src="${image}"
                            alt="">
                        <h2 class="pl-70 mb-60 fz-20">${nom}</h2>

                    </div>
                </div>
                <p class="fz-10">${description}
                </p>

                <a class="styled mb-10 " href="">réserver</a>

                <div class="flex space-between "><!-- div horaire -->
                    <a class="styled-horaire" href="">10:00</a>
                    <a class="styled-horaire" href="">10:30</a>
                    <a class="styled-horaire" href="">15:20</a>
                    <a class="styled-horaire" href="">20:30</a>
                    <a class="styled-horaire" href="">13:10</a>


                </div>

            </div>
    
    `
    });




    //envoi dans la sectionActivites
}




//les cartes des avantages 
//role:afficher les cartes des avantages dans mon html
//return:rien car elle affiche
function afficheravantage(donnee) {

    donnee.avantagesClients.forEach(avantage => {
        

        document.getElementById("sectionavantage").innerHTML +=

            `
      
      
      <div class=" mb-10">
                    <p> ${avantage} </p>

                    

                </div>
    
      
      `


    });




}

//le cartes de temoignage

function affichertemoignages(donnee) {

    //chercher les activites 1 par 1 
    donnee.temoignages.forEach(temoignage => {

        let imageUrl = temoignage.imageUrl
        let prenom = temoignage.prenom
        let typeExperience = temoignage.typeExperience
       let commentaire = temoignage.commentaire
       let note = temoignage.note
        console.log(imageUrl, prenom, typeExperience)

        //créer une carte avec l'activités récupérer


     document.getElementById("sectiontemoignages").innerHTML += `
    


    <div id="section1" class="pb-100 mb-60  card-temoignage">
                    <div class="flex mb-30">
                        <img class="w-30 " src="${imageUrl}"/>
                            
                        <h4 class="pl-70 ">${prenom}</h4>

                    </div>
                    <div >
                        <p class="mb-30">
                            ${typeExperience}</p>

                        <p >${commentaire}</p>
                        <p class="mb-30">${note}
                    </div>
                    <div class="mb-10"><!-- div etoile -->
                        <i class="ph-fill ph-star"></i>
                        <i class="ph-fill ph-star"></i>
                        <i class="ph-fill ph-star"></i>
                        <i class="ph-fill ph-star"></i>
                        <i class="ph-fill ph-star"></i>

                    </div>


                </div>

    
    
    
    `
});


}







