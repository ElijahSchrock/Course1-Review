let animals = document.querySelectorAll(".animal");
let highest = {}

let dogVotesCell = document.querySelector("#doggo-votes");
let dogVotes = localStorage.getItem("dog-votes");
    if (dogVotes) {
        dogVotesCell.textContent = dogVotes;
    };
let dogVoteBtn = document.createElement("button");
    dogVoteBtn.textContent = "Vote For Doggo!";
    animals[0].append(dogVoteBtn);
    dogVoteBtn.addEventListener("click", function() {
        let dogVotesCount = parseInt(dogVotesCell.textContent);
        dogVotesCount = dogVotesCount + 1;
        dogVotesCell.textContent = dogVotesCount;
        console.log(dogVotesCount);
        localStorage.setItem("dog-votes", dogVotesCount);
    });
let catVotesCell = document.querySelector("#catto-votes");
let catVotes = localStorage.getItem("cat-votes");
    if (catVotes){
        catVotesCell.textContent = catVotes;
    };
let catVoteBtn = document.createElement("button");
    catVoteBtn.textContent = "Vote For Catto!";
    animals[1].append(catVoteBtn);
    catVoteBtn.addEventListener("click", function() {
        let catVotesCount = parseInt(catVotesCell.textContent);
        catVotesCount = catVotesCount + 1;
        catVotesCell.textContent = catVotesCount;
        localStorage.setItem("cat-votes", catVotesCount);
    });
let fishVoteCell = document.querySelector("#fish-votes");
let fishVotes = localStorage.getItem("fish-votes");
    if (fishVotes) {
        fishVoteCell.textContent = fishVotes;
    };
let fishVoteBtn = document.createElement("button");
    fishVoteBtn.textContent = "Vote For Fish Gold!";
    animals[2].append(fishVoteBtn);
    fishVoteBtn.addEventListener("click", function() {
        let fishVotesCount = parseInt(fishVoteCell.textContent);
        fishVotesCount = fishVotesCount + 1;
        fishVoteCell.textContent = fishVotesCount;
        localStorage.setItem("fish-votes", fishVotesCount);
    });
let petVotes = [
    {name:"doggo", votes: dogVotes},
    {name:"catto", votes: catVotes},
    {name:"fish", votes: fishVotes}
];

highest = petVotes [0];
let favoritePetBtn = document.createElement("button");
    favoritePetBtn.textContent = "Click Me To See The Most Voted For Pet of ALL Time!";
    document.body.append(favoritePetBtn);
    favoritePetBtn.addEventListener("click", function() {
        for(let i = 0; i < petVotes.length; i++){
            if (petVotes[i].votes > highest.votes){
                highest = petVotes[i]
            }
            
        }
        console.log(highest);
        window.alert(highest);
    });