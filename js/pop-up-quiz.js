const maxPages = 2;


const showModal = (msg, next) => {
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
    const modalText = document.getElementById("modal-text");
    modalText.innerHTML = msg;
}

const hideModal = () => {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}


const onQuestionSubmit = (qId, ans, correctMsg, incorrectMsg) => {
    const form = document.getElementById(qId);
    const formData = new FormData(form);
    const selected = formData.get('q');

    const okBtn = document.getElementById("modal-ok");
    const continueBtn = document.getElementById("modal-continue");

    if (selected == null) {
        okBtn.style.display = "block";
        continueBtn.style.display = "none";
        showModal("Please select an answer!")
    } else {
        if (page >= maxPages) {
            const submitBtn = document.getElementById("modal-submit");
            submitBtn.style.display = "block";
            okBtn.style.display = "none";
            continueBtn.style.display = "none";
        } else {
            okBtn.style.display = "none";
            continueBtn.style.display = "block";
        }

        if (selected == ans) {
            showModal(correctMsg);
        } else {
            showModal(incorrectMsg);
        }
    }
}

var page = 1;

const showPage = () => {
    document.getElementById("questions").childNodes.forEach((question) => {
        question.hidden = true;
    });
    document.getElementById(page).hidden = false;

}
const onNextClick = () => {
    hideModal()
    if (page < maxPages) {
        page = page + 1;
        showPage();
    }
}
