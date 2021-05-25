const maxPages = 5;


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

    const modalHead = document.getElementsByClassName("modal-head")[0];
    console.log(selected)
    if (selected == null) {
        okBtn.style.display = "block";
        continueBtn.style.display = "none";
        modalHead.style.color = "red";
        modalHead.innerHTML = "Error";
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
            modalHead.innerHTML = "Correct";
            modalHead.style.color = "";
            showModal(correctMsg);
        } else {
            modalHead.innerHTML = "Incorrect";
            modalHead.style.color = "";
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
