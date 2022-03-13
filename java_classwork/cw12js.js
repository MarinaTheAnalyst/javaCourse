// 1. 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(data => {

         let posts = document.getElementsByClassName('posts')[0];
            for (const postElement of data) {
                    let divPost = document.createElement('div');
                divPost.innerHTML = `
                        <h2>ID: ${postElement.id}</h2>
                        <h4> TITLE: ${postElement.title}</h4>
                        Body: ${postElement.body}
                    `;
                    divPost.style.border = '5px solid pink';
                    divPost.style.marginTop = '20px';
                    divPost.style.background = 'black';
                    divPost.style.color = 'white'
                    divPost.style.width = '400px';



                    let button = document.createElement('button');
                    button.innerText = 'Hi there! Check more info';
                    button.style.backgroundColor = 'pink';
                    button.style.marginLeft= '25%';

                button.onclick = (id) => {
                    fetch('https://jsonplaceholder.typicode.com/posts/' + postElement.id + '/comments')
                        .then(response => response.json())
                        .then(comments => {
                            for (const comment of comments) {



                                if (postElement.id === comment.postId) {
                                    let divCardComments = document.createElement('div');
                                    divCardComments.classList.add('postComments');
                                    divCardComments.innerHTML = `
                                        <h3>ID: ${comment.id}</h3>
                                        <h4>Name: ${comment.name}</h4>
                                        <h5>Email: ${comment.email}</h5>
                                        <h6>Body: ${comment.body}</h6>
                                        `;
                                    divCardComments.style.background = 'blue';
                                    divCardComments.style.border= '2px solid red';
                                    divPost.appendChild(divCardComments)
                                }
                                button.disabled = true;
                            }
                        })
                }

                    // divPost.appendChild(button);
                    // posts.appendChild(divPost);
                posts.append(divPost, button);

            }


    });