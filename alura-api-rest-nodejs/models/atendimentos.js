const conexao = require("../infraestrutura/conexao");

class Atendimento {
  lista(res) {
    const sql = "SELECT * FROM Atendimentos";
    conexao.query(sql, (erro, resultados) => {
      if (erro) res.status(400).json(erro);
      else res.status(200).json(resultados);
    });
  }

  buscaPorId(id, res) {
    const sql = `SELECT * FROM Atendimentos WHERE id=${id}`;
    conexao.query(sql, (erro, resultados) => {
      if (erro) res.status(400).json(erro);
      else {
        const atendimento = resultados[0];
        res.status(200).json(atendimento);
      }
    });
  }

  adiciona(atendimento, res) {
    const sql = "INSERT INTO Atendimentos SET ?";
    conexao.query(sql, atendimento, (erro, resultados) => {
      if (erro) res.status(400).json(erro);
      else res.status(201).json(atendimento);
    });
  }

  altera(id, valores, res) {
    const sql = "UPDATE Atendimentos SET ? WHERE id=?";
    conexao.query(sql, [valores, id], (erro, resultados) => {
      if (erro) res.status(400).json(erro);
      else res.status(201).json({...valores, id});
    });
  }

  deleta(id, res) {
    const sql = "DELETE FROM Atendimentos WHERE id=?";
    conexao.query(sql, id, (erro, resultados) => {
      if (erro) res.status(400).json(erro);
      else res.status(201).json({id});
    });
  }
}

module.exports = new Atendimento();
