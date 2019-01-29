var tipCalculatorForm = document.querySelector("#tipCalculatorForm");

var billInput = document.querySelector("#bill");
var serviceScore = document.querySelector("#serviceScore");
var tipInput = document.querySelector("#tip");

var resultField = document.querySelector("div.result");
resultField.setAttribute("style", "display:none;");

tipCalculatorForm.addEventListener("submit", (e) => {

    // if there are .alert-label remove
    removeAlertLabel();

    // Input empty control
    if(billInput.value === ""){ createAlertLabel("Boş geçilemez.", billInput) }
    if(serviceScore.value === "0"){ createAlertLabel("Boş geçilemez.", serviceScore) }
    if(tipInput.value === ""){ createAlertLabel("Boş geçilemez.", tipInput) }


    // Calculator tip
    var result = (billInput.value*serviceScore.value)/tipInput.value;    
    
    // Control div.result span
    checkResultSpan();   

    resultField.setAttribute("style", "display:block;");

    // create div.result span element with result
    createResultSpan(result);   

    e.preventDefault();
});

function removeAlertLabel(){
    var alertLabel = document.querySelectorAll(".alert-label");
    
    alertLabel.forEach(function(label){
        label.remove();
    });
}
function checkResultSpan(){
    var isThereResultSpan = document.querySelector(".result span");
    if(isThereResultSpan){
        isThereResultSpan.remove();
    }
}
function createResultSpan(result){
    var resultSpan = document.createElement("span");
    resultSpan.appendChild(document.createTextNode(`${result} $`));
    
    resultField.appendChild(resultSpan);
}
function createAlertLabel(alert, child){
    var alertLabel = document.createElement("label");
    alertLabel.className = "alert-label";
    alertLabel.textContent = alert;

    child.parentElement.appendChild(alertLabel);
}