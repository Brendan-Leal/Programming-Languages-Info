const languages = [
    {
        name: 'Ruby',
        description: 'Ruby is a dynamic, reflective, object-oriented, ' +
            'general-purpose programming language. It was designed and developed in the mid-1990s ' +
            'by Yukihiro Matsumoto in Japan. According to its creator, Ruby was influenced by Perl, ' +
            'Smalltalk, Eiffel, Ada, and Lisp. It supports multiple programming paradigms, ' +
            'including functional, object-oriented, and imperative. It also has a dynamic type ' +
            'system and automatic memory management.'
    },

    {
        name: 'JavaScript',
        description: 'JavaScript is a high-level, dynamic, untyped, and interpreted ' +
            'programming language. It has been standardized in the ECMAScript language ' +
            'specification. Alongside HTML and CSS, JavaScript is one of the three core ' +
            'technologies of World Wide Web content production; the majority of websites employ ' +
            'it, and all modern Web browsers support it without the need for plug-ins. JavaScript ' +
            'is prototype-based with first-class functions, making it a multi-paradigm language, ' +
            'supporting object-oriented, imperative, and functional programming styles.'
    },

    {
        name: 'Lisp',
        description: 'Lisp (historically, LISP) is a family of computer programming languages ' +
            'with a long history and a distinctive, fully parenthesized prefix notation. ' +
            'Originally specified in 1958, Lisp is the second-oldest high-level programming ' +
            'language in widespread use today. Only Fortran is older, by one year. Lisp has changed ' +
            'since its early days, and many dialects have existed over its history. Today, the best ' +
            'known general-purpose Lisp dialects are Common Lisp and Scheme.'
    }
];

document.addEventListener("DOMContentLoaded", () => {
    insertContentIntoDOM();

    document.querySelector("#languages").addEventListener("click", event => {
        if (event.target.tagName === "BUTTON") {
            toggleButtonText(event);
            toggleParagraphVisability(event);
        }
    });
});

function insertContentIntoDOM() {
    let names = languages.map(value => value.name);
    let languageContainer = document.querySelector("#languages");

    for (let i = 0; i < names.length; i++) {
        let heading = document.createElement("h2");
        heading.innerHTML = names[i];
        languageContainer.append(heading);

        let paragraph = document.createElement("p");
        paragraph.setAttribute("data-index", i);
        paragraph = makeParagraphPreview(paragraph, i);
        languageContainer.append(paragraph);

        let button = document.createElement("button");
        button.innerHTML = "Show More";
        button.classList.add("more");
        languageContainer.append(button);
    }
}

function toggleParagraphVisability(event) {
    let paragraph = event.target.previousElementSibling;
    let fullParagraphIndex = +paragraph.dataset.index;

    if (event.target.className === "less") {
        let fullParagraph = languages[fullParagraphIndex].description;
        paragraph.innerHTML = fullParagraph;
    } else {
        paragraph = makeParagraphPreview(paragraph, fullParagraphIndex);
    }

}

function toggleButtonText(event) {
    if (event.target.tagName === "BUTTON") {
        if (event.target.getAttribute("class") === "more") {
            event.target.innerHTML = "Show Less";
            event.target.classList.replace("more", "less");
        } else {
            event.target.innerHTML = "Show More";
            event.target.classList.replace("less", "more");
        }
    }
}

function makeParagraphPreview(paragraph, index) {
    let previewText = languages[index].description.slice(0, 120);

    paragraph.innerHTML = previewText + " ...";
    return paragraph;
}