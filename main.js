const duaLipaInfo = {
    "artist": "Dua Lipa",
    "birthDate": "August 22, 1995",
    "birthPlace": "London, England",
    "nationality": "British",
    "genres": ["Pop", "Dance", "R&B"],
    "albums": [
      {
        "title": "Dua Lipa",
        "releaseYear": 2017,
        "singles": ["New Rules", "Be the One", "IDGAF"]
      },
      {
        "title": "Future Nostalgia",
        "releaseYear": 2020,
        "singles": ["Don't Start Now", "Physical", "Levitating"]
      }
    ],
    "awards": {
      "grammys": 2,
      "britAwards": 3,
      "mtvAwards": 1
    },
    "socialMedia": {
      "instagram": "@dualipa",
      "twitter": "@DUALIPA"
    }
};

const element1 = document.getElementById("info");

// Creating Heading Tag
const tag = document.createElement("h1");
const heading =  document.createTextNode("---DUA LIPA INFORMATION---");
tag.appendChild(heading);
element1.appendChild(tag);

// Creating Information
const tag1 = document.createElement("p");
const artist = document.createTextNode("Artist: "+ duaLipaInfo.artist);
tag1.appendChild(artist);
element1.appendChild(tag1);

const tag2 = document.createElement("p");
const birthDate = document.createTextNode("Birth Date: "+ duaLipaInfo.birthDate);
tag2.appendChild(birthDate);
element1.appendChild(tag2);

const tag3 = document.createElement("p");
const birthPlace = document.createTextNode("Birth Place: "+ duaLipaInfo.birthPlace);
tag3.appendChild(birthPlace);
element1.appendChild(tag3);

const tag4 = document.createElement("p");
const nationality = document.createTextNode("Nationality: "+ duaLipaInfo.nationality);
tag4.appendChild(nationality);
element1.appendChild(tag4);

const tag5 = document.createElement("p");
const genres = document.createTextNode("Genres: "+ duaLipaInfo.genres);
tag5.appendChild(genres);
element1.appendChild(tag5);

const tag6 = document.createElement("p");
const awards1 = document.createTextNode("Awards :--- Grammys: "+ duaLipaInfo.awards.grammys + " ,");
tag6.appendChild(awards1);
element1.appendChild(tag6);

const awards2 = document.createTextNode(" BitAwards: "+ duaLipaInfo.awards.britAwards+ " ," );
tag6.appendChild(awards2);
element1.appendChild(tag6);

const awards3 = document.createTextNode(" MtvAwards: "+ duaLipaInfo.awards.mtvAwards );
tag6.appendChild(awards3);
element1.appendChild(tag6);

const tag7 = document.createElement("p");
const socialMedia = document.createTextNode("Social Media :--- Instagram: "+ duaLipaInfo.socialMedia.instagram+ " ,");
tag7.appendChild(socialMedia);
element1.appendChild(tag7);

const socialMedia1 = document.createTextNode(" Twitter: "+ duaLipaInfo.socialMedia.twitter);
tag7.appendChild(socialMedia1);
element1.appendChild(tag7);