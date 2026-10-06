/* =====================================================
   PKFSPORT - SCRIPT PRINCIPAL
   Produtos, pesquisa, filtros, carrinho e login
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
    iniciarLogin();
    iniciarLoja();
});

/* =====================================================
   1. LOGIN E CADASTRO
===================================================== */

function iniciarLogin() {
    const form = document.getElementById("login-form");

    if (!form) return;

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmArea = document.getElementById("confirm-password-area");
    const confirmInput = document.getElementById("confirm-password");
    const message = document.getElementById("login-message");
    const submitButton = document.getElementById("submit-button");
    const title = document.getElementById("form-title");
    const description = document.getElementById("form-description");
    const toggleText = document.getElementById("toggle-text");
    const toggleForm = document.getElementById("toggle-form");
    const togglePassword = document.getElementById("toggle-password");

    let modoCadastro = false;

    function mostrarMensagem(texto, tipo = "erro") {
        if (!message) return;

        message.textContent = texto;
        message.className = `message ${tipo}`;
    }

    function atualizarFormulario() {
        if (title) {
            title.textContent = modoCadastro
                ? "Crie sua conta"
                : "Acesse sua conta";
        }

        if (description) {
            description.textContent = modoCadastro
                ? "Preencha os dados para se cadastrar na PKFSPORT."
                : "Entre para conferir nossa coleção esportiva.";
        }

        if (submitButton) {
            submitButton.textContent = modoCadastro
                ? "Criar conta"
                : "Entrar";
        }

        if (toggleText) {
            toggleText.textContent = modoCadastro
                ? "Já possui uma conta?"
                : "Ainda não tem conta?";
        }

        if (toggleForm) {
            toggleForm.textContent = modoCadastro
                ? "Fazer login"
                : "Criar conta";
        }

        if (confirmArea) {
            confirmArea.classList.toggle("hidden", !modoCadastro);
        }

        if (confirmInput) {
            confirmInput.required = modoCadastro;
            confirmInput.value = "";
        }

        if (passwordInput) {
            passwordInput.autocomplete = modoCadastro
                ? "new-password"
                : "current-password";
        }

        mostrarMensagem("");
    }

    if (toggleForm) {
        toggleForm.addEventListener("click", () => {
            modoCadastro = !modoCadastro;
            atualizarFormulario();
        });
    }

    if (togglePassword && passwordInput) {
        togglePassword.addEventListener("click", () => {
            const mostrar = passwordInput.type === "password";

            passwordInput.type = mostrar ? "text" : "password";

            const icon = togglePassword.querySelector("i");

            if (icon) {
                icon.className = mostrar
                    ? "bi bi-eye-slash"
                    : "bi bi-eye";
            }

            togglePassword.setAttribute(
                "aria-label",
                mostrar ? "Ocultar senha" : "Mostrar senha"
            );
        });
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = emailInput.value.trim().toLowerCase();
        const senha = passwordInput.value;

        if (!email || !senha) {
            mostrarMensagem("Preencha o e-mail e a senha.");
            return;
        }

        if (senha.length < 4) {
            mostrarMensagem("A senha deve ter pelo menos 4 caracteres.");
            return;
        }

        if (modoCadastro) {
            const confirmacao = confirmInput
                ? confirmInput.value
                : "";

            if (senha !== confirmacao) {
                mostrarMensagem("As senhas não são iguais.");
                return;
            }

            let contas = [];

            try {
                contas = JSON.parse(
                    localStorage.getItem("pkfsport_contas") || "[]"
                );
            } catch {
                contas = [];
            }

            const contaExistente = contas.some(
                (conta) => conta.email === email
            );

            if (contaExistente) {
                mostrarMensagem("Este e-mail já está cadastrado.");
                return;
            }

            contas.push({
                email: email,
                senha: senha
            });

            localStorage.setItem(
                "pkfsport_contas",
                JSON.stringify(contas)
            );

            mostrarMensagem(
                "Cadastro realizado! Agora você pode entrar.",
                "sucesso"
            );

            modoCadastro = false;
            atualizarFormulario();

            emailInput.value = email;
            passwordInput.value = "";

            return;
        }

        let contas = [];

        try {
            contas = JSON.parse(
                localStorage.getItem("pkfsport_contas") || "[]"
            );
        } catch {
            contas = [];
        }

        const conta = contas.find(
            (item) => item.email === email && item.senha === senha
        );

        /*
         * Demonstração acadêmica:
         * o login aceita contas cadastradas neste navegador.
         * Não é autenticação segura para produção.
         */

        if (!conta) {
            mostrarMensagem(
                "E-mail ou senha incorretos. Confira os dados ou crie uma conta."
            );
            return;
        }

        localStorage.setItem("pkfsport_logado", "true");
        localStorage.setItem("pkfsport_usuario", email);

        window.location.href = "loja.html";
    });
}

