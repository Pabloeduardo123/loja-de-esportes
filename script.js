/* =========================================================
   PKFSPORT - SCRIPT PRINCIPAL
   Login + Loja + Produtos + Carrinho + Pagamentos + Rastreamento
   ========================================================= */


/* =========================================================
   CONFIGURAÇÕES
   ========================================================= */

// COLOQUE SUA CHAVE PIX REAL AQUI
const PIX_KEY = "11957716389";

const PIX_MERCHANT_NAME = "PKFSPORT";
const PIX_CITY = "SAO PAULO";

const SHIPPING_PRICE = 15.90;
const FREE_SHIPPING_VALUE = 199.90;


/* =========================================================
   PRODUTOS
   ========================================================= */

const products = [

    {
        id: 1,
        name: "Camisa Esportiva ",
        category: "roupas",
        price: 89.90,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8jZM7AnFlYri7L5xB8IHwfyh7Xi5n9pY5IobtEvh9_g&s=10"
    },

    {
        id: 2,
        name: "Short Esportivo ",
        category: "roupas",
        price: 59.90,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5R5FhOwfHitutWzszQMEyWRW4ZJzPUW7fMvZF2Mufog&s=10"
    },

    {
        id: 3,
        name: "Camisa Dry Fit ",
        category: "dryfit",
        price: 79.90,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Rb8tW_eh6kQzLtwyYtaZ9fDffkdNOD0Bz-VADnRbjQ&s"
    },

    {
        id: 4,
        name: "Regata Dry Fit ",
        category: "dryfit",
        price: 69.90,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWQYj6Em3sP_xPpaJv74CvGbEp9eLYtVknXa7Xe2mB4w&s=10"
    },

    {
        id: 5,
        name: "Corta-Vento Corinthians",
        category: "corta-vento",
        price: 179.90,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH3je37uNHz2gmTg-8L6mcc76UwS5J38DOFxQr2VLjNw&s=10"
    },

    {
        id: 6,
        name: "Corta-Vento Flamengo",
        category: "corta-vento",
        price: 179.90,
        image: "https://cdn.awsli.com.br/2500x2500/1890/1890260/produto/225734634/84ee9dd7-9xyubva0rq.jpg"
    },

    {
        id: 7,
        name: "Corta-Vento Palmeiras",
        category: "corta-vento",
        price: 179.90,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwXciqWI5a4Fnfn0eN5YpR8p4n-F34z3xBrSPC5Nkvtg&s=10"
    },

    {
        id: 8,
        name: "Camisa Corinthians",
        category: "times",
        price: 129.90,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7GGDn6bZw1cSeLdIbi-9UOfkkcEpwV8RXZEVlbsHMjg&s=10"
    },

    {
        id: 9,
        name: "Camisa Flamengo",
        category: "times",
        price: 129.90,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2MFWaZnbaiMNu-aqUJtxgwXwDhaNN4LqGfrtGV6tFLA&s=10"
    },

    {
        id: 10,
        name: "Camisa Palmeiras",
        category: "times",
        price: 129.90,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzuIE5oEbdHm_1th6vW9-C5WI_Os3n0tcb06Oq7DCnqQ&s=10"
    },

    {
        id: 11,
        name: "Camisa São Paulo",
        category: "times",
        price: 129.90,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmQkMVMgvBgVTHbilXDL0qRZ0ND3J8xH40BwOpPkKyeg&s=10"
    },

    {
        id: 12,
        name: "Camisa Santos",
        category: "times",
        price: 129.90,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtAjfc3nPqoiZm3xauhSoffDUfjYK16sgf-fWzLp3LLg&s=10"
    },

    {
        id: 13,
        name: "Camisa Vasco",
        category: "times",
        price: 129.90,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXsx20sJwol0payq6wqgjPgVw2inACRFYEG7y5IesUEQ&s=10"
    },

    {
        id: 14,
        name: "Camisa Botafogo",
        category: "times",
        price: 129.90,
        image: "https://images.tcdn.com.br/img/img_prod/311840/camisa_reebok_botafogo_i_2025_1_20250927085802_bc135cc6edd0.jpg"
    },

    {
        id: 15,
        name: "Camisa Fluminense",
        category: "times",
        price: 129.90,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgqg5Y2ZNxpsec9nwWJY7j-1f9Y5v54cWSyiMBoQ0l1g&s=10"
    },

    {
        id: 16,
        name: "Camisa Grêmio",
        category: "times",
        price: 129.90,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1D_Bp-eMJeoIxd-DMi9-ZK30C25ixJtfDGmjgRsRqTA&s=10"
    },

    {
        id: 17,
        name: "Camisa Internacional",
        category: "times",
        price: 129.90,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8BOOwW8GTBr7WjlJacjaIu4AwdAwvxz19dZ7ydTZMqg&s=10"
    },

    {
        id: 18,
        name: "Camisa Cruzeiro",
        category: "times",
        price: 129.90,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuuD16IH1qxQPcR3E8Ka9qcL0O_yDF92wQhYGragMs5A&s=10"
    },

    {
        id: 19,
        name: "Camisa Atlético-MG",
        category: "times",
        price: 129.90,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUq92TE9sghwaPPaZNXNq4rUhxFXckcuVPGyUj-d2tBw&s=10"
    },

    {
        id: 20,
        name: "Camisa Bahia",
        category: "times",
        price: 129.90,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAutXJ4NEzrEkEawF6bYb6xNREwE-MZiF_NeSxWKH15A&s=10"
    },

    {
        id: 21,
        name: "Camisa Fortaleza",
        category: "times",
        price: 129.90,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqaYHXooV9UJPQ0VJZgs2woVF7mzlkN6AbAA_5SzHs1g&s=10"
    },

    {
        id: 22,
        name: "Camisa Ceará",
        category: "times",
        price: 129.90,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr8BOlihJ1B93an2JdNb7COb00O2VEeyPNcTyWfD9pxA&s=10"
    },

    {
        id: 23,
        name: "Camisa Sport",
        category: "times",
        price: 129.90,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuMOS81Vr92PdJvae4l-hQrCpJHnQS-zxd8vivjTte7w&s=10"
    },

    {
        id: 24,
        name: "Tênis da nike",
        category: "tenis",
        price: 249.90,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRsIFXT-dr3AFNq1eStDHIVjirJ-3W-MRfA00g4GVeGg&s=10"
    },

    {
        id: 25,
        name: "Tênis da adidas",
        category: "tenis",
        price: 199.90,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAqO9f56RIUQDa9RUDXwyR8qa9e0p-eJCzklK-Ji8QIw&s=10"
    },

    {
        id: 26,
        name: "Chuteira Campo Nike",
        category: "chuteiras",
        price: 299.90,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tNZKdIF5cS0_wNHNqCBMDVlIiJ0q6mJeQyvqOjSiXw&s=10"
    },

    {
        id: 27,
        name: "Chuteira Society adidas",
        category: "chuteiras",
        price: 229.90,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0tpFn1PImg3OPvOXtAnEwVLTBbaJTPw32gexmxWAueA&s=10"
    },

    {
        id: 28,
        name: "Chuteira Futsal umbro",
        category: "futsal",
        price: 219.90,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT09AEy8BXzVWn3P8Zy2ToE_qYIykQYe5AdJcE64daOTA&s=10"
    },

    {
        id: 29,
        name: "Meião Cano Alto ",
        category: "meiao",
        price: 34.90,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpOa1nmwwFBmDOGrbecfiNoI_EwxZjRuMCpFaWvvg2ng&s=10"
    },

    {
        id: 30,
        name: "Meião Cano Médio ",
        category: "meiao",
        price: 29.90,
        image: "https://images.tcdn.com.br/img/img_prod/1303097/kit_meia_nike_everyday_plus_cushion_cano_medio_92167_1_80e8dc30bb4af24d39fa1c16aae3a399.jpg"
    },

    {
        id: 31,
        name: "Meia Antigrip ",
        category: "meiao",
        price: 49.90,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_99HG45_1vxa4mKDMbdCbvpNXgbydWk48dtavfVqKZg&s"
    },

    {
        id: 32,
        name: "Luva de Goleiro ",
        category: "luvas",
        price: 149.90,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9-Bdti4mD59iXDilDNR2O9QE7GhcRufKUS7l8fFaS0A&s=10"
    },

    {
        id: 33,
        name: "Grip para Luva de Goleiro ",
        category: "luvas",
        price: 39.90,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaZxlHvN0HKM7J42MBU6iJ6YTB8gyBjereSCe_ozpqEA&s=10"
    },

    {
        id: 34,
        name: "Luva de Goleiro Antigrip",
        category: "luvas",
        price: 159.90,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhUaFaPBAxUIXZewmOONdyoSYtPjcnkb9s-efFtlQzaA&s=10"
    },

    {
        id: 35,
        name: "Bola Futebol penalty",
        category: "bolas",
        price: 119.90,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-rY7T3DPSSDWne6MAcT814xJYf1Y063G9kU0eICWnuA&s=10"
    },

    {
        id: 36,
        name: "Bola Futsal topper",
        category: "bolas",
        price: 99.90,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMPElCrjwgCkg2zhEdVzcoahGLfkipbHpNyxcFR-ZU1Q&s=10"
    },

    {
        id: 37,
        name: "Caneleira ",
        category: "caneleiras",
        price: 49.90,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDo54DxITXpogCiXDlD2EmLO3lPZl6GGYqaByV61MQpA&s=10"
    },

    {
        id: 38,
        name: "Esparadrapo Esportivo ",
        category: "acessorios",
        price: 19.90,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8KWXK-8dYYA2XiBkpJmZkU8MVkNYFFl0n3s7znJNkZw&s=10"
    },

    {
        id: 39,
        name: "Munhequeira ",
        category: "acessorios",
        price: 24.90,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxyLIwHnwUezEEQf-3wNPPK2oRpRugpULAf0qimkjz-A&s=10"
    },

    {
        id: 40,
        name: "Capacete de Goleiro ",
        category: "acessorios",
        price: 199.90,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0wBJ438K_-x--SKqIp04YmAGG0W9LuZ_VKsG3Z_jAHQ&s=10"
    },

    {
        id: 41,
        name: "Faixa de Capitão ",
        category: "acessorios",
        price: 24.90,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8_V8dzZa26jsoqUZfXtb3_OPf0RB_pCBTavFiT6KOxQ&s=10"
    },

    {
        id: 42,
        name: "meiao cortado",
        category: "acessorios",
        price: 39.90,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUG4xsIvBZXspkfMMJkg5hlOWGEMj0Ll0pf38idimaBw&s=10"
    }

];


