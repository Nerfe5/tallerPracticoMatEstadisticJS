const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuentos);

function calcularPrecioConDescuentos(){
    //(P * (100 - D) / 100) 
    const price = inputPrice.value;
    const discount = inputDiscount.value;

    console.log({price, discount});

    if (!price || !discount){
        console.log('error');
        pResult.innerText = 'CHANCLA por favor llena el formulario';
        return;
    }

    if (discount > 100) {
        pResult.innerText = 'Ajá, ya quisieras, no podemos regalar $$, 😏';
        return;
    }

    const newPrice = (price * (100 - discount)) / 100;

    pResult.innerText = 'El precio con descuento es $' + newPrice;
}


