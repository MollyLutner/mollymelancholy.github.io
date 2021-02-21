
var selected = 0;
const onJobClick = (jobId) => {
    document.querySelectorAll('.job-info').forEach((info) => {
        info.hidden = true;
    });
    
    if (jobId == selected) {
        document.getElementById(0).hidden = false;
        selected = 0;
    } else {
        document.getElementById(jobId).hidden = false;
        selected = jobId;
    }
}
    