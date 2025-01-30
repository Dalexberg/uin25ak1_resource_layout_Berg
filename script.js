document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab");
    const title = document.getElementById("category-title");
    const text = document.getElementById("category-text");
    const resourceLinks = document.getElementById("resource-links");

    const updateContent = (category) => {
        const resource = resources.find(r => r.category === category);

        if (resource) {
            title.textContent = resource.category;
            text.textContent = resource.text;
            resourceLinks.innerHTML = resource.sources
                .map(source => `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`)
                .join('');
        }
    };
  
    updateContent("HTML");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            updateContent(tab.getAttribute("data-category"));
        });
    });
});
