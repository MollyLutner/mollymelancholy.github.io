var page = 1;

const showPage = () => {
    document.getElementById("questions").childNodes.forEach((question) => {
        question.hidden = true;
    });
    document.getElementById(page).hidden = false;

}
const onNextClick = (maxPages) => {
    if (page < maxPages) {
        page = page + 1;
        showPage();
        document.getElementById("prev-btn").disabled = false;
        if (page == maxPages) {
            document.getElementById("nxt-btn").disabled = true;
            document.getElementById("submit").hidden = false;
        }
    }
    
}
const onPrevClick = () => {
    if (page > 1) {
        page = page - 1;
        showPage();
        document.getElementById("nxt-btn").disabled = false;
        document.getElementById("submit").hidden = true;
        if (page == 1) {
            document.getElementById("prev-btn").disabled = true;
        }
    }
}