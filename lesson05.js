// fetch('https://jsonplaceholder.typicode.com/todos/1')
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  // .then(json => console.log(json))
  .then(json => displayUser(json))


  function displayUser(users){
    // console.log('users', users);
    const userName = users.map((user) => {
      const ol = document.getElementById('users');
      const li = document.createElement('li');
      li.innerText =  user.username;
      ol.appendChild(li);
    });

    // function user (user){
    //   user.username
    // }

    // console.log('Name: ', userName);
  }
  