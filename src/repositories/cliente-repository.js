const mongoose = require('mongoose')
const Cliente = mongoose.model('Cliente')

exports.get = async () => {
    const result = await Cliente.find({
    })
    return result
}

exports.create = async (data) => {
    const cliente = Cliente(data)
    await cliente.save()
}

exports.update = async (id, data) => {
    try {
        const updatedClient = await Cliente.findByIdAndUpdate(
            id,
            {
                $set: {
                    nome: data.nome,
                    telefone: data.telefone,
                    cnpj: data.cnpj
                }
            },
            { new: true }
        );

        if (!updatedClient) {
            return null;
        }

        return updatedClient;
    } catch (error) {
        console.error("Erro ao atualizar cliente:", error);
        throw new Error("Erro interno ao atualizar cliente");
    }
};
