document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        const quantityElement = item.querySelector('.quantity');
        const priceElement = item.querySelector('.price');
        const pricePerItem = parseFloat(priceElement.textContent.substring(1));

        item.querySelector('.adjust-quantity:nth-of-type(1)').addEventListener('click', () => {
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
            updateTotalPrice();
        });

        item.querySelector('.adjust-quantity:nth-of-type(2)').addEventListener('click', () => {
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
                updateTotalPrice();
            }
        });

        item.querySelector('.delete').addEventListener('click', () => {
            item.remove();
            updateTotalPrice();
        });

        item.querySelector('.like').addEventListener('click', () => {
            item.querySelector('.like').classList.toggle('active');
        });
    });

    function updateTotalPrice() {
        let totalPrice = 0;
        const items = document.querySelectorAll('.item');
        items.forEach(item => {
            const quantity = parseInt(item.querySelector('.quantity').textContent);
            const price = parseFloat(item.querySelector('.price').textContent.substring(1));
            totalPrice += quantity * price;
        });
        document.getElementById('total-price').textContent = '$' + totalPrice.toFixed(2);
    }

    updateTotalPrice(); // Initial calculation
});
