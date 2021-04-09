var page = 1;

const showPage = () => {
    document.querySelectorAll(".questions").forEach((question) =>{
        question.hidden=true;
    });
    document.getElementById(page).hidden=false
}
const onNextClick = (maxPages) => {
    if (page < maxPages) {
        page = page + 1;
        showPage();
    }
    
}
const onPrevClick = () => {
    if (page > 1) {
        page = page - 1;
        showPage();
    }
}