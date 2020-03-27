const connection = require('../database/connection')
import generateId from '../utils/generateUniqueID'
module.exports = {
    async show(request,response){
        const ongs = await connection('ongs').select('*');
        return response.json(ongs)
    },
    async create(request,response){
        const {name,email,wpp,city,uf} = request.body
        const id = generateId()
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