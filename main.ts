// weather forcast:
import inquirer from "inquirer";
let city = await inquirer.prompt([
  {
    name: "City",
    type: "list",
    message: "Select your city",
    choices: ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"],
  },
]);
let karachiWeather = [
  "37 degree Centigrade",
  "37 degree Centigrade",
  "36 degree Centigrade",
  "36 degree Centigrade",
  "36 degree Centigrade",
  "37 degree Centigrade",
  "36 degree Centigrade",
  "37 degree Centigrade",
  "38 degree Centigrade",
  "37 degree Centigrade",
];
let lahoreWeather = [
  "39 degree Centigrade",
  "39 degree Centigrade",
  "37 degree Centigrade",
  "36 degree Centigrade",
  "32 degree Centigrade",
  "29 degree Centigrade",
  "30 degree Centigrade",
  "32 degree Centigrade",
  "33 degree Centigrade",
  "35 degree Centigrade",
];
let islamabadWeather = [
  "37 degree Centigrade",
  "38 degree Centigrade",
  "36 degree Centigrade",
  "33 degree Centigrade",
  "29 degree Centigrade",
  "29 degree Centigrade",
  "31 degree Centigrade",
  "32 degree Centigrade",
  "33 degree  Centigrade",
  "34 degree Centigrade",
];
let quettaWeather = [
  "101 degree Farenhite",
  "100 degree Farenhite",
  "100 degree Farenhite",
  "99 degree Farenhite",
  "99 degree Farenhite",
  "93 degree Farenhite",
  "90 degree Farenhite",
  "91 degree Farenhite",
  "91 degree Farenhite",
  "91 degree Farenhite",
];
let peshawarWeather = [
  "106 degree Farenhite",
  "104 degree Farenhite",
  "102 degree Farenhite",
  "93 degree Farenhite",
  "85 degree Farenhite",
  "87 degree Farenhite",
  "91 degree Farenhite",
  "94 degree Farenhite",
  "95 degree Farenhite",
  "97 degree Farenhite",
];

if (city.City == "Karachi") {
  console.log(`Weather of Karachi for next 10 days ${karachiWeather}`);
} else if (city.City == "Lahore") {
  console.log(`Weather of Lahore for next 10 days ${lahoreWeather}`);
} else if (city.City == "Islamabad") {
  console.log(`Weather of Islamabad for next 10 days ${islamabadWeather}`);
} else if (city.City == "Quetta") {
  console.log(`Weather of Quetta for next 10 days ${quettaWeather}`);
} else if (city.City == "Peshawar") {
  console.log(`Weather of Peshawar for next 10 days ${peshawarWeather}`);
}
