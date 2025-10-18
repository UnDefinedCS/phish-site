function getOS() {
    const userAgent = window.navigator.userAgent;

    if (userAgent.includes('Windows')) return 'Windows';
    if (userAgent.includes('Mac')) return 'macOS';
    if (userAgent.includes('Linux')) return 'Linux';
    if (/Android/i.test(userAgent)) return 'Android';
    if (/iPhone|iPad|iPod/i.test(userAgent)) return 'iOS';

    return 'Unknown';
}

const os = getOS();
const instructText = document.getElementById("instructText");
if (instructText) {
    if (os === "Windows") {
        instructText.innerText = "Hit the clipboard button and hit Win + R and paste and hit enter.";
    } else if (os === "Linux" || os === "macOS") {
        instructText.innerText = "Hit the clipboard button and paste and hit enter in a macOS Terminal or Linux shell prompt.";
    } else {
        instructText.innerText = "Unsupported Host Device! Supported Devices: Windows, Linux, macOS";
    }
}

async function setupCopyables() {
    if (navigator.clipboard) {
        for (const element of document.getElementsByClassName('copyable')) {
            const button = document.createElement('button');
            button.innerHTML = escapeHTML('📋');
            button.setAttribute('aria-label', 'Copy to clipboard');

            let text = ""
            if (os === "Windows") {
                text = "";
                button.onclick = () => {
                    navigator.clipboard.writeText(text);
                    button.innerHTML = escapeHTML('✅');
                    setTimeout(() => button.innerHTML = escapeHTML('📋'), 1000);
                }
            } else if (os === "Linux" || os === "macOS") {
                text = "";
                button.onclick = () => {
                    navigator.clipboard.writeText(text);
                    button.innerHTML = escapeHTML('✅');
                    setTimeout(() => button.innerHTML = escapeHTML('📋'), 1000);
                }
            } else {
                text = "";
                button.onclick = () => {
                    button.innerHTML = escapeHTML('❌');
                    setTimeout(() => button.innerHTML = escapeHTML('📋'), 1000);
                }
            }

            element.appendChild(button);
        }
    }
}

window.addEventListener("DOMContentLoaded", function () {
    setupCopyables();
});

function loadLanguage(lang) {
    if (lang === "en") {
        return;
    } else if (lang === 'en') {
        window.location.assign('/');
    } else {
        window.location.assign('/' + lang);
    }
}

function loadAnchors() {
    anchors.options = {
        placement: 'left',
        visible: 'hover',
    };
    anchors.add('#page > h2, #page > h3, #page > h4, #page > h5, #page > h6');
};

function loadSearch(lang, site) {
    docsearch(Object.assign(
        { searchParameters: { facetFilters: ['site: ' + site] } },
        { initialQuery: new URLSearchParams(window.location.search).get('search') },
        { placeholder: "Search Homebrew" },
        { "apiKey": "e3369d62b2366b374c54b2c5a2835a00", "indexName": "brew_all", "appId": "D9HG3G8GS4", "container": "#search-container" }
    ));
};

let escapeHTML = (identity) => identity;

if (window.trustedTypes && window.trustedTypes.createPolicy) {
    let policy = trustedTypes.createPolicy(
        "forceInner",
        {
            createHTML: (to_escape) => to_escape
        }
    );
    escapeHTML = (html) => policy.createHTML(html);
};