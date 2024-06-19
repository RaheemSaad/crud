var bookMark = document.getElementById("nameInput")
var site = document.getElementById("siteInput")

var allInputs;

if (localStorage.getItem("allInputs") != null) {
    allInputs = JSON.parse(localStorage.getItem("allInputs"))
    display()
}
else {
    allInputs = [];
}

function getValue() {
    if (validation() == true) {
        var input = {
            nameInput: bookMark.value,
            siteInput: site.value,
        };
        allInputs.push(input)
        localStorage.setItem("allInputs", JSON.stringify(allInputs))
        display()
        clearInput()

    }

}

function clearInput() {
    bookMark.value = null,
        site.value = null
};


function display() {
    var cartoona = ""
    for ( i = 0; i < allInputs.length; i++) {
        cartoona += `
    <tr>
    <td>${i + 1}</td>
    <td>${allInputs[i].nameInput}</td>
    <td><button class="btn btn-success" onclick="visitSite(${i})"><i class="fa-regular fa-eye"></i> Visit</button></td>
    <td><button class="btn btn-danger" onclick="deleteItem(${i})"><i class="fa-solid fa-trash"></i> Delete</button></td>
</tr>
    `
    }
    document.getElementById("stock").innerHTML = cartoona;

}

function deleteItem(index) {
    allInputs.splice(index, 1)
    localStorage.setItem("allInputs", JSON.stringify(allInputs))
    display()
    
}

function validation() {
    var regexName = /[A-Z|a-z]{3,20}/
    var regexSite = /^https/ 
    if (regexName.test(bookMark.value) == true && regexSite.test(site.value) == true) {
        return true;
    }
    alert("Please enter at least 3 characters and a valid URL stating with https")
    return false;
}

function visitSite(index) {
    open(allInputs[index].siteInput);
    
}