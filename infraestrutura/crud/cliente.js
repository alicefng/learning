const executaQuery = require("../database/queries");

class Cliente {
  lista() {
    const sql = "SELECT * FROM Clientes";

    return executaQuery(sql).then(resposta => resposta);
  }

  buscaPorId(id) {
    const sql = `SELECT * FROM Clientes WHERE id=${id}`;

    return executaQuery(sql);
  }

  adiciona(item) {
    const { nome, cpf } = item;
    const sql = `INSERT INTO Clientes(nome, CPF) VALUES('${nome}', '${cpf}')`;

    return executaQuery(sql).then(resposta => ({
      id: resposta.insertId,
      nome,
      cpf
    }));
  }

  atualiza(novoItem, id) {
    const { nome, cpf } = novoItem;
    const sql = `UPDATE Clientes SET nome='${nome}', CPF='${cpf}' WHERE id=${id}`;

    return executaQuery(sql);
  }

  deleta(id) {
    const sql = `DELETE FROM Clientes WHERE id=${id}`;

    return executaQuery(sql);
  }
}

module.exports = new Cliente();
