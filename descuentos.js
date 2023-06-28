const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuentos);


// const arrayUObject = undefined;//

/* const couponObj = {
    nerfe5: 30,
    nerfe4: 20,
    nerfe3: 10
}; */


const couponList= [];
couponList.push({
    name: 'nerfe5',
    discount: 30,
});
couponList.push({
    name: 'nerfe4',
    discount: 25,
});
couponList.push({
    name: 'nerfe3',
    discount: 20,
});
couponList.push({
    name: 'nerfe2',
    discount: 15,
});


function calcularPrecioConDescuentos(){
    //(P * (100 - D) / 100) 
    const price = inputPrice.value;
    const coupon = inputCoupon.value;

    let discount;

    if (!price || !coupon){
        pResult.innerText = 'CHANCLA por favor llena el formulario';
        return;
    }

    function isCouponInArray(couponElement){  //{name, discount}
        return couponElement.name == coupon;
    }

    const couponInArray = couponList.find(isCouponInArray); //[{}]

    if(couponInArray){
        discount = couponInArray.discount
    }else{
        pResult.innerText = 'El cupón no es valido';
        return;
    }

    console.log({coupon,
    discount,
    couponInArray,
    couponList});


    /* 
    if(couponObj[coupon]){
    discount = couponObj[coupon] ;
    }else{
        pResult.innerText = 'El cupón no es valido';
        return;
     */





/*     
    switch (coupon){
        case 'Nerfe5':
        discount = 30;
        break;
        case 'Nerfe4':
        discount = 20;
        break;
        default:
          pResult.innerText = 'El cupón no es valido';
        return;
    } */
    
    const newPrice = (price * (100 - discount)) / 100;
        

    pResult.innerText = 'El precio aplicando el cupón es $' + newPrice;
};


