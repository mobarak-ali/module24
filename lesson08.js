function postToServer() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const postInfo = { title: title, content: content, id:191 };

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(postInfo),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json))
        // .catch(error => console.log('Opps!'));

    // reset input value
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
}