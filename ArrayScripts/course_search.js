const courses = [
  {
    CourseId: 'PROG100',
    Title: 'Introduction to HTML/CSS/Git',
    Location: 'Classroom 7',
    StartDate: '09/08/22',
    Fee: '100.00'
  },
  {
    CourseId: 'PROG200',
    Title: 'Introduction to JavaScript',
    Location: 'Classroom 9',
    StartDate: '11/22/22',
    Fee: '350.00'
  },
  {
    CourseId: 'PROG300',
    Title: 'Introduction to Java',
    Location: 'Classroom 1',
    StartDate: '01/09/23',
    Fee: '50.00'
  },
  {
    CourseId: 'PROG400',
    Title: 'Introduction to SQL and Databases',
    Location: 'Classroom 7',
    StartDate: '03/16/23',
    Fee: '50.00'
  },
  {
    CourseId: 'PROJ500',
    Title: 'Introduction to Angular',
    Location: 'Classroom 1',
    StartDate: '04/25/23',
    Fee: '50.00'
  }
];

for (let i = 0; i < courses.length; i++) {
  if (courses[i].CourseId == 'PROG200') {
    console.log(`PROG200 starts on `, courses[i].StartDate);
  }
}

for (let i = 0; i < courses.length; i++) {
  if (courses[i].CourseId == 'PROJ500') {
    console.log(`The title of course PROJ500 is`, courses[i].Title);
  }
}

for (let i = 0; i < courses.length; i++) {
  if (+courses[i].Fee <= 50) {
    console.log(courses[i].Title, 'costs <= $50');
  }
}

for (let i = 0; i < courses.length; i++) {
  if (courses[i].Location == 'Classroom 1') {
    console.log(courses[i].CourseId);
  }
}
