# NodeTutorial

Para a aplicação funcionar deverá ser criado um banco de dados no https://www.mongodb.com/atlas/database e conect=alo ao banco.

Os parâmetros de usuário e senha deverão ser inseridos em um arquivos chamado .env que receberão os seguintes atributos:
DB_USER=UsuariodoBanco
DB_PASSWORD=SenhadoBanco

e o código para a inserção desses parâmetros deverá ser preenchido em index.js, como segue:
mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.xywnj.mongodb.net/bancodaapi?retryWrites=true&w=majority`
    )
