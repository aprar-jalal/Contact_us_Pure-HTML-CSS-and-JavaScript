const aboutUs = document.getElementById("AboutLink");
const aboutPage = document.getElementById("AboutUS");
const contactPage = document.getElementById("content");
const ContactUsLink = document.getElementById("ContactUsLink");
aboutUs.addEventListener("click", async (e) => {
  e.preventDefault();
  contactPage.style.display = "none";
  aboutPage.style.display = "block";
  aboutPage.innerHTML = `
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
    aboutPage.innerHTML = `<section class="AboutUs">
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
  contactPage.style.display = "block";
  aboutPage.style.display = "none";
});
