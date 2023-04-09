import mongoose from "mongoose";

const tareaSchema = mongoose.Schema({
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
    estado:{
        type:Boolean,
        default:false
    },
    fechaEntrega:{
        type:Date,
        required:true,
        default:Date.now()
    },
    prioridad:{
        type:String,
        required:true,
        enum:["Baja","Media","Alta"]
    },
    proyecto:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"proyectos"
    },
    completado:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"usuarios"
    }
},{
    timestamps:true
})

const Tarea = mongoose.model("tareas",tareaSchema);

export default Tarea;