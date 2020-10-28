function updateHeroHeight(id) {
    const div = document.getElementById(id);
    if (window.innerWidth < 768) {
        if (div.style.height) {
            const currentHeight = div.clientHeight;
            const viewHeight = window.innerHeight;
            // const diff = Math.abs(viewHeight - currentHeight);
            const diff = viewHeight - currentHeight;
            if (diff > 100 || diff < 0) {
                div.style.height = `${viewHeight}px`;
            }
        } else {
            const viewHeight = window.innerHeight;
            div.style.height = `${viewHeight}px`;
        }
    } else {
        div.style.height = '';
    }
}

export function updateHeroImageHeight() {
    updateHeroHeight('hero-image');
}

export function updateHeroVideoHeight() {
    updateHeroHeight('hero-video');
}