/* =====================================================
   2. PRODUTOS
===================================================== */

const produtos = [
    {
        id: 1,
        nome: "Camiseta Esportiva",
        categoria: "roupas",
        preco: 79.90,
        imagem: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
        descricao: "Conforto para treinar e jogar."
    },
    {
        id: 2,
        nome: "Camiseta de Treino",
        categoria: "roupas",
        preco: 59.90,
        imagem: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=600&q=80",
        descricao: "Ideal para sua rotina esportiva."
    },
    {
        id: 3,
        nome: "Tênis Esportivo",
        categoria: "tenis",
        preco: 199.90,
        imagem: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
        descricao: "Estilo e conforto para seus treinos."
    },
    {
        id: 4,
        nome: "Tênis para Corrida",
        categoria: "tenis",
        preco: 249.90,
        imagem: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=600&q=80",
        descricao: "Uma opção para acompanhar suas corridas."
    },
    {
        id: 5,
        nome: "Chuteira de Campo",
        categoria: "chuteiras",
        preco: 229.90,
        imagem: "https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&w=600&q=80",
        descricao: "Para quem vive a paixão pelo futebol."
    },
    {
        id: 6,
        nome: "Chuteira de Futsal",
        categoria: "chuteiras",
        preco: 179.90,
        imagem: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=600&q=80",
        descricao: "Praticidade para jogar na quadra."
    },
    {
        id: 7,
        nome: "Luva de Goleiro",
        categoria: "luvas",
        preco: 119.90,
        imagem: "https://images.unsplash.com/photo-1624880357913-a8539238245b?auto=format&fit=crop&w=600&q=80",
        descricao: "Acessório para defender o gol."
    },
    {
        id: 8,
        nome: "Bola de Futebol",
        categoria: "bolas",
        preco: 99.90,
        imagem: "https://images.unsplash.com/photo-1614632537423-1e6c2e7e0b0a?auto=format&fit=crop&w=600&q=80",
        descricao: "Para partidas e momentos de lazer."
    },
    {
        id: 9,
        nome: "Caneleira Esportiva",
        categoria: "caneleiras",
        preco: 39.90,
        imagem: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=600&q=80",
        descricao: "Proteção para suas partidas."
    },
    {
        id: 10,
        nome: "Meião de Futebol",
        categoria: "meiao",
        preco: 29.90,
        imagem: "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=600&q=80",
        descricao: "Conforto para completar seu uniforme."
    },
    {
        id: 11,
        nome: "Faixa de Capitão",
        categoria: "acessorios",
        preco: 19.90,
        imagem: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=600&q=80",
        descricao: "Um detalhe para destacar o capitão."
    },
    {
        id: 12,
        nome: "Mochila Esportiva",
        categoria: "acessorios",
        preco: 89.90,
        imagem: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
        descricao: "Leve seus equipamentos com praticidade."
    }
];

/* =====================================================
   3. LOJA E PESQUISA
===================================================== */

