var ProductNameInput = document.getElementById("name")
var ProductPriceInput = document.getElementById("price")
var ProductCategoryInput = document.getElementById("category")
var ProductDescInput = document.getElementById("desc")

var allproduct = []

function getvalues() {
    var product = {
        name: ProductNameInput.value,
        price: ProductPriceInput.value,
        category: ProductCategoryInput.value,
        desc: ProductDescInput.value,
    };
    allproduct.push(product)
    clearinputs()
    display()    
    console.log(allproduct);

}

function clearinputs() {
    ProductNameInput.value = ""
    ProductPriceInput.value = ""
    ProductCategoryInput.value = ""
    ProductDescInput.value = ""
}

function display() {
    var cartoona = ""
    for (var i = 0; i < allproduct.length; i++) {
        cartoona += `
        <div class="col-md-3 g-5">
        <div class="bg-info">
            <img src="./starry-night-over-meadow-with-tree-silhouette-and-mountain-vector.jpg" class="w-100"
                alt="">
            <figcaption class="p-2">
                <h6>Product Name : ${allproduct[i].name}</h6>
                <h6>Product Price : ${allproduct[i].price}</h6>
                <h6>Product Category : ${allproduct[i].category}</h6>
                <h6>Product Desc : ${allproduct[i].desc}</h6>
                <button class="btn btn-warning">Update</button>
                <button class="btn btn-danger">Delete</button>
            </figcaption>

        </div>

    </div>`

    }

    document.getElementById("demo").innerHTML = cartoona
}
