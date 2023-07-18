const tema = localStorage.getItem('tema') ?? 'light'; // "??" é um operador de coalescência nula (retorna o primeiro valor não nulo na sequência em que está sendo testado)

        // O documento recebe o valor inicial do tema
        document.documentElement.setAttribute('data-theme', tema);

        // Reunindo todos os componentes do botão
        const btsComponentes = document.querySelectorAll('.bts');

        // Para cada parte do botão (base e slide)...
        btsComponentes.forEach(btsParte => {
            // ...adicione o tema ao botão
            btsParte.classList.add(tema);
        })


        document.querySelector('.bts').addEventListener('click', () => {

            // Para cada parte do botão (base e slide)...
            btsComponentes.forEach(btsParte => {

                // ...se a parte contém a classe 'light'...
                if (btsParte.classList.contains('light')) {

                    // ...substitua por 'dark'...
                    btsParte.classList.replace('light', 'dark');
                    // ...armazene a opção 'dark' no local storage...
                    localStorage.setItem('tema', 'dark');
                    // ...e mude o tema da página para 'dark'.
                    document.documentElement.setAttribute('data-theme','dark');

                // Se não contém a classe 'light'...
                } else {

                    // ...substitua por 'light'...
                    btsParte.classList.replace('dark', 'light');
                    // ...armazene a opção 'light' no local storage...
                    localStorage.setItem('tema', 'light');
                    // ...e mude o tema da página para 'light'.
                    document.documentElement.setAttribute('data-theme','light');
                }

            });
            
        });
