import mongoose from "mongoose";

const proyectosSchema = mongoose.Schema({
        nombre:{
            type:String,
            trim:true,
            required:true
        },
        descripcion:{
            type:String,
            trim:true,
            required:true
        },
        fechaEntrega:{
            type:Date,
            default:Date.now()
        },
        cliente:{
            type:String,
            trim:true,
            required:true
        },
        creador:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"usuarios"
        },
        tareas:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref:"tareas"
            }
        ],
        colaboradores:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"usuarios"
            },
        ],
    },{
        timestamps:true
    }
);

const Proyecto = mongoose.model("proyectos",proyectosSchema);

export default Proyecto;