/* =========================================================
   VARIÁVEIS
   ========================================================= */

let cart = JSON.parse(
    localStorage.getItem("pkfsport_carrinho") || "[]"
);

let currentCategory = "todos";

let isRegisterMode = false;


/* =========================================================
   UTILIDADES
   ========================================================= */

function formatPrice(value) {

    return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

}


function saveCart() {

    localStorage.setItem(
        "pkfsport_carrinho",
        JSON.stringify(cart)
    );

}


function getProduct(productId) {

    return products.find(
        product => product.id === Number(productId)
    );

}


/* =========================================================
   LOGIN
   ========================================================= */

function initializeLogin() {

    const loginForm = document.getElementById("login-form");

    if (!loginForm) {
        return;
    }

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");

    const message = document.getElementById("login-message");

    const toggleForm = document.getElementById("toggle-form");
    const toggleText = document.getElementById("toggle-text");

    const formTitle = document.getElementById("form-title");
    const formDescription = document.getElementById("form-description");

    const submitButton = document.getElementById("submit-button");

    const confirmArea = document.getElementById(
        "confirm-password-area"
    );

    const togglePassword = document.getElementById(
        "toggle-password"
    );


    if (
        localStorage.getItem("pkfsport_logado") === "true"
    ) {

        window.location.href = "loja.html";

        return;
    }


    togglePassword.addEventListener(
        "click",
        function () {

            if (passwordInput.type === "password") {

                passwordInput.type = "text";

                togglePassword.innerHTML =
                    '<i class="bi bi-eye-slash"></i>';

            } else {

                passwordInput.type = "password";

                togglePassword.innerHTML =
                    '<i class="bi bi-eye"></i>';

            }

        }
    );


    toggleForm.addEventListener(
        "click",
        function () {

            isRegisterMode = !isRegisterMode;

            message.textContent = "";
            message.className = "login-message";


            if (isRegisterMode) {

                formTitle.textContent =
                    "Criar sua conta";

                formDescription.textContent =
                    "Cadastre-se para comprar na PKFSPORT.";

                submitButton.textContent =
                    "Criar conta";

                toggleText.textContent =
                    "Já possui uma conta?";

                toggleForm.textContent =
                    "Entrar";

                confirmArea.classList.remove(
                    "hidden"
                );

                confirmPasswordInput.required = true;

            } else {

                formTitle.textContent =
                    "Acesse sua conta";

                formDescription.textContent =
                    "Entre para acessar a loja PKFSPORT.";

                submitButton.textContent =
                    "Entrar";

                toggleText.textContent =
                    "Ainda não possui uma conta?";

                toggleForm.textContent =
                    "Criar conta";

                confirmArea.classList.add(
                    "hidden"
                );

                confirmPasswordInput.required = false;

            }

        }
    );


    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const email =
                emailInput.value.trim();

            const password =
                passwordInput.value;


            if (!email || !password) {

                showLoginMessage(
                    "Preencha todos os campos.",
                    "error"
                );

                return;
            }


            if (isRegisterMode) {

                const confirmPassword =
                    confirmPasswordInput.value;


                if (password.length < 6) {

                    showLoginMessage(
                        "A senha precisa ter pelo menos 6 caracteres.",
                        "error"
                    );

                    return;
                }


                if (
                    password !== confirmPassword
                ) {

                    showLoginMessage(
                        "As senhas não são iguais.",
                        "error"
                    );

                    return;
                }


                localStorage.setItem(
                    "pkfsport_usuario",
                    JSON.stringify({
                        email: email,
                        password: password
                    })
                );


                localStorage.setItem(
                    "pkfsport_logado",
                    "true"
                );


                localStorage.setItem(
                    "pkfsport_email",
                    email
                );


                window.location.href =
                    "loja.html";

                return;

            }


            const savedUser = JSON.parse(
                localStorage.getItem(
                    "pkfsport_usuario"
                ) || "null"
            );


            if (
                savedUser &&
                (
                    savedUser.email !== email ||
                    savedUser.password !== password
                )
            ) {

                showLoginMessage(
                    "E-mail ou senha incorretos.",
                    "error"
                );

                return;
            }


            localStorage.setItem(
                "pkfsport_logado",
                "true"
            );

            localStorage.setItem(
                "pkfsport_email",
                email
            );


            window.location.href =
                "loja.html";

        }
    );


    function showLoginMessage(text, type) {

        message.textContent = text;

        message.className =
            "login-message " + type;

    }

}


