//const asyncHandler =() =>{}
//const asynHandler = (func) => () => {}
//const asyncHandler = (func) =. async() => {}

import request  from "express"


const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
            .catch((err) => next)
    }
}

export { asyncHandler }


/*const asyncHandler = (fn) => async(res,req,next) =>{
    try {
        await fn(req,res,next)
    } catch (error) {
        res.status(err.code || 500).json({
            success: false,
            message: err.messsage
        })
    }
}
*/