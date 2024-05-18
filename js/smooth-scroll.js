document.getElementById('exploreBtn').addEventListener('click', function(e) {
    e.preventDefault();
    const productsSection = document.getElementById('products');
    productsSection.scrollIntoView({ behavior: 'smooth' });
});
