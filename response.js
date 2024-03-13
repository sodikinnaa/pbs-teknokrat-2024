const response = (statucCode, data, message, res) =>{
    res.status(statucCode).json({
        payload :{
            status_code : statucCode,
            datas : data,
        },
        message: message,
        metadata: {
            prev:"",
            next:"",
            max:""
        }
    })
}

module.exports = response