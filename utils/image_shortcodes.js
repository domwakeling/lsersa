const Image = require("@11ty/eleventy-img");

const heroImage = async (src, alt) => {
    try {
        console.log('generating img:', src.substring(0, 50));
        const metadata = await Image(src, {
            widths: [500, 1000, 2000],
            formats: ["webp", "jpeg"],
            outputDir: "./_site/img/hero/",
            urlPath: "/img/hero/"
        });
        const attributes = {
            alt: alt,
            class: "hero_image",
            sizes: "(min-width: 900px) 2000x100vw",
            loading: "eager",
            decoding: "async"
        }
        return Image.generateHTML(metadata, attributes);
    } catch (e) {
        console.error(e.message);
        return '';
    }
}

const socialImage = async (src, alt) => {
    try {
        console.log('generating img:', src.substring(0, 50));
        const metadata = await Image(src, {
            widths: [100],
            formats: ["webp", "png"],
            outputDir: "./_site/img/social/",
            urlPath: "/img/social/"
        });
        const attributes = {
            alt: alt,
            style: 'width: 50px; height: auto',
            loading: "eager",
            decoding: "async"
        }
        return Image.generateHTML(metadata, attributes);
    } catch (e) {
        console.error(e.message);
        return '';
    }
}

const sponsorImage = async(src, alt) => {
    try {
        console.log('generating img:', src.substring(0, 50));
        const metadata = await Image(src, {
            widths: [300,400],
            formats: ["webp", "png"],
            outputDir: "./_site/img/sponsors/",
            urlPath: "/img/sponsors/"
        });
        const attributes = {
            alt: alt,
            class: 'sponsor-image',
            sizes: "(max-width: 700px) 300px, 400px",
            loading: "lazy",
            decoding: "async"
        }
        return Image.generateHTML(metadata, attributes);
    } catch (e) {
        console.error(e.message);
        return '';
    }
}

const navbarLogo = async(src) => {
    try {
        console.log('generating img:', src.substring(0, 50));
        const metadata = await Image(src, {
            widths: [70],
            formats: ["webp", "png"],
            outputDir: "./_site/img/logos/",
            urlPath: "/img/logos/"
        });
        const attributes = {
            alt: "LSERSA",
            class: 'brand-image',
            loading: "eager",
            decoding: "async"
        }
        return Image.generateHTML(metadata, attributes);
    } catch (e) {
        console.error(e.message);
        return '';
    }
}

module.exports = {
    heroImage,
    navbarLogo,
    socialImage,
    sponsorImage
}