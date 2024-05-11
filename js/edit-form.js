const employe1 = {
  firstName: 'Artyom',
  lastName: 'Kozlov',
  phone: '+7 (921) 145-12-23',
  email: 'art@cat.it',
  companyName: 'Yandex',
  jobTitle: 'Developer',
};

function setValue() {
  document.getElementById('firstName').value = employe1.firstName;
  document.getElementById('lastName').value = employe1.lastName;
  document.getElementById('phone').value = employe1.phone;
  document.getElementById('email').value = employe1.email;
  document.getElementById('company_name').value = employe1.companyName;
  document.getElementById('job_title').value = employe1.jobTitle;
}

console.log(
  employe1.lastName + ' ' + employe1.firstName + ', ' + employe1.jobTitle
);

document.addEventListener('DOMContentLoaded', function () {
  setValue();

  document.querySelector('.button_save').addEventListener('click', () => {
    document.querySelector('.success_container').style.display = 'block';
    document.querySelector('.panel_contact').style.display = 'none';
    console.log('click');
  });
  
});
