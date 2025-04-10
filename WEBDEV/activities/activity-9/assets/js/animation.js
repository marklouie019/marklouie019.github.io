// CONTENT ANIMATION ON SCROLL
const observerOptions = {
    threshold: 0.5,
};

function handleEntries(entries, observer) {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
           
            entry.target.classList.add("animated");
            entry.target.style.transitionDelay = `${index * 200}ms`; 
            observer.unobserve(entry.target); 
        }
    });
}

const observer = new IntersectionObserver(handleEntries, observerOptions);

document.querySelectorAll(".animate-on-scroll").forEach(element => {
    observer.observe(element);
});
