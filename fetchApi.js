const aboutUs = document.getElementById("AboutLink");
const content = document.getElementById("content");
const ContactUsLink = document.getElementById("ContactUsLink");
const originalContent = content.innerHTML;
aboutUs.addEventListener("click", async (e) => {
  e.preventDefault();
  content.innerHTML = `
    <div class="loader">
      Loading...
    </div>
  `;
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    content.innerHTML = `<section class="AboutUs">
    <div class="AboutUsContainer">
    <h1>About us</h1>
    <h2>${data.title}</h2>
    <p>${data.body}</p>
    </div>
    
    </section>`;
  } catch (error) {
    content.innerHTML = `
      <p>${error.message}</p>
    `;
  }
});

ContactUsLink.addEventListener("click", (e) => {
  e.preventDefault();
  content.innerHTML = originalContent;
});
