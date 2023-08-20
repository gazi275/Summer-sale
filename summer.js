let flag;

function itemCardHandle(e) {
    const itemsName = e.childNodes[3].childNodes[3].innerText;
    const itemPrice = e.childNodes[3].childNodes[5].childNodes[0].innerText;
    console.log(e.childNodes[3].childNodes[5].childNodes[0].innerText);

    const itemAddField = document.getElementById('itemAdd')
    const itemCreate = document.createElement('li')
    itemCreate.innerText = itemsName;
    itemAddField.appendChild(itemCreate)

    const totalItemPrice = document.getElementById('totalItemPrice')
    const totalPrice = document.getElementById('totalPrice')
    const discount = document.getElementById('discount')

    const price = (parseFloat(totalItemPrice.innerText) + parseFloat(itemPrice)).toFixed(2)
    totalItemPrice.innerText = price;
    totalPrice.innerText = price

    const purchaseBtn = document.getElementById('purchaseBtn')
    const couponApply = document.getElementById('couponApply')
    if (price > 0) {
        purchaseBtn.removeAttribute('disabled')
    }
    if (price >= 200) {
        couponApply.removeAttribute('disabled')
    }

    if (flag === 1) {
        const discountPrice = (parseFloat(totalItemPrice.innerText) * 0.2).toFixed(2)
        discount.innerText = discountPrice;
        totalPrice.innerText = (parseFloat(totalItemPrice.innerText) - discountPrice).toFixed(2)
    }
}

function getValueForCoupon() {
    const value = document.getElementById('coupon').value
    console.log(value);


    document.getElementById('couponApply').addEventListener('click', function () {
        if (value === "SELL200") {
            const totalItemPrice = document.getElementById('totalItemPrice')
            const discount = document.getElementById('discount')
            const totalPrice = document.getElementById('totalPrice')

            const discountPrice = (parseFloat(totalItemPrice.innerText) * 0.2).toFixed(2)

            discount.innerText = discountPrice
            totalPrice.innerText = (parseFloat(totalItemPrice.innerText) - discountPrice).toFixed(2);
            document.getElementById('coupon').value = ''
            flag = 1;
        }

    })




}


// Go HOME

document.getElementById("Home").addEventListener('click', function () {
    document.getElementById('itemAdd').innerHTML = ''
    document.getElementById('totalItemPrice').innerText = '0.00'
    document.getElementById('totalPrice').innerText = '0.00'
    document.getElementById('discount').innerText = '0.00'

    document.getElementById('couponApply').setAttribute('disabled','')
    document.getElementById('purchaseBtn').setAttribute('disabled','')
})