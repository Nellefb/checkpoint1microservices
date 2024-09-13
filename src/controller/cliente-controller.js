const repository = require('../repositories/cliente-repository')

exports.get = async (req, res, next) => {
    try {
        const data = await repository.get();


        if (!data) {
            return res.status(404).send({ mensagem: "Cliente não encontrado" });
        }


        return res.status(200).send(data);
    } catch (error) {

        return res.status(500).send({ mensagem: "Erro interno no servidor" });
    }
};


exports.post = async (req, res) => {
    const { nome, telefone, cnpj } = req.body;
    if (!nome || !telefone || !cnpj) {
        return res.status(400).send('Favor preencher todos os campos: nome, telefone e cnpj.');
    }

    try {
        await repository.create(req.body);
        return res.status(201).send("Criado com sucesso");
    } catch (error) {
        return res.status(500).send("Erro interno no servidor");
    }

}

exports.put = async (req, res) => {
    const id = req.params.id;

    if (!id) {
        return res.status(400).send("Dados Id do cliente não fornecido");
    }

    try {
        const updatedClient = await repository.update(id, req.body);

        if (!updatedClient) {
            return res.status(404).send("Cliente não encontrado");
        }

        return res.status(204).send({ mensagem: "Cliente atualizado com sucesso" });
    } catch (error) {
        return res.status(500).send("Erro interno no servidor");
    }
};

