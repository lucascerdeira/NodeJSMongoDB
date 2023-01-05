//puxando as rotas do app
import app from './src/app.js';

// vamos condicionar a porta
//ou ela ficara em um hambiente de produção ou ficara fixa
const port = process.env.PORT || 3000;

// research arrow function
app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`);
    
    
});