function iniciarLoja() {
    const container = document.getElementById("products-container");

    if (!container) return;

    const pesquisa = document.getElementById("search-input");
    const botoesCategoria = document.querySelectorAll("[data-category]");
    const semProdutos = document.getElementById("no-products");

    let categoriaAtual = "todos";
    let pesquisaAtual = "";

    let carrinho = carregarCarrinho();

    function formatarPreco(valor) {
        return valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });
    }

    function carregarCarrinho() {
        try {
            const dados = JSON.parse(
                localStorage.getItem("pkfsport_carrinho") || "[]"
            );

            return Array.isArray(dados)
                ? dados.filter(
                    (item) =>
                        produtos.some((produto) => produto.id === item.id) &&
                        Number.isInteger(item.quantidade) &&
                        item.quantidade > 0
                )
                : [];
        } catch {
            return [];
        }
    }

    function salvarCarrinho() {
        localStorage.setItem(
            "pkfsport_carrinho",
            JSON.stringify(carrinho)
        );
    }

    function renderizarProdutos() {
        const lista = produtos.filter((produto) => {
            const correspondeCategoria =
                categoriaAtual === "todos" ||
                produto.categoria === categoriaAtual;

            const texto = (
                produto.nome + " " + produto.descricao
            ).toLowerCase();

            const correspondePesquisa =
                texto.includes(pesquisaAtual);

            return correspondeCategoria && correspondePesquisa;
        });

        container.innerHTML = "";

        lista.forEach((produto) => {
            const card = document.createElement("article");
            card.className = "product-card";

            card.innerHTML = `
                <div class="product-image">
                    <img
                        src="${produto.imagem}"
                        alt="${produto.nome}"
                        loading="lazy"
                    >
                </div>

                <div class="product-info">
                    <span class="product-category">
                        ${nomeCategoria(produto.categoria)}
                    </span>

                    <h3 class="product-name">
                        ${produto.nome}
                    </h3>

                    <p class="product-description">
                        ${produto.descricao}
                    </p>

                    <p class="product-price">
                        ${formatarPreco(produto.preco)}
                    </p>

                    <button
                        type="button"
                        class="add-cart-button"
                        data-add-cart="${produto.id}"
                    >
                        <i class="bi bi-cart-plus"></i>
                        Adicionar ao carrinho
                    </button>
                </div>
            `;

            const imagem = card.querySelector("img");

            imagem.addEventListener("error", () => {
                imagem.style.display = "none";
            });

            container.appendChild(card);
        });

        if (semProdutos) {
            semProdutos.hidden = lista.length > 0;
        }
    }

    function nomeCategoria(categoria) {
        const nomes = {
            roupas: "Roupas",
            tenis: "Tênis",
            chuteiras: "Chuteiras",
            luvas: "Luvas",
            bolas: "Bolas",
            caneleiras: "Caneleiras",
            meiao: "Meião",
            acessorios: "Acessórios"
        };

        return nomes[categoria] || "Esportes";
    }

    if (pesquisa) {
        pesquisa.addEventListener("input", () => {
            pesquisaAtual = pesquisa.value.trim().toLowerCase();
            renderizarProdutos();
        });
    }

    botoesCategoria.forEach((botao) => {
        botao.addEventListener("click", () => {
            categoriaAtual = botao.dataset.category;

            botoesCategoria.forEach((item) => {
                item.classList.toggle("active", item === botao);
            });

            renderizarProdutos();
        });
    });

    /* ================================================
       4. CARRINHO
    ================================================ */

    const cartButton = document.getElementById("cart-button");
    const cartClose = document.getElementById("cart-close");
    const cartOverlay = document.getElementById("cart-overlay");
    const cartPanel = document.getElementById("cart-panel");
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total-value");
    const checkoutButton = document.getElementById("checkout-button");

    function abrirCarrinho() {
        cartOverlay?.classList.add("active");
        cartPanel?.classList.add("active");

        cartOverlay?.setAttribute("aria-hidden", "false");
        cartPanel?.setAttribute("aria-hidden", "false");

        document.body.classList.add("cart-open");
    }

    function fecharCarrinho() {
        cartOverlay?.classList.remove("active");
        cartPanel?.classList.remove("active");

        cartOverlay?.setAttribute("aria-hidden", "true");
        cartPanel?.setAttribute("aria-hidden", "true");

        document.body.classList.remove("cart-open");
    }

    function atualizarCarrinho() {
        if (!cartItems || !cartCount || !cartTotal) return;

        const quantidadeTotal = carrinho.reduce(
            (soma, item) => soma + item.quantidade,
            0
        );

        const valorTotal = carrinho.reduce((soma, item) => {
            const produto = produtos.find(
                (p) => p.id === item.id
            );

            return soma + (
                produto ? produto.preco * item.quantidade : 0
            );
        }, 0);

        cartCount.textContent = quantidadeTotal;
        cartTotal.textContent = formatarPreco(valorTotal);

        cartItems.innerHTML = "";

        if (carrinho.length === 0) {
            cartItems.innerHTML = `
                <div class="cart-empty">
                    <i class="bi bi-cart-x"></i>
                    <p>Seu carrinho está vazio.</p>
                </div>
            `;

            if (checkoutButton) {
                checkoutButton.disabled = true;
            }

            salvarCarrinho();
            return;
        }

        if (checkoutButton) {
            checkoutButton.disabled = false;
        }

        carrinho.forEach((item) => {
            const produto = produtos.find(
                (p) => p.id === item.id
            );

            if (!produto) return;

            const elemento = document.createElement("div");
            elemento.className = "cart-item";

            elemento.innerHTML = `
                <img
                    class="cart-item-icon"
                    src="${produto.imagem}"
                    alt="${produto.nome}"
                >

                <div class="cart-item-info">
                    <h3>${produto.nome}</h3>

                    <p>${formatarPreco(produto.preco)}</p>

                    <div class="cart-quantity">
                        <button
                            type="button"
                            data-diminuir="${produto.id}"
                            aria-label="Diminuir quantidade"
                        >−</button>

                        <span>${item.quantidade}</span>

                        <button
                            type="button"
                            data-aumentar="${produto.id}"
                            aria-label="Aumentar quantidade"
                        >+</button>
                    </div>
                </div>

                <button
                    type="button"
                    class="remove-item"
                    data-remover="${produto.id}"
                    aria-label="Remover ${produto.nome}"
                >
                    <i class="bi bi-trash"></i>
                </button>
            `;

            cartItems.appendChild(elemento);
        });

        salvarCarrinho();
    }

    function adicionarProduto(id) {
        const item = carrinho.find((produto) => produto.id === id);

        if (item) {
            item.quantidade += 1;
        } else {
            carrinho.push({
                id: id,
                quantidade: 1
            });
        }

        atualizarCarrinho();
    }

    container.addEventListener("click", (event) => {
        const botao = event.target.closest("[data-add-cart]");

        if (!botao) return;

        adicionarProduto(Number(botao.dataset.addCart));
    });

    if (cartItems) {
        cartItems.addEventListener("click", (event) => {
            const aumentar = event.target.closest("[data-aumentar]");
            const diminuir = event.target.closest("[data-diminuir]");
            const remover = event.target.closest("[data-remover]");

            if (aumentar) {
                const id = Number(aumentar.dataset.aumentar);
                const item = carrinho.find((p) => p.id === id);

                if (item) item.quantidade += 1;
            }

            if (diminuir) {
                const id = Number(diminuir.dataset.diminuir);
                const item = carrinho.find((p) => p.id === id);

                if (item) {
                    item.quantidade -= 1;

                    if (item.quantidade <= 0) {
                        carrinho = carrinho.filter((p) => p.id !== id);
                    }
                }
            }

            if (remover) {
                const id = Number(remover.dataset.remover);
                carrinho = carrinho.filter((p) => p.id !== id);
            }

            atualizarCarrinho();
        });
    }

    cartButton?.addEventListener("click", abrirCarrinho);
    cartClose?.addEventListener("click", fecharCarrinho);
    cartOverlay?.addEventListener("click", fecharCarrinho);

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            fecharCarrinho();
        }
    });

    /* ================================================
       5. FINALIZAÇÃO DEMONSTRATIVA
    ================================================ */

    checkoutButton?.addEventListener("click", () => {
        if (carrinho.length === 0) {
            alert("Adicione pelo menos um produto ao carrinho.");
            return;
        }

        const formaPagamento = prompt(
            "Escolha a forma de pagamento:\n\n" +
            "1 - Pix\n" +
            "2 - Cartão de crédito\n" +
            "3 - Cartão de débito\n\n" +
            "Digite 1, 2 ou 3:"
        );

        if (formaPagamento === null) return;

        const formas = {
            "1": "Pix",
            "2": "Cartão de crédito",
            "3": "Cartão de débito"
        };

        if (!formas[formaPagamento]) {
            alert("Opção inválida. Tente novamente.");
            return;
        }

        const confirmar = confirm(
            "Forma de pagamento: " + formas[formaPagamento] +
            "\nTotal: " + cartTotal.textContent +
            "\n\nDeseja simular a finalização do pedido?"
        );

        if (!confirmar) return;

        alert(
            "Pedido demonstrativo realizado!\n\n" +
            "Pagamento escolhido: " + formas[formaPagamento] +
            "\n\nNenhuma cobrança real foi feita."
        );

        carrinho = [];
        atualizarCarrinho();
        fecharCarrinho();
    });

    /* ================================================
       6. SAIR DA LOJA
    ================================================ */

    const logoutButton = document.getElementById("logout-button");

    logoutButton?.addEventListener("click", () => {
        localStorage.removeItem("pkfsport_logado");
        localStorage.removeItem("pkfsport_usuario");

        window.location.href = "login.html";
    });

    /* INICIALIZAÇÃO */
    renderizarProdutos();
    atualizarCarrinho();
}