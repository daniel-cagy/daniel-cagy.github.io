async function include(elemnt, file) {
    const response = await fetch(file);
    const html = await response.text();
    elemnt.innerHTML = html;
}

window.addEventListener("DOMContentLoaded", async () => {
    const main_nav = document.getElementById("main-nav");
    const vert_nav = document.getElementById("vert-nav");
    const footer = document.getElementById("footer");

    const promises = [];
    if (main_nav) promises.push(include(main_nav, "partials/main_nav.html"));
    if (vert_nav) promises.push(include(vert_nav, "partials/vert_nav.html"));
    if (footer) promises.push(include(footer, "partials/footer.html"));

    await Promise.all(promises);

    window.dispatchEvent(new Event('includes:loaded'));
});