

// const id = 1;
// const productName = "Product Apple Watch";
// const rating = 5;

// const product = {
//     id,
//     productName,
//     rating,
// };

// console.log(product);


// const product2 = {
//     description: "Product 2 description",
//     id,
//     productName,
//     rating,
// };

// const getProductTwoDescription = product2.description;

// console.log(getProductTwoDescription);


// const {description} = product2

// console.log(description);

// const array = [1, 2, 3];

// const [arrayFirstElement, arraySecondElement, arrayThirdElement] = array;

// console.log(arrayFirstElement , arraySecondElement, arrayThirdElement);


//  default parametre

// function multi(num1 =1 , num2  = 2) {
//     console.log(num1, num2);
//     return num1 * num2;
// }
// console.log(multi(21));


// const arr1 = [2,5,6];
// const arr2  = [24, 5,6];
// let num = 23;
// let = aa = 34;

// console.log(num,...arr1,aa, ...arr2);

// function getInfo(s,d,...a) {

//     console.log(s, d,a);
//     return "Shubham"
// }

// console.log(getInfo(1,2,3,4));


// Map, filter, find, some, include, indexof, funindex===>


    // const personArray = [
    //     {
    //         name: "Shubham",
    //         age: 21,
    //         country: "India"
    //     },
    //     {
    //         name: "Devend",
    //         age: 23,
    //         country: "Bihar"
    //     },
    //     {
    //         name: "Hariom",
    //         age: 21,
    //         country: "March"
    //     },
    //     {
    //         name: "Nitesh",
    //         age: 23,
    //         country: "Bihar"
    //     },
    // ]

    // let getName = personArray.map((singlePer, index) => {
    //     console.log(singlePer, index);
    //     return  `${singlePer.name}`
        
    // })

    // console.log(getName);

    // let usaPerson = personArray.find((singleper) => {
    //     return singleper.country === 'Bihar';
    // })
    // console.log(usaPerson);
    

    // let bihar = personArray.filter((user) => {
    //     return user.country === 'Bihar'
    // })

    // console.log(bihar);
    

    // let bihar = personArray.some((user) => {
    //    return user.age < 20;
    // })

    // console.log(bihar);
    

    // let EVery = personArray.every((user) => {
    //     return user.age == 21;
    // }) 



    let getListOfproductsElements = document.querySelector('.list-of-products')

    // document.getListOfproductsElements.backgound.style = 'red'

function renderProducts(getProducts) {
    getListOfproductsElements.innerHTML = getProducts.map(singlePRoductsItem => `<p>${singlePRoductsItem.title}</p>`).join(' ');
}

    async function fetchListOfProducts() {
        try{

            const apiResponse = await fetch('https://dummyjson.com/products', {
            method : "GET",
            });

            const result = await apiResponse.json();

            console.log(result);

            if(result?.products?.length > 0) renderProducts(result?.products)
            
        }catch(e) {
            console.log(e);
            
        }
    }
    fetchListOfProducts();