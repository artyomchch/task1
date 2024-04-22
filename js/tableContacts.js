const employe1 = {
    firstName: 'Vladimir',
    lastName: 'Ivanov',
    phone: '89211231223',
    email: 'vladimir@mail.ru',
    companyName: 'Amazon',
    jobTitle: 'Developer'
}

function employer (lastName, firstName, companyName) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.companyName = companyName
    return lastName + " " + firstName + ", " + companyName
}

let firstEmployer = employer("Ivanov", "Vladimir", "Developer");
let secondEmployer = employer("Sidorov", "Ivan", "Sound Tech.");
let thirdEmployer = employer("Kozlov", "Artyom", "Journalist");

console.log(firstEmployer)
console.log(secondEmployer)
console.log(thirdEmployer)




// let str = "Hello";
// const str2 = "some text Hi world";
// let str3 = "Hi"
// console.log(str2.indexOf(str3));
// console.log(str.includes(str2))
// console.log(str2.toUpperCase())
// console.log(str2.length)

// let num = 1.234;
// console.log(Math.floor(num));
// console.log(Math.ceil(num));
// console.log(Math.round(num));
// console.log(+num.toFixed(2));

// let str4 = '12.5px';

// console.log(+str4);
// console.log(parseInt(str4));
// console.log(parseFloat(str4));


// console.log(String(true));
// console.log(String('14,5'));
// console.log(String(undefined));


//function getContacts(){
//   let x = document.getElementsByTagName('td');
//   var s = document.getElementById('employers');
//   console.log(s)
//   console.log(x[0])
//   for (let curr = 1; curr < x.length; curr++){
//     console.log(x[curr])
//   }

// let table = document.querySelector('#employers')
// console.log(table.ariaRowIndex.length)
    
    
   
//}

// const employe2 = employe1;
// employe2.firstName = 'Artyom';
// employe2.lastName = 'Kozlov';
// employe2.phone = '89211451223';
// employe2.email = 'art@cat.it';
// employe2.companyName = 'Spotify';

//console.log(employe1);
//console.log(employe2);

//getContacts()