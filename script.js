document.addEventListener("DOMContentLoaded", function () {

    // ================================
    // LOGIN
    // ================================

    const loginForm = document.getElementById("login-form");
    const togglePassword = document.getElementById("toggle-password");
    const passwordInput = document.getElementById("senha");
    const linkLoja = document.getElementById("link-loja");
    const registerButton = document.getElementById("register-button");


    // Entrar
    if (loginForm) {

        loginForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const email = document.getElementById("email").value.trim();
            const senha = document.getElementById("senha").value.trim();

            if (email === "" || senha === "") {
                alert("Preencha o e-mail e a senha.");
                return;
            }

            // Salva que o usuário entrou
            localStorage.setItem("pkfsport_logado", "true");
            localStorage.setItem("pkfsport_email", email);

            // Vai para a loja
            window.location.href = "loja.html";

        });

    }


    // ================================
    // MOSTRAR / ESCONDER SENHA
    // ================================

    if (togglePassword && passwordInput) {

        togglePassword.addEventListener("click", function () {

            if (passwordInput.type === "password") {

                passwordInput.type = "text";

                togglePassword.innerHTML =
                    '<i class="bi bi-eye-slash"></i>';

            } else {

                passwordInput.type = "password";

                togglePassword.innerHTML =
                    '<i class="bi bi-eye"></i>';

            }

        });

    }


    // ================================
    // ACESSAR LOJA SEM LOGIN
    // ================================

    if (linkLoja) {

        linkLoja.addEventListener("click", function () {

            window.location.href = "loja.html";

        });

    }


    // ================================
    // CADASTRO
    // ================================

    if (registerButton) {

        registerButton.addEventListener("click", function () {

            alert("Sistema de cadastro em desenvolvimento.");

        });

    }


    // ================================
    // LOJA
    // ================================

    if (document.body.classList.contains("store-page")) {

        iniciarLoja();

    }

});


// ========================================
// PRODUTOS DA LOJA
// ========================================

const products = [
    {
        id: 1,
        name: "Camisa de Futebol PKFSPORT",
        category: "roupas",
        price: 129.90,
        image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600"
    },
    {
        id: 2,
        name: "Tênis Esportivo PKFSPORT",
        category: "tenis",
        price: 249.90,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
    },
    {
        id: 3,
        name: "Chuteira Profissional PKFSPORT",
        category: "chuteiras",
        price: 299.90,
        image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?w=600"
    },
    {
        id: 4,
        name: "Luva de Goleiro Pro",
        category: "luvas",
        price: 159.90,
        image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=600"
    },
    {
        id: 5,
        name: "Bola de Futebol Oficial",
        category: "bolas",
        price: 119.90,
        image: "https://images.unsplash.com/photo-1614632537197-38a17061c2bd?w=600"
    },
    {
        id: 6,
        name: "Caneleira Esportiva",
        category: "caneleiras",
        price: 49.90,
        image: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600"
    },
    {
        id: 7,
        name: "Meião Esportivo PKFSPORT",
        category: "meiao",
        price: 39.90,
        image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600"
    },
    {
        id: 8,
        name: "Shorts Esportivo PKFSPORT",
        category: "roupas",
        price: 89.90,
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600"
    }
];

    

    // ========================================
    // MOSTRAR PRODUTOS
    // ========================================

    function mostrarProdutos() {

        productsContainer.innerHTML = "";

        const produtosFiltrados = products.filter(function (produto) {

            return categoriaAtual === "todos" ||
                   produto.category === categoriaAtual;

        });


        produtosFiltrados.forEach(function (produto) {

            const card = document.createElement("div");

            card.className = "product-card";

            card.innerHTML = `

                <div class="product-image">
                    <i class="bi ${produto.icon}"></i>
                </div>

                <div class="product-info">

                    <div class="product-category">
                        ${produto.category}
                    </div>

                    <div class="product-name">
                        ${produto.name}
                    </div>

                    <div class="product-price">
                        R$ ${produto.price.toFixed(2).replace(".", ",")}
                    </div>

                    <button
                        class="add-cart-button"
                        data-id="${produto.id}">

                        <i class="bi bi-cart-plus"></i>
                        Adicionar ao carrinho

                    </button>

                </div>

            `;

            productsContainer.appendChild(card);

        });


        document
            .querySelectorAll(".add-cart-button")
            .forEach(function (botao) {

                botao.addEventListener("click", function () {

                    const id = Number(botao.dataset.id);

                    const produto = products.find(
                        function (item) {
                            return item.id === id;
                        }
                    );

                    cart.push(produto);

                    atualizarCarrinho();

                    alert(
                        produto.name +
                        " foi adicionado ao carrinho!"
                    );

                });

            });

    }


    // ========================================
    // CATEGORIAS
    // ========================================

    document
        .querySelectorAll(".category-button")
        .forEach(function (botao) {

            botao.addEventListener("click", function () {

                document
                    .querySelectorAll(".category-button")
                    .forEach(function (item) {

                        item.classList.remove("active");

                    });

                botao.classList.add("active");

                categoriaAtual =
                    botao.dataset.category;

                mostrarProdutos();

            });

        });


    // ========================================
    // PESQUISA
    // ========================================

    const searchInput =
        document.getElementById("search-input");

    if (searchInput) {

        searchInput.addEventListener("input", function () {

            const pesquisa =
                searchInput.value.toLowerCase();

            document
                .querySelectorAll(".product-card")
                .forEach(function (card) {

                    const nome =
                        card
                            .querySelector(".product-name")
                            .textContent
                            .toLowerCase();

                    if (nome.includes(pesquisa)) {

                        card.style.display = "";

                    } else {

                        card.style.display = "none";

                    }

                });

        });

    }


    // ========================================
    // CARRINHO
    // ========================================

    function atualizarCarrinho() {

        const cartCount =
            document.getElementById("cart-count");

        if (cartCount) {

            cartCount.textContent =
                cart.length;

        }

    }


    const cartButton =
        document.getElementById("cart-button");

    const cartOverlay =
        document.getElementById("cart-overlay");

    const cartClose =
        document.getElementById("cart-close");


    if (cartButton && cartOverlay) {

        cartButton.addEventListener("click", function () {

            cartOverlay.classList.add("active");

        });

    }


    if (cartClose && cartOverlay) {

        cartClose.addEventListener("click", function () {

            cartOverlay.classList.remove("active");

        });

    }


    // ========================================
    // SAIR
    // ========================================

    const logoutButton =
        document.getElementById("logout-button");

    if (logoutButton) {

        logoutButton.addEventListener("click", function () {

            localStorage.removeItem("pkfsport_logado");
            localStorage.removeItem("pkfsport_email");

            window.location.href = "login.html";

        });

    }


    // Começa mostrando os produtos
    mostrarProdutos();

