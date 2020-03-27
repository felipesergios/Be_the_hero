const generateId = require('.././../src/utils/generateUniqueID')
describe('Generate Unique ID',()=>{
    it('should generate an unique ID',()=>{
        const id = generateId()
        expect(id).toHaveLength(8)
    })
})