/* =========================================================
   PROTEÇÃO DA LOJA
   ========================================================= */

function protectStore() {

    const isStore =
        document.body.classList.contains(
            "store-page"
        );

    if (!isStore) {
        return true;
    }


    const logged =
        localStorage.getItem(
            "pkfsport_logado"
        ) === "true";


    if (!logged) {

        window.location.href =
            "login.html";

        return false;
    }


    return true;

}


/* =========================================================
   PRODUTOS
   ========================================================= */

function initializeProducts() {

    const container =
        document.getElementById(
            "products-container"
        );

    if (!container) {
        return;
    }


    renderProducts();


    document
        .querySelectorAll(".category-button")
        .forEach(button => {

            button.addEventListener(
                "click",
                function () {

                    document
                        .querySelectorAll(
                            ".category-button"
                        )
                        .forEach(item => {
                            item.classList.remove(
                                "active"
                            );
                        });


                    this.classList.add(
                        "active"
                    );


                    currentCategory =
                        this.dataset.category;


                    renderProducts();

                }
            );

        });


    const searchInput =
        document.getElementById(
            "search-input"
        );


    searchInput.addEventListener(
        "input",
        renderProducts
    );

}


function renderProducts() {

    const container =
        document.getElementById(
            "products-container"
        );

    const noProducts =
        document.getElementById(
            "no-products"
        );

    const total =
        document.getElementById(
            "products-total"
        );

    if (!container) {
        return;
    }


    const searchInput =
        document.getElementById(
            "search-input"
        );


    const search =
        searchInput
            ? searchInput.value
                .toLowerCase()
                .trim()
            : "";


    let filtered =
        products.filter(product => {

            const categoryMatch =
                currentCategory === "todos" ||
                product.category === currentCategory;


            const searchMatch =
                product.name
                    .toLowerCase()
                    .includes(search);


            return (
                categoryMatch &&
                searchMatch
            );

        });


    container.innerHTML = "";


    total.textContent =
        filtered.length +
        (
            filtered.length === 1
                ? " produto"
                : " produtos"
        );


    if (filtered.length === 0) {

        noProducts.classList.remove(
            "hidden"
        );

        return;
    }


    noProducts.classList.add(
        "hidden"
    );


    filtered.forEach(product => {

        const card =
            document.createElement(
                "article"
            );

        card.className =
            "product-card";


        card.innerHTML = `

            <div class="product-image-container">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    class="product-image"
                    onerror="this.src='https://placehold.co/800x800/f2f2f2/111111?text=PKFSPORT'"
                >

                <span class="product-category">
                    ${getCategoryName(product.category)}
                </span>

            </div>

            <div class="product-info">

                <h3>
                    ${product.name}
                </h3>

                <div class="product-bottom">

                    <strong class="product-price">
                        ${formatPrice(product.price)}
                    </strong>

                    <button
                        class="add-cart-button"
                        data-id="${product.id}"
                        type="button"
                    >
                        <i class="bi bi-cart-plus"></i>
                        Comprar
                    </button>

                </div>

            </div>
        `;


        container.appendChild(card);

    });


    container
        .querySelectorAll(".add-cart-button")
        .forEach(button => {

            button.addEventListener(
                "click",
                function () {

                    addToCart(
                        Number(this.dataset.id)
                    );

                }
            );

        });

}


