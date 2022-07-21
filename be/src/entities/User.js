const { EntitySchema } = require('typeorm')

const userEntity = new EntitySchema({
    name: "User",
    tableName: "users",
    columns: {
        id: {
            type: 'int',
            generated: true,
            primary: true
        },
        username: {
            type: 'string',
            length: 16,
            nullable: false,
            unique: true,
        }, 
    }
})

module.exports = {
    userEntity
}