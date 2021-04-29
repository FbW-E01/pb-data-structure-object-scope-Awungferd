//Create the following object and create a method that prints the following:
//"John smith is a student in class 12"
const student = {
  firstName: "John",
  lastName: "Smith",
  class: 12,
};
console.log(
  `${student.firstName} ${student.lastName} is a student in class ${student.class}`
);
/**3. Create a person object. Include the person's first and last name, age, 
job, city etc. Create a method to print data from the object e.g. "John 
Smith is a 41 year old engineer living in France".
 */

const personProfile = {
  firstName: "Thomas",
  lastName: "Sankara",
  job: "President",
  country: "Burkina Faso",
  birth: 1949,
  died: 1987,
  diedBy: "Assassination",
  profileText() {
    let age = personProfile.died - personProfile.birth;
    console.log(
      `${personProfile.firstName} ${personProfile.lastName} was the ${personProfile.job} of the country of ${personProfile.country}. Born in ${personProfile.birth}, he died in ${personProfile.died} by ${personProfile.diedBy} at the age of ${age}`
    );
  },
};

personProfile.profileText();
let counter = 0
for (const prop in personProfile) {
 counter++
}
console.log(counter)
