const connection = require('../database/connection')
const crypto = require('crypto')
module.exports = {
    async show(request,response){
        const ongs = await connection('ongs').select('*');
        return response.json(ongs)
    },
    async create(request,response){
        const {name,email,wpp,city,uf} = request.body
        const id = crypto.randomBytes(4).toString('HEX')
        //console.log(data)
        await connection('ongs').insert({
            id,
            name,
            email,
            wpp,
            city,
            uf
        })
        return response.json({id})
    },

    
}