function getCategoryName(category) {

    const categories = {

        roupas: "Roupas",
        times: "Camisas de times",
        tenis: "Tênis",
        chuteiras: "Chuteiras",
        futsal: "Futsal",
        meiao: "Meião",
        luvas: "Luvas",
        bolas: "Bolas",
        caneleiras: "Caneleiras",
        acessorios: "Acessórios",
        dryfit: "Dry Fit",
        "corta-vento": "Corta-vento"

    };


    return categories[category] || "Esporte";

}


/* =========================================================
   CARRINHO
   ========================================================= */

function addToCart(productId) {

    const existing =
        cart.find(
            item => item.id === productId
        );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            id: productId,
            quantity: 1
        });

    }


    saveCart();
    updateCart();

    openCart();

}


function removeFromCart(productId) {

    cart =
        cart.filter(
            item => item.id !== productId
        );

    saveCart();

    updateCart();

}


function changeQuantity(
    productId,
    change
) {

    const item =
        cart.find(
            cartItem =>
                cartItem.id === productId
        );


    if (!item) {
        return;
    }


    item.quantity += change;


    if (item.quantity <= 0) {

        removeFromCart(productId);

        return;

    }


    saveCart();
    updateCart();

}


function getCartTotals() {

    let subtotal = 0;

    cart.forEach(item => {

        const product =
            getProduct(item.id);

        if (product) {

            subtotal +=
                product.price *
                item.quantity;

        }

    });


    const shipping =
        subtotal === 0
            ? 0
            : subtotal >= FREE_SHIPPING_VALUE
                ? 0
                : SHIPPING_PRICE;


    return {
        subtotal: subtotal,
        shipping: shipping,
        total: subtotal + shipping
    };

}


