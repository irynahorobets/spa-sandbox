import { registerApplication, start, navigateToUrl } from 'single-spa';

const microfrontends = [
    {
        name: 'app1',
        src: 'app1',
        url: '/app1',
    },
    {
        name: 'app2',
        src: 'app2',
        url: '/app2',
    }
];

function registerMicrofrontend(name, src, url) {
    return registerApplication({
        name,
        app: () => System.import(src),
        activeWhen: url,
    });
}

microfrontends.forEach(({ name, src, url }) => {
    registerMicrofrontend(name, src, url);
});

start({
    urlRerouteOnly: false
});

window.addEventListener('single-spa:routing-event', () => {
    console.log('single-spa:routing-event');
});

function findMatchingPattern(microfrontends, currentLinkUrl) {
    return microfrontends.find(({ url }) => {
        return currentLinkUrl === url;
    });
}

function initNavigation() {
    // Event delegation to handle dynamic links.
    // This ensures that all anchor tags, including those added after page load, are handled.
    document.body.addEventListener('click', event => {
        const linkElement = event.target.closest('a');

        if (!linkElement) return;

        let currentLinkUrl = linkElement.getAttribute('href');

        console.log('currentLinkUrl', currentLinkUrl);

        const matchingPattern = findMatchingPattern(microfrontends, currentLinkUrl);

        if (matchingPattern) {
            event.preventDefault();
            navigateToUrl(currentLinkUrl);
        }
    });
}

initNavigation();