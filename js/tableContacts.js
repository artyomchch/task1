const employe1 = {
    firstName: 'Vladimir',
    lastName: 'Ivanov',
    phone: '+7 (929) 112-32-12',
    email: 'vladimir@amazon.com',
    companyName: 'Amazon',
    jobTitle: 'Driver',
  };
 
 const employe2 = {
    firstName: 'Ivan',
    lastName: 'Sidorov',
    phone: '+7 (921) 123-21-22',
    email: 'ivan@gmail.com',
    companyName: 'Spotify',
    jobTitle: 'Sound Tech.',
  }; 
  
const employe3 = {
    firstName: 'Artyom',
    lastName: 'Kozlov',
    phone: '+7 (921) 145-12-23',
    email: 'art@cat.it',
    companyName: 'Netflix',
    jobTitle: 'Mobile Dev.',
  }; 
  
  const employe4 = {
    firstName: 'Alexander',
    lastName: 'Smirnov',
    phone: '+7 (999) 343-56-67',
    email: 'srt@gmail.com',
    companyName: 'Google',
    jobTitle: 'Data Analyst',
  };   

const EMPLOYERS = [employe1, employe2, employe3, employe4]


  
  
document.addEventListener('DOMContentLoaded', function () {
    
    
    EMPLOYERS.forEach(item => {
        let row = document.createElement('tr')
        row.innerHTML = Object.values(item).reduce((res, value) => {
            return res + `<td>${value}</td>`
        }, '')
        document.querySelector('tbody').append(row)
    })
 
    let counterEmployers = EMPLOYERS.length
   
    document.querySelector('.count_data').innerHTML = 'All ' + counterEmployers
    document.querySelector('.contacts_count').innerHTML = '(' + counterEmployers + ' Contacts)'
    
    
  });