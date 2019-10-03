document.addEventListener('DOMContentLoaded', () => {

  const handleFormSubmit = function (event) {
    event.preventDefault();
    // console.log(`form has been submitted ${event.target.title.value}`);
    // const resultParagraph = document.querySelector('#title')
    // resultParagraph.
    // const resultParagraph = document.querySelector('#title');
    // resultParagraph.textContent = event.target.title.value;

    const newDiv = document.createElement('div');
    const readingListDiv = document.querySelector('#reading-list');

    const titleHeading = document.createElement('h3');
    newDiv.appendChild(titleHeading);
    titleHeading.textContent = event.target.title.value;

    const authorHeading = document.createElement('h4');
    newDiv.appendChild(authorHeading);
    authorHeading.textContent = event.target.author.value;

    const categoryParagraph = document.createElement('p');
    newDiv.appendChild(categoryParagraph);
    categoryParagraph.textContent = event.target.category.value;

    readingListDiv.appendChild(newDiv);



  };

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);











  console.log('JavaScript loaded');
});