function updateCart() {

    const itemsContainer =
        document.getElementById(
            "cart-items"
        );

    const empty =
        document.getElementById(
            "cart-empty"
        );

    const cartCount =
        document.getElementById(
            "cart-count"
        );

    if (!itemsContainer) {
        return;
    }


    const itemCount =
        cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );


    cartCount.textContent =
        itemCount;


    itemsContainer.innerHTML = "";


    if (cart.length === 0) {

        empty.classList.remove(
            "hidden"
        );

        return;

    }


    empty.classList.add(
        "hidden"
    );


    cart.forEach(item => {

        const product =
            getProduct(item.id);


        if (!product) {
            return;
        }


        const itemElement =
            document.createElement(
                "div"
            );


        itemElement.className =
            "cart-item";


        itemElement.innerHTML = `

            <img
                src="${product.image}"
                alt="${product.name}"
                onerror="this.src='https://placehold.co/200x200/f2f2f2/111111?text=PKF'"
            >

            <div class="cart-item-info">

                <h4>
                    ${product.name}
                </h4>

                <strong>
                    ${formatPrice(product.price)}
                </strong>

                <div class="quantity-controls">

                    <button
                        type="button"
                        data-action="decrease"
                        data-id="${product.id}"
                    >
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        type="button"
                        data-action="increase"
                        data-id="${product.id}"
                    >
                        +
                    </button>

                </div>

            </div>

            <button
                type="button"
                class="remove-item"
                data-action="remove"
                data-id="${product.id}"
                title="Remover"
            >
                <i class="bi bi-trash3"></i>
            </button>

        `;


        itemsContainer.appendChild(
            itemElement
        );

    });


    itemsContainer
        .querySelectorAll("[data-action]")
        .forEach(button => {

            button.addEventListener(
                "click",
                function () {

                    const id =
                        Number(
                            this.dataset.id
                        );

                    const action =
                        this.dataset.action;


                    if (
                        action ===
                        "increase"
                    ) {

                        changeQuantity(
                            id,
                            1
                        );

                    }


                    if (
                        action ===
                        "decrease"
                    ) {

                        changeQuantity(
                            id,
                            -1
                        );

                    }


                    if (
                        action ===
                        "remove"
                    ) {

                        removeFromCart(
                            id
                        );

                    }

                }
            );

        });


    updateTotals();

}


function updateTotals() {

    const totals =
        getCartTotals();


    const subtotal =
        document.getElementById(
            "cart-subtotal"
        );

    const shipping =
        document.getElementById(
            "cart-shipping"
        );

    const total =
        document.getElementById(
            "cart-total"
        );


    if (subtotal) {

        subtotal.textContent =
            formatPrice(
                totals.subtotal
            );

    }


    if (shipping) {

        shipping.textContent =
            totals.shipping === 0
                ? "Grátis"
                : formatPrice(
                    totals.shipping
                );

    }


    if (total) {

        total.textContent =
            formatPrice(
                totals.total
            );

    }

}


/* =========================================================
   ABRIR / FECHAR CARRINHO
   ========================================================= */

function openCart() {

    const overlay =
        document.getElementById(
            "cart-overlay"
        );


    overlay.classList.add(
        "show"
    );

    document.body.classList.add(
        "no-scroll"
    );

}


function closeCart() {

    const overlay =
        document.getElementById(
            "cart-overlay"
        );


    overlay.classList.remove(
        "show"
    );

    document.body.classList.remove(
        "no-scroll"
    );

}


function initializeCart() {

    const cartButton =
        document.getElementById(
            "cart-button"
        );

    const cartClose =
        document.getElementById(
            "cart-close"
        );


    if (!cartButton) {
        return;
    }


    cartButton.addEventListener(
        "click",
        openCart
    );


    cartClose.addEventListener(
        "click",
        closeCart
    );


    document
        .getElementById("cart-overlay")
        .addEventListener(
            "click",
            function (event) {

                if (
                    event.target ===
                    this
                ) {

                    closeCart();

                }

            }
        );


    updateCart();

}


/* =========================================================
   PAGAMENTO
   ========================================================= */

function initializePayment() {

    const paymentOptions =
        document.querySelectorAll(
            'input[name="payment"]'
        );


    const cardFields =
        document.getElementById(
            "card-fields"
        );


    paymentOptions.forEach(
        option => {

            option.addEventListener(
                "change",
                function () {

                    if (
                        this.value ===
                        "credit" ||
                        this.value ===
                        "debit"
                    ) {

                        cardFields.classList.remove(
                            "hidden"
                        );

                    } else {

                        cardFields.classList.add(
                            "hidden"
                        );

                    }

                }
            );

        }
    );


    const cardNumber =
        document.getElementById(
            "card-number"
        );


    cardNumber.addEventListener(
        "input",
        function () {

            let value =
                this.value.replace(
                    /\D/g,
                    ""
                );


            value =
                value.substring(
                    0,
                    16
                );


            this.value =
                value.replace(
                    /(\d{4})(?=\d)/g,
                    "$1 "
                );

        }
    );


    const expiry =
        document.getElementById(
            "card-expiry"
        );


    expiry.addEventListener(
        "input",
        function () {

            let value =
                this.value.replace(
                    /\D/g,
                    ""
                );


            value =
                value.substring(
                    0,
                    4
                );


            if (
                value.length >= 3
            ) {

                value =
                    value.substring(
                        0,
                        2
                    ) +
                    "/" +
                    value.substring(
                        2
                    );

            }


            this.value =
                value;

        }
    );


    const checkout =
        document.getElementById(
            "checkout-button"
        );


    checkout.addEventListener(
        "click",
        processCheckout
    );

}


