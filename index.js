const {Telegraf} = require('telegraf');
const express = require('express');

const app = express(); // Inicia uma instância do framework Express

const bot = new Telegraf("#"); // Inicializa o bot do Telegram com o token fornecido

bot.on('text', (ctx) => { // Define um ouvinte de eventos para mensagens de texto
    const text = ctx.message.text.toLowerCase(); // Converte o texto para minúsculas para facilitar a comparação
    if (text.includes('!info')) { // Verifica se o texto da mensagem contém '!info'
        ctx.reply( // Responde à mensagem
            "Olá!😁\n\nEu sou um bot do Telegram projetado para monitorar o nível de água nas su" +
            "as caixas d'água👨‍💻💧.\n\nMeu objetivo é ajudar a garantir que você esteja ciente de q" +
            "ualquer queda no nível de água, permitindo que você tome medidas rapidamente p" +
            "ara evitar escassez ou danos. Basta me adicionar ao seu grupo ou conversa e eu" +
            " começarei a monitorar o nível da água para você. Se precisar de mais informaç" +
            "ões sobre o meu funcionamento ou recursos adicionais, basta digitar o comando !info.\n\n" +
            "Para acessar o monitoramento completo das instalações. Acesse o DashBoard no link abaixo:\n\n" +
            "http://linkdodashboard/   👈" 
            // Mensagem de introdução e informações sobre o bot
        );
    }
    // else if (text.includes("abc")) {    ctx.reply("Olá, sou um BOT programado");
    // }
});

app.post('/triggerAlarm', (req, res) => { // Define um endpoint POST '/triggerAlarm'
    bot.telegram.sendMessage("#", // ID do chat onde enviar a mensagem
            "🚨🚨ALERTA: NÍVEL BAIXO DE ÁGUA NA CAIXA D'ÁGUA🚨🚨\n\n+O nível de água na sua" +
                    " caixa d'água está baixo! Isso pode indicar um vazamento ou uma entrada insufi" +
                    "ciente de água. Verifique imediatamente as conexões, torneiras e tubulações pa" +
                    "ra detectar vazamentos. ❗❗"  // Mensagem de alerta sobre o nível baixo de água
        );
    res.sendStatus(200); // Envia um código de status 200 (OK) como resposta
});

app.get('/', (req, res) => { // Define um endpoint GET '/'
    res.sendFile(__dirname + '/index.html'); // Envia o arquivo index.html como resposta
});

bot.launch(); // Inicia o bot do Telegram
console.log("Bot Running"); // Exibe uma mensagem indicando que o bot está em execução


app.listen(3000, () => { // Inicia o servidor Express na porta 3000
    console.log('Server running on port 3000'); // Exibe uma mensagem indicando que o servidor está em execução
});
