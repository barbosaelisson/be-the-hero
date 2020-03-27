const crypto = require('crypto');
const connection = require('../database/connection');



module.exports = { 
    
    async index(request, response ) {
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);

    },

    async create(request, response ) {
    
    const { name, email, whatsapp, city, uf    }  = request.body; // Acessar o corpo da requisição da tabela 

    const id = crypto.randomBytes(4).toString('HEX');
     
            await  connection('ongs').insert({
    
             id,
             name,
             email,
             whatsapp,
             city,
             uf,
        }) // tabela que vai ser inserido os dados no banco


    return response.json({ id }); 
    }

};