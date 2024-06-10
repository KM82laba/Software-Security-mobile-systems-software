import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import swaggerAutogen from 'swagger-autogen'

const _dirname = dirname(fileURLToPath(import.meta.url))

const doc = {
    info: {
        title: 'Phonebook API',
        description: 'API для работы с телефонным справочником',
    },
    definitions: {
        PhoneEntry: {
            id: 1,
            name: 'Клочко Максим',
            number: '123-456-7890'
        },
        PhoneEntries: [
            {
                $ref: '#/definitions/PhoneEntry'
            }
        ],
        NewPhoneEntry: {
            name: 'Клочко Максим',
            number: '123-456-7890'
        },
        UpdatedPhoneEntry: {
            name: 'Клочко Максим',
            number: '123-456-7890'
        }
    },
    host: 'localhost:3000',
    schemes: ['http']
};

const outputFile = join(_dirname, 'output.json')
const endpointsFiles = [join(_dirname, '../server.js')]

swaggerAutogen(/*options*/)(outputFile, endpointsFiles, doc).then(({ success }) => {
 console.log(`Generated: ${success}`)
})