// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts


// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(data => {
//
//          let posts = document.getElementsByClassName('posts')[0];
//             for (const postElement of data) {
//                     let divPost = document.createElement('div');
//                     divPost.innerText = `
//                         ID: ${postElement.id}
//                         Title: ${postElement.title}
//                         Body: ${postElement.body}
//                     `;
//                     divPost.style.border = '5px solid pink';
//                     divPost.style.marginTop = '20px';
//                     divPost.style.background = 'black';
//                     divPost.style.color = 'white'
//                     divPost.style.width = '220px';
//                     posts.appendChild(divPost);
//
//             }
//     });

// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments


fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(data => {

        let comments = document.getElementsByClassName('comments')[0];
        for (const comment of data) {
            let divComment = document.createElement('div');
            divComment.innerText =`
                 ID: ${comment.id}
                 NAME: ${comment.name}
                 EMAIL: ${comment.email}
                 Body: ${comment.body}
                    `;
            divComment.style.border = '5px solid pink';
            divComment.style.marginTop = '20px'
            divComment.style.background = 'grey';
            divComment.style.color = 'white'
            divComment.style.width = '320px';
            divComment.style.height = '220px';

            comments.appendChild(divComment);
        }


    });