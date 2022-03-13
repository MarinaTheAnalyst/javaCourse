
// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(data => {

        let users = document.createElement('div');
        users.classList.add('users');
        for (const user of data) {
            let divUser = document.createElement('div');
            divUser.classList.add('divUser');
            divUser.innerHTML = `
                    <h2>User ID: ${user.id}</h2>
                    <h3>NAME: ${user.name}</h3>
                    <h4>USERNAME: ${user.username}</h4>
                    <h4>EMAIL: ${user.email}</h4>
                    <h4>WEBSITE: ${user.website}</h4>
            `;
            divUser.style.background = 'grey';
            divUser.style.color = 'deeppink';
            divUser.style.border = '4px solid deeppink';
            divUser.style.marginTop = '25px';
            divUser.style.width = '320px';


            let button = document.createElement('button');
            button.innerText = "verify User's Post!";

            button.onclick = (id) => {
                fetch('https://jsonplaceholder.typicode.com/users/' + user.id + '/posts')
                    .then(value => value.json())
                    .then(posts => {

                        for (const post of posts) {
                            if (user.id === post.userId) {
                                let divPosts = document.createElement('div');
                                divPosts.classList.add('divPosts');
                                divPosts.innerHTML = `
                                    <h2>Post ID: ${post.id}</h2>
                                    <h3>TITLE: ${post.title}</h3>
                                    <h3>BODY: ${post.body}</h3> 
                                `;
                                divPosts.style.background = 'mediumspringgreen';
                                divPosts.style.color = 'sandybrown';
                                divPosts.style.border = '4px solid sandybrown';
                                divPosts.style.marginTop = '15px';
                                let buttonPost = document.createElement('button');
                                buttonPost.innerText = 'Comments';

                                buttonPost.onclick = (id) => {
                                    fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
                                        .then(value => value.json())
                                        .then(comments => {

                                            for (const comment of comments) {

                                                if (post.id === comment.postId) {
                                                    let divCardComments = document.createElement('div');
                                                    divCardComments.classList.add('cardComments');
                                                    divCardComments.innerHTML = `
                                        <h2>Comment ID: ${comment.id}</h2>
                                        <h3>Name: ${comment.name}</h3>
                                        <h4>Email: ${comment.email}</h4>
                                        <h5>Body: ${comment.body}</h5>
                                        `;
                                                    divCardComments.style.background = 'mistyrose';
                                                    divCardComments.style.color = 'magenta';
                                                    divCardComments.style.border = '2px solid magenta';
                                                    divCardComments.style.marginTop = '10px';

                                                    divPosts.appendChild(divCardComments)
                                                }
                                                buttonPost.disabled = true;
                                            }

                                        });



                                }

                                divUser.append(divPosts, buttonPost);
                            }


                        }

                    })
            }



            divUser.appendChild(button);
            users.appendChild(divUser);
            document.body.appendChild(users);
        }

    });