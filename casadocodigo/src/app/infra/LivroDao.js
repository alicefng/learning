class LivroDao {

  constructor(db) {
    this._db = db;
  }

  adiciona(livro) {
    return new Promise((resolve, reject) => {
      
      // db.run instrucao do sqlite que nao retorna resultado - como insercao, delecao e atualizacao
      /* parametros: instrucao; 
       * array com as informacoes que substituirao as interrogacoes ; 
       * funcao callback que sera executa ao final
       */
      this._db.run(`INSERT INTO livros (titulo, preco, descricao) values (?,?,?)`, [
          livro.titulo,
          livro.preco,
          livro.descricao
        ],
        function(err) {
          if (err) {
            console.log(err);
            return reject('Não foi possível adiciona o livro!');
          }
          resolve();
        });
    })
  }

  lista() {
    return new Promise((resolve, reject) => {
      this._db.all(
        'SELECT * FROM livros',
        (erro, resultados) => {
          if (erro) return reject('Não foi possível listar os livros!');

          return resolve(resultados);
        }
      )
    });
  }
}

module.exports = LivroDao;