/* =========================================================
   CHECKOUT
   ========================================================= */

function processCheckout() {

    if (cart.length === 0) {

        alert(
            "Seu carrinho está vazio."
        );

        return;

    }


    const selectedPayment =
        document.querySelector(
            'input[name="payment"]:checked'
        );


    if (!selectedPayment) {

        alert(
            "Escolha uma forma de pagamento."
        );

        return;

    }


    if (
        selectedPayment.value ===
        "credit" ||
        selectedPayment.value ===
        "debit"
    ) {

        const valid =
            validateCard();


        if (!valid) {
            return;
        }

    }


    const order =
        createOrder(
            selectedPayment.value
        );


    if (
        selectedPayment.value ===
        "pix"
    ) {

        closeCart();

        openPixModal(order);

        return;

    }


    cart = [];

    saveCart();

    updateCart();

    closeCart();

    showSuccessModal(
        order.code
    );

}


/* =========================================================
   VALIDAÇÃO DO CARTÃO
   ========================================================= */

function validateCard() {

    const name =
        document
            .getElementById("card-name")
            .value.trim();


    const number =
        document
            .getElementById("card-number")
            .value
            .replace(/\D/g, "");


    const expiry =
        document
            .getElementById("card-expiry")
            .value.trim();


    const cvv =
        document
            .getElementById("card-cvv")
            .value
            .replace(/\D/g, "");


    if (!name) {

        alert(
            "Digite o nome do titular do cartão."
        );

        return false;

    }


    if (
        number.length !== 16 ||
        !isValidCardNumber(number)
    ) {

        alert(
            "Digite um número de cartão válido."
        );

        return false;

    }


    if (
        !/^\d{2}\/\d{2}$/.test(
            expiry
        )
    ) {

        alert(
            "Digite a validade no formato MM/AA."
        );

        return false;

    }


    if (
        cvv.length < 3 ||
        cvv.length > 4
    ) {

        alert(
            "Digite um CVV válido."
        );

        return false;

    }


    return true;

}


function isValidCardNumber(number) {

    let sum = 0;

    let shouldDouble = false;


    for (
        let i = number.length - 1;
        i >= 0;
        i--
    ) {

        let digit =
            parseInt(
                number.charAt(i),
                10
            );


        if (shouldDouble) {

            digit *= 2;

            if (digit > 9) {

                digit -= 9;

            }

        }


        sum += digit;

        shouldDouble =
            !shouldDouble;

    }


    return (
        sum % 10 === 0
    );

}


/* =========================================================
   PEDIDOS
   ========================================================= */

function createOrder(paymentMethod) {

    const totals =
        getCartTotals();


    const code =
        "PKF-" +
        Math.random()
            .toString(36)
            .substring(2, 10)
            .toUpperCase();


    const order = {

        code: code,

        date: new Date().toISOString(),

        total: totals.total,

        payment:
            paymentMethod,

        status: 0,

        items: cart.map(item => {

            const product =
                getProduct(item.id);


            return {

                id: item.id,

                name: product.name,

                price: product.price,

                quantity: item.quantity

            };

        })

    };


    localStorage.setItem(
        "pkfsport_ultimo_pedido",
        JSON.stringify(order)
    );


    localStorage.setItem(
        "pkfsport_pedido_" + code,
        JSON.stringify(order)
    );


    return order;

}


/* =========================================================
   PIX
   ========================================================= */

function initializePix() {

    const pixClose =
        document.getElementById(
            "pix-close"
        );


    const copyButton =
        document.getElementById(
            "copy-pix"
        );


    const demoConfirm =
        document.getElementById(
            "pix-demo-confirm"
        );


    pixClose.addEventListener(
        "click",
        closePixModal
    );


    copyButton.addEventListener(
        "click",
        copyPix
    );


    demoConfirm.addEventListener(
        "click",
        function () {

            const lastOrder =
                JSON.parse(
                    localStorage.getItem(
                        "pkfsport_ultimo_pedido"
                    ) || "null"
                );


            if (lastOrder) {

                lastOrder.status = 1;


                localStorage.setItem(
                    "pkfsport_ultimo_pedido",
                    JSON.stringify(
                        lastOrder
                    )
                );


                localStorage.setItem(
                    "pkfsport_pedido_" +
                    lastOrder.code,
                    JSON.stringify(
                        lastOrder
                    )
                );


                cart = [];

                saveCart();

                updateCart();

                closePixModal();

                showSuccessModal(
                    lastOrder.code
                );

            }

        }
    );

}


function openPixModal(order) {

    const modal =
        document.getElementById(
            "pix-modal"
        );


    const qr =
        document.getElementById(
            "pix-qrcode"
        );


    const code =
        document.getElementById(
            "pix-code"
        );


    const warning =
        document.getElementById(
            "pix-warning"
        );


    qr.innerHTML = "";

    code.value = "";

    warning.classList.add(
        "hidden"
    );


    if (!PIX_KEY) {

        warning.innerHTML = `
            <strong>Chave Pix não configurada.</strong>
            <br>
            Abra o arquivo script.js e coloque sua chave
            no campo PIX_KEY para gerar um QR Code Pix real.
        `;

        warning.classList.remove(
            "hidden"
        );

        modal.classList.remove(
            "hidden"
        );

        return;

    }


    const payload =
        buildPixPayload(
            PIX_KEY,
            PIX_MERCHANT_NAME,
            PIX_CITY,
            order.total,
            order.code
        );


    code.value =
        payload;


    if (
        typeof QRCode !==
        "undefined"
    ) {

        new QRCode(
            qr,
            {
                text: payload,
                width: 220,
                height: 220,
                colorDark: "#111111",
                colorLight: "#ffffff",
                correctLevel:
                    QRCode.CorrectLevel.M
            }
        );

    }


    modal.classList.remove(
        "hidden"
    );

}


function closePixModal() {

    document
        .getElementById("pix-modal")
        .classList.add(
            "hidden"
        );

}


async function copyPix() {

    const code =
        document
            .getElementById("pix-code")
            .value;


    if (!code) {

        alert(
            "Não existe código Pix disponível."
        );

        return;

    }


    try {

        await navigator.clipboard.writeText(
            code
        );

        alert(
            "Código Pix copiado!"
        );

    } catch (error) {

        alert(
            "Não foi possível copiar automaticamente. Selecione o código manualmente."
        );

    }

}


/* =========================================================
   PIX EMV
   ========================================================= */

function tlv(id, value) {

    const stringValue =
        String(value);


    return (
        id +
        String(
            stringValue.length
        ).padStart(
            2,
            "0"
        ) +
        stringValue
    );

}


function crc16(payload) {

    let crc = 0xFFFF;


    for (
        let i = 0;
        i < payload.length;
        i++
    ) {

        crc ^= payload.charCodeAt(i) << 8;


        for (
            let bit = 0;
            bit < 8;
            bit++
        ) {

            if (
                crc &
                0x8000
            ) {

                crc =
                    (
                        crc << 1
                    ) ^
                    0x1021;

            } else {

                crc <<=
                    1;

            }


            crc &=
                0xFFFF;

        }

    }


    return crc
        .toString(16)
        .toUpperCase()
        .padStart(
            4,
            "0"
        );

}


function buildPixPayload(
    key,
    merchantName,
    city,
    amount,
    txid
) {

    const merchantAccount =
        tlv(
            "00",
            "BR.GOV.BCB.PIX"
        ) +
        tlv(
            "01",
            key
        );


    let payload =
        tlv(
            "00",
            "01"
        );


    payload +=
        tlv(
            "26",
            merchantAccount
        );


    payload +=
        tlv(
            "52",
            "0000"
        );


    payload +=
        tlv(
            "53",
            "986"
        );


    payload +=
        tlv(
            "54",
            Number(amount).toFixed(2)
        );


    payload +=
        tlv(
            "58",
            "BR"
        );


    payload +=
        tlv(
            "59",
            merchantName
                .substring(
                    0,
                    25
                )
        );


    payload +=
        tlv(
            "60",
            city
                .substring(
                    0,
                    15
                )
        );


    const additional =
        tlv(
            "05",
            txid
                .substring(
                    0,
                    25
                )
        );


    payload +=
        tlv(
            "62",
            additional
        );


    const crcData =
        payload +
        "6304";


    return (
        crcData +
        crc16(crcData)
    );

}


/* =========================================================
   RASTREAMENTO
   ========================================================= */

const trackingStatuses = [

    {
        title: "Pedido recebido",
        description:
            "Seu pedido foi registrado."
    },

    {
        title: "Pagamento aprovado",
        description:
            "O pagamento foi confirmado."
    },

    {
        title: "Preparando pedido",
        description:
            "Seu pedido está sendo separado."
    },

    {
        title: "Pedido enviado",
        description:
            "Seu pedido foi enviado."
    },

    {
        title: "Saiu para entrega",
        description:
            "O pedido está a caminho."
    },

    {
        title: "Pedido entregue",
        description:
            "Pedido entregue com sucesso."
    }

];


function initializeTracking() {

    const button =
        document.getElementById(
            "tracking-button"
        );


    const close =
        document.getElementById(
            "tracking-close"
        );


    const search =
        document.getElementById(
            "tracking-search"
        );


    button.addEventListener(
        "click",
        function () {

            openTrackingModal();

        }
    );


    close.addEventListener(
        "click",
        closeTrackingModal
    );


    search.addEventListener(
        "click",
        searchTracking
    );


    const successTracking =
        document.getElementById(
            "success-tracking-button"
        );


    successTracking.addEventListener(
        "click",
        function () {

            document
                .getElementById(
                    "success-modal"
                )
                .classList.add(
                    "hidden"
                );

            openTrackingModal();

        }
    );


    document
        .getElementById(
            "success-close"
        )
        .addEventListener(
            "click",
            function () {

                document
                    .getElementById(
                        "success-modal"
                    )
                    .classList.add(
                        "hidden"
                    );

            }
        );

}


