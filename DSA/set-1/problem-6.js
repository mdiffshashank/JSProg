/**
 *  You have an object, convert it into a string.
 *
 * INPUT : {
 *      firstName:"john",
 *      lastName: "Peter",
 *      project :{
 *          id : 1,
 *          name: "GS"
 *      }
 *  }
 *
 * OUTPUT: "john, peter, 1, GS"
 */

function flatten(person) {
  let output = "";
  Object.keys(person).forEach((k) => {
    if (typeof person[k] === "object") {
      output += flatten(person[k]);
    } else {
      output += person[k] + ",";
    }
  });
  return output.slice(0, -1); //remove extra ,
}

const person = {
  firstName: "john",
  lastName: "Peter",
  project: {
    id: 1,
    name: "GS",
    skills: {
      db: "postgres",
      frontend: "React",
    },
  },
};

console.log(makeString(person));
