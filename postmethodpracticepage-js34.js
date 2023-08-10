let btnele = document.getElementById("sendPostRequestBtn");

let requestbodyele = document.getElementById("requestBody");
let requeststatusele = document.getElementById("requestStatus");
let responseele = document.getElementById("httpResponse");
let loadingele = document.getElementById("loading");


function togetoutput() {
    let requestbodyvalue = requestbodyele.value;
    let options = {
        method: "POST",
        headers: {
            "content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 49d55cf904b931e61e7f22f159b95c1acece321417e98c47c0d6314f14bafbb2",
        },
        body: requestbodyvalue
    };
    loadingele.classList.remove("d-none");
    requeststatusele.classList.add("d-none");

    fetch("https://gorest.co.in/public-api/users", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            requeststatusele.classList.remove("d-none");
            loadingele.classList.add("d-none");

            let status = jsonData.code;
            let httpresponse = JSON.stringify(jsonData);
            requeststatusele.textContent = status;
            responseele.textContent = httpresponse;
        });
}
btnele.addEventListener("click", togetoutput);