const academyMembers = [
  {
    memID: 101,
    name: 'Bob Brown',
    films: ['Bob I', 'Bob II', 'Bob III', 'Bob IV']
  },
  {
    memID: 142,
    name: 'Sallie Smith',
    films: ['A Good Day', 'A Better Day']
  },
  {
    memID: 187,
    name: 'Fred Flanders',
    films: ['Who is Fred?', 'Where is Fred?', 'What is Fred?', 'Why Fred?']
  },
  {
    memID: 203,
    name: 'Bobbie Boots',
    films: ['Walking Boots', 'Hiking Boots', 'Cowboy Boots']
  }
];

// console.log('Academy member with id 187');
// for (let i = 0; i < academyMembers.length; i++) {
//   if (academyMembers[i].memID == 187) {
//     console.log(academyMembers[i].name);
//   }
// }

// console.log('Who has been in 3 or more films?');
// function atLeastThreeFilms(actors) {
//   let matching = [];
//   for (let i = 0; i < actors.length; i++) {
//     if (actors[i].films.length >= 3) {
//       matching.push(actors[i]);
//     }
//   }
//   return matching; // ... subset of actors
// }
// const result = atLeastThreeFilms(academyMembers);
// for (let i = 0; i < result.length; i++) {
//   console.log(result[i].name);
// }

/*

Bucket 1          Bucket 2
(source)          (return aka matching)
--------          ---------

Actor 1           Actor 1
Actor 2           Actor 3
Actor 3           Actor 4
Actor 4


*/

// console.log('Who has a name that starts with Bob?');
// for (let i = 0; i < academyMembers.length; i++) {
//   if (academyMembers[i].name.startsWith('Bob')) {
//     console.log(academyMembers[i].name);
//   }
// }

console.log('Who has been in a film that starts with A?');
for (let i = 0; i < academyMembers.length; i++) {
  const actor = academyMembers[i];
  let wasInFilmStartingA = false;
  for (let j = 0; j < actor.films.length; j++) {
    if (actor.films[j].indexOf('A') == 0) {
      wasInFilmStartingA = true;
    }
  }

  if (wasInFilmStartingA) {
    console.log(actor.name);
  }
}