function openTrackingModal() {

    const modal =
        document.getElementById(
            "tracking-modal"
        );


    const input =
        document.getElementById(
            "tracking-code-input"
        );


    const lastOrder =
        JSON.parse(
            localStorage.getItem(
                "pkfsport_ultimo_pedido"
            ) || "null"
        );


    if (lastOrder) {

        input.value =
            lastOrder.code;

        renderTracking(
            lastOrder
        );

    } else {

        input.value = "";

        document
            .getElementById(
                "tracking-result"
            )
            .innerHTML = `
                <div class="tracking-empty">
                    <i class="bi bi-box"></i>
                    <p>
                        Você ainda não possui pedidos.
                    </p>
                </div>
            `;

    }


    modal.classList.remove(
        "hidden"
    );

}


function closeTrackingModal() {

    document
        .getElementById(
            "tracking-modal"
        )
        .classList.add(
            "hidden"
        );

}


function searchTracking() {

    const input =
        document
            .getElementById(
                "tracking-code-input"
            );


    const code =
        input.value
            .trim()
            .toUpperCase();


    if (!code) {

        alert(
            "Digite o código do pedido."
        );

        return;

    }


    const order =
        JSON.parse(
            localStorage.getItem(
                "pkfsport_pedido_" +
                code
            ) || "null"
        );


    if (!order) {

        document
            .getElementById(
                "tracking-result"
            )
            .innerHTML = `
                <div class="tracking-error">
                    <i class="bi bi-exclamation-circle"></i>

                    <p>
                        Pedido não encontrado.
                    </p>

                    <small>
                        Verifique o código informado.
                    </small>
                `;

        return;

    }


    renderTracking(order);

}


function renderTracking(order) {

    const result =
        document.getElementById(
            "tracking-result"
        );


    let html = `

        <div class="tracking-order-header">

            <div>

                <span>
                    PEDIDO
                </span>

                <strong>
                    ${order.code}
                </strong>

            </div>

            <strong>
                ${formatPrice(order.total)}
            </strong>

        </div>

        <div class="tracking-timeline">
    `;


    trackingStatuses.forEach(
        (status, index) => {

            const active =
                index <= order.status;

            const current =
                index === order.status;


            html += `

                <div
                    class="tracking-step
                    ${active ? "active" : ""}
                    ${current ? "current" : ""}"
                >

                    <div class="tracking-dot">

                        ${
                            active
                                ? '<i class="bi bi-check"></i>'
                                : ""
                        }

                    </div>

                    <div>

                        <strong>
                            ${status.title}
                        </strong>

                        <p>
                            ${status.description}
                        </p>

                    </div>

                </div>

            `;

        }
    );


    html += `
        </div>
    `;


    if (
        order.status <
        trackingStatuses.length - 1
    ) {

        html += `

            <button
                class="tracking-update-button"
                id="tracking-update-button"
                type="button"
            >
                <i class="bi bi-arrow-clockwise"></i>
                Atualizar rastreamento
            </button>

            <small class="tracking-demo">
                Demonstração acadêmica: o botão simula
                a evolução do pedido.
            </small>

        `;

    }


    result.innerHTML =
        html;


    const updateButton =
        document.getElementById(
            "tracking-update-button"
        );


    if (updateButton) {

        updateButton.addEventListener(
            "click",
            function () {

                updateOrderTracking(
                    order.code
                );

            }
        );

    }

}


function updateOrderTracking(code) {

    const order =
        JSON.parse(
            localStorage.getItem(
                "pkfsport_pedido_" +
                code
            ) || "null"
        );


    if (!order) {
        return;
    }


    if (
        order.status <
        trackingStatuses.length - 1
    ) {

        order.status++;

    }


    localStorage.setItem(
        "pkfsport_pedido_" +
        code,
        JSON.stringify(order)
    );


    localStorage.setItem(
        "pkfsport_ultimo_pedido",
        JSON.stringify(order)
    );


    renderTracking(order);

}


/* =========================================================
   MODAL DE SUCESSO
   ========================================================= */

function showSuccessModal(code) {

    document
        .getElementById(
            "success-order-code"
        )
        .textContent = code;


    document
        .getElementById(
            "success-modal"
        )
        .classList.remove(
            "hidden"
        );

}


/* =========================================================
   LOGOUT
   ========================================================= */

function initializeLogout() {

    const button =
        document.getElementById(
            "logout-button"
        );


    if (!button) {
        return;
    }


    button.addEventListener(
        "click",
        function () {

            localStorage.removeItem(
                "pkfsport_logado"
            );

            localStorage.removeItem(
                "pkfsport_email"
            );


            window.location.href =
                "login.html";

        }
    );

}


/* =========================================================
   FECHAR MODAIS CLICANDO FORA
   ========================================================= */

function initializeModals() {

    document
        .querySelectorAll(".modal-overlay")
        .forEach(modal => {

            modal.addEventListener(
                "click",
                function (event) {

                    if (
                        event.target ===
                        modal
                    ) {

                        modal.classList.add(
                            "hidden"
                        );

                    }

                }
            );

        });

}


/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        initializeLogin();


        if (
            !protectStore()
        ) {

            return;

        }


        initializeProducts();

        initializeCart();

        initializePayment();

        initializePix();

        initializeTracking();

        initializeLogout();

        initializeModals();

    }
);