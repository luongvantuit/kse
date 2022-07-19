const { EntitySchema } = require('typeorm')

const departmentEntity = new EntitySchema({
    name: "Department",
    tableName: "department",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        displayName: {
            type: "varchar"
        }
    }
})

module.exports = {
    departmentEntity
}