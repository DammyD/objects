// Question 1
// Using the constructor method, create an InstagramPost() constructor function that takes the properties below as arguments.

function instagramPost(authorHandle, content, imageLink, numberOfViews, numberOfLikes){
    this.authorHandle = authorHandle;
    this.content = content;
    this.imageLink = imageLink;
    this.numberOfViews = numberOfViews;
    this.numberOfLikes = numberOfLikes;
};

// Question 2
// Create 2 Instagram post objects from the constructor function you created above

const firstPost = new instagramPost("alx_africa", "A career for bright minds with big ambitions", "https://data analysis.com/alx-africa.jpg", 1000, 2000);
const secondPost = new instagramPost("Rita Ehi", "How I transition into tech", "https://profile-image.jpg", 500, 200);

console.log(firstPost);
console.log(secondPost);
console.log(firstPost.imageLink);
console.log(secondPost['authorHandle']);

// Question 3a
// Using the factory method, implement a createPerson() factory function that takes name, age and location as arguments. Afterwards, create an object representing Musa from the factory function. 

function createPerson(name, age, location){
    return {
        name: name,
        age: age,
        location: location
    }
};

const Musa = createPerson("Musa Dawodu", 18, "Lekki, Lagos");
console.log(Musa);

// Question 3b
// Also, implement a factory function createJambScores() that takes eng, govt, lit, crk as arguments. Then create an object representing Muse’s JAMB scores. Add the object as a property to Musa object you created above in (a) above

function createJambScores(eng, govt, lit, crk){
    return {
        ENG: eng,
        GOVT: govt,
        LIT: lit,
        CRK: crk
    }
};

Musa.createJambScores = createJambScores(70, 85, 82, 94);
console.log(Musa);

// Question 4
// What are the different ways you can clone an object? Give examples for each of them.

const KDrama1 = {
    title: "Alchemy of Soul",
    genre: "romance, action, fantasy",
    releaseDate: "18th June",
    movieType: "Series(season 1)",
    producer: "Ahn So-jeong",
    leadActors: "Lee Jae-wook, Jung So-min",
    supportingActors: "Jung So-min, Hwang Min-hyun...",
    originalLanguage: "Korean",
    numberOfEpisodes: 30,
}

// 1. Using Object.assign
const KDrama2 = Object.assign({}, KDrama1);
console.log({KDrama1});
KDrama2.title = "Alchemy of Soul 2";
KDrama2.releaseDate = "10th December";
KDrama2.numberOfEpisodes = 10;
KDrama2.movieType = "Series(Season 2)";
console.log({KDrama2});


// 2. Using the spread syntax
const Anime1 = {...KDrama1};
Anime1.title = "Arcane";
Anime1.releaseDate = "6th November, 2021";
Anime1.numberOfEpisodes = 9;
Anime1.producer = "Alex Yee, Christian Linke";
Anime1.leadActors = "Vi, Jinx";
Anime1.supportingActors = "Caitilyn, Jayce, Silco...";
Anime1.genre = "Adventure fiction, Action fiction, Science fantas";
Anime1.originalLanguage = "English Language";
console.log({Anime1});


// 3. Using JSON.parse(JSON.stringify())
const Anime2 = JSON.parse(JSON.stringify(KDrama1));
Anime2.title = "The Sea Beast";
Anime2.releaseDate = "8th July, 2022";
Anime2.numberOfEpisodes = 0;
Anime2.producer = "Jed Schlanger; Chris Williams";
Anime2.leadActors = "Jacob Holland, Maisie Brumble";
Anime2.supportingActors = "Captain Augustus, Sarah Sharpe...";
Anime2.genre = "Adventure fiction, Action fiction";
Anime2.originalLanguage = "English Language";
Anime2.MovieType = "Movie";
console.log({Anime2});


// Question 5
// Using any of the enumeration methods taught in class (for…in  or for..of), log out each of the presidential candidates in this format:
// 'Omoyele Sowore is the presidential candidate of AAC’

const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
 }
 

 for(const party in presidentialCandidates) {
    console.log(`${presidentialCandidates[party]} is the presidential candidate of ${party}`);
 };