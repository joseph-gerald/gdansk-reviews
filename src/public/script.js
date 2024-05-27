// Vunerable to XSS but not enough time to properly do it
function createBusinessCard(thumbnail, name, description) {
    const template = `
    <img src="${thumbnail}" alt="1">

    <div class="business-content">
        <h2>${name}</h2>
        <p>${description}</p>
    </div>

    <div class="rating">
        <div class="pointer" style="left: 10%;">
            <code>🔥</code>
            <code>4.5</code>
        </div>
    </div>
    `

    const business = document.createElement('div')
    business.innerHTML = template;
    business.classList.add('business');

    return business;
}


