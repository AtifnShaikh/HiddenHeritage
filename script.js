document.addEventListener('DOMContentLoaded', function() {
  const storyForm = document.getElementById('storyForm');
  const preview = document.getElementById('storyPreview');

  storyForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = storyForm.name.value.trim();
    const title = storyForm.storyTitle.value.trim();
    const story = storyForm.storyText.value.trim();
    const file = storyForm.image.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = function(evt) {
        preview.innerHTML = `
          <img src="${evt.target.result}" alt="Story image"><br>
          <h3>${title} <small>by ${name}</small></h3>
          <p>${story}</p>
        `;
      };
      reader.readAsDataURL(file);
    } else {
      preview.innerHTML = `
        <h3>${title} <small>by ${name}</small></h3>
        <p>${story}</p>
      `;
    }

    storyForm.reset();
  });
});
