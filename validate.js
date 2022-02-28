import Ajv from "ajv"
import {createRequire} from "module"
const require=createRequire(import.meta.url)
const dataSchema=require("./data.schema.json")
const data=require("./data.json")


const ajv=new Ajv({
    allErrors:true
})

const validate=ajv.compile(dataSchema)
const isValid=validate(data)

if(!isValid){
    console.error(validate.errors)
}

