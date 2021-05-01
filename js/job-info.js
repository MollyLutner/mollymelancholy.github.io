
var selected = 0;
var sticky = 170;
var selectedInfo = null;

const onJobClick = (jobId) => {
    document.querySelectorAll('.job-info').forEach((info) => {
        info.hidden = true;
    });
    
    if (jobId == selected) {
        document.getElementById(0).hidden = false;
        selected = 0;
        selectedInfo = null;
    } else {
        document.getElementById(jobId).hidden = false;
        selected = jobId;
        selectedInfo = document.getElementById(jobId);
    }
    onScroll();
}

window.onscroll = () => {
    onScroll();
}

const onScroll = () => {
    if (selectedInfo != null) {
        if (window.pageYOffset >= sticky) {
            selectedInfo.classList.add("sticky");
        } else {
            selectedInfo.classList.remove("sticky");
        }
    }
}