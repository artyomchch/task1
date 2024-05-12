const EMPLOYERS = [
    ['Vladimir', 'Ivanov', '+7 (929) 112-32-12', 'vladimir@amazon.com', 'Amazon', 'Driver'],
    ['Ivan', 'Sidorov', '+7 (921) 123-21-22', 'ivan@gmail.com', 'Spotify', 'Sound Tech.'],
    ['Artyom', 'Kozlov', '+7 (926) 123-56-00', 'art@cat.it', 'Netflix', 'Mobile Dev.'],
    ['Alexander', 'Smirnov', '+7 (999) 343-56-67', 'srt@gmail.com', 'Google', 'Data Analyst']
]


document.addEventListener('DOMContentLoaded', function () {
    
    EMPLOYERS.forEach(function(item){
        let row = document.createElement('tr')
        row.innerHTML = `
        <td>${item[0]}</td>
        <td>${item[1]}</td>
        <td>${item[2]}</td>
        <td>${item[3]}</td>
        <td>${item[4]}</td>
        <td>${item[5]}</td>
        `
        document.querySelector('tbody').append(row)
    })
    let counterEmployers = EMPLOYERS.length
    document.getElementsByClassName('contacts_count')[0].innerHTML = '(' + counterEmployers + ' Contacts)'
    document.getElementsByClassName('count_data')[0].innerHTML = 'All ' + counterEmployers
  });