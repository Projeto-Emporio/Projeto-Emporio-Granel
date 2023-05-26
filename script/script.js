const container = document.querySelector('.container');
	const sidebar = document.querySelector('.sidebar');
	const closeBtn = document.querySelector('.close-btn');
    const carrinhoIcone = document.querySelector('.carrinho-icone');
	closeBtn.addEventListener('click', () => {
	    container.classList.remove('active');
	});
	