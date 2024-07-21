const inputUsername = document.getElementById('name');
const inputPost = document.getElementById('post');
const postButton = document.getElementById('post-btn');
const postList = document.getElementById('post-list');

postButton.addEventListener("click", function createPost() {
    const name = inputUsername.value;
    const post = inputPost.value;
    const elementName = document.createElement('h3');
    elementName.textContent = name;
    const elementPost = document.createElement('p');
    elementPost.textContent = post; 
    const postDivElement = document.createElement('div');
    postDivElement.appendChild(elementName);
    postDivElement.appendChild(elementPost);
    postList.appendChild(postDivElement);
    }
);