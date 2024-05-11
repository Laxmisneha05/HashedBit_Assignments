// Array of states in India
const statesInIndia = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
];

// Function to remove names starting with vowels
function removeVowelStart(states) {
    return states.filter(state => !(/[aeiou]/i).test(state[0]));
}

// Remove states starting with vowels
const statesWithoutVowels = removeVowelStart(statesInIndia);

console.log(statesWithoutVowels);


// Output:
// [
//     'Bihar',       'Chhattisgarh',
//     'Goa',         'Gujarat',
//     'Haryana',     'Himachal Pradesh',
//     'Jharkhand',   'Karnataka',
//     'Kerala',      'Madhya Pradesh',
//     'Maharashtra', 'Manipur',
//     'Meghalaya',   'Mizoram',
//     'Nagaland',    'Punjab',
//     'Rajasthan',   'Sikkim',
//     'Tamil Nadu',  'Telangana',
//     'Tripura',     'West Bengal'
//   ]
  