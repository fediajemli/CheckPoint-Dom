// const count = document.getElementsByClassName('fas');
// const quantity = document.getElementsByClassName('quantity');

// let q = 0;


// for (let c of count){
    //     c.addEventListener('click', () => {
        //         if (c.classList === 'fa-plus-cicle' ){
            //             q += 1;
            //         } else if (c.)
            //     })
            // }
let products = [];
const totalPrice = 0;
const plusBtns = document.getElementsByClassName('fa-plus-circle');
const minusBtns = document.getElementsByClassName('fa-minus-circle');
const totalElem = document.getElementsByClassName('total')[0];
const cards = document.getElementsByClassName('qty-container');
const items = document.querySelectorAll('.item');
let isLiked = false;


const deleteBtns = document.querySelectorAll('.fa-trash-alt');
const hearts = document.querySelectorAll('.fa-heart');


const extractProductData = () => {
    products =[];
    items.forEach((item) => {
        const qtyElem = item.querySelector('.quantity');
        const unitPriceElem = item.querySelector('.unit-price');
        const unitPrice = +unitPriceElem.textContent.split(' ')[0];
        const qty = +qtyElem.textContent ;
        products.push({price : unitPrice, qty,});
    });
   
}; 
const calculateTotal = (items) => {
    let total = 0;
    for(let item of items){
        total += item.price * item.qty;  
    }return total;
};

const displayTotal = () => {
    extractProductData ();
    const total = calculateTotal(products);
    totalElem.textContent = '$' + total.toFixed(2);
};

const removeProducts = () => {
    for(let i = 0; i < deleteBtns.length ; i++){
        deleteBtns[i].addEventListener('click', () => {
            items[i].remove();
        });
    }
}
removeProducts();
const likeProducts = () => {
    for(let i = 0; i <hearts.length ; i++){
        hearts[i].addEventListener('click', () => {
          hearts[i].classList.toggle('like');
           
        })
    };
}
likeProducts();
for (let i=0; i< cards.length; i++){
    plusBtns[i].addEventListener('click', () => {
        //  CONVETRIR STRING en number x = paresInt('4') ou +('4') ou number('4')
        const qtyElm = cards[i].querySelector('.quantity');
       let qty = parseInt(qtyElm.textContent) + 1;
       qtyElm.textContent = qty;
    //    const unitPrice = parseInt(cards[i].querySelector('.unit-price').textContent);
    //    totalPrice += unitPrice;
    //    Total.textContent  = totalPrice;
        displayTotal();
    });
   }

//    console.log(minusBtns);
for (let i=0; i< cards.length; i++){
    minusBtns[i].addEventListener('click', () => {
        //  CONVETRIR STRING en number x = paresInt('4') ou +('4') ou number('4')
        const q = cards[i].querySelector('.quantity');
       
            let qt = parseInt(q.textContent) - 1;
            if (qt<0) return;
            q.textContent = qt;
            displayTotal();
 
    } 
);
}

