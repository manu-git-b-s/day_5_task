// json object
let resume = {
  name: "Manupriyan B S",
  role: "Software Developer",
  email: "manupriyan722@gmail.com",
  phone: "+91-9344073414",
  location: {
    address: "no 2/c1,4th street siva sakthi nagar,Korattur",
    postalCode: "600080",
    city: "Chennai",
    District: "Chennai",
    State: "Tamilnadu",
  },
  summary:
    "Passionate and highly skilled UI Developer with close to 2 years of experience in creating visually stunning and user-friendly web and mobile interfaces. Proficient in front-end technologies such as HTML, CSS, JavaScript, and react.js. Dedicated to delivering pixel-perfect designs and exceptional user experiences. Seeking to contribute my expertise to a dynamic team and drive innovation in UI development",
  technologies: {
    frontEndTechnologies: ["html", "css", "javascript", "typescript"],
    uiFrameworks: ["React js", "Next js"],
    versionControl: "git",
    uiTestingLibraries: ["jest", "react tesing library"],
    stateManagement: "redux toolkit",
    reactComponentLibraries: "material ui",
  },
  education: {
    college: "Ramakrishna mission vivekananda college",
    degree: "B.sc Computer science",
    duration: "2016-2019",
    cgpa: "6.5",
  },
  languages: ["Tamil , English"],
  interest: ["Playing badminton", "Reading crime novels"],
  certifications: "Next js complete course on udemy",
};

// Using for loop
console.log("Using for loop");
const keys = Object.keys(resume);
for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  console.log(`${key} : ${resume[key]}`);
}

// Using for in loop
console.log("Using for in loop");
for (let key in resume) {
  console.log(`${key} : ${resume[key]}`);
}

// Using for of loop
console.log("Using for of loop");
const forOfKey = Object.keys(resume);
for (let key of forOfKey) {
  console.log(`${key} : ${resume[key]}`);
}

// Using forEach loop
console.log("Using forEach loop");
const forEachKeys = Object.keys(resume);
forEachKeys.forEach((key) => {
  console.log(`${key} : ${resume[key]}`);
});
