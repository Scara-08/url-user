document.addEventListener('https://jsonplaceholder.typicode.com/users/${userId}', function () {
    const userId= document.getElementById('userId')
    const Button = document.getElementById('Button');
    const NameElement = document.getElementById('Name');
    const UsernameElement = document.getElementById('Username');
    const userPhoneElement = document.getElementById('userPhone');
  
    Button.addEventListener('click', fetchData);
    userId.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        fetchData();
      }
    });
  
    function fetchData() {
      const userId = userId.value;
  
      if (!userId || isNaN(userId) || userId < 1 || userId > 10) {
        alert('Введите число от 1 до 10');
        return;
      }
  
      const apiUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
  
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)//( либо apiUrl)
        .then(response => response.json())
        .then(data => {
          NameElement.textContent = data.name;
          UsernameElement.textContent = data.username;
          userPhoneElement.textContent = data.phone;
        })
        .catch(error => console.error('Ошибка при запросе данных:', error));
    }
  });



















  