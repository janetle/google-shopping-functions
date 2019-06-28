
/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */


function getItemsCount(itemData) {
 return itemData.items.length;
}

 var getItems= function(itemData){

    return itemData.items

 }
 var items = getItems(products);
 console.log(items);

 var getItemsByBrand = function(items, brand){
    var selectedItems = [];
    for (let i =0; i < items.length; i++){
      if ( items[i].product.brand === brand){
        selectedItems.push(items[i]);

      }

    }

     console.log(selectedItems);

 }
      getItemsByBrand(items,"Nikon");

 var getItemsByAuthors = function(items, author){
    var selectedAuthors = [];
    for (let i =0; i < items.length; i++){
      if ( items[i].product.author.name === author){
        selectedAuthors.push(items[i]);
        console.log(selectedAuthors)
      }
    }
  }
      getItemsByAuthors(items, "Abt Electronics & Appliances",)


 var getAvailableProducts = function(items){
    var availableProducts= [];
    for (let i =0; i < getItemsCount(products); i++){
      if ( items[i].product.inventories[0].availability === "inStock"){
        availableProducts.push(items[i]);

      }

    }
    console.log(availableProducts);

 }
 getAvailableProducts(items);

// getItemsByBrand(items, "Sony")
 var getItemsCount = function(itemData) {
  return itemData.items.length;
}

/*
 * Define and use your functions here
 */

// output item count using the getItemsCount function
// console.log('Item Count: ' + getItemsCount(products));
// console.log(getItems(products));


console.log("hello script js");

var inputHappened = function(currentInput){
  console.log( currentInput );
  display( "WOW SOMETHING HAPPENED" );
};
