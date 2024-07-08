const asyncHandler = (func) => async (req,res,next) => {
    try {
        await func(req,res,next)
    } catch (error) {
        res.status(err.code || 500).json({
            success: false,
            message: err.message
        })
    }
}

export {asyncHandler}


// with promises

const asyncHandlerWithPromises = (func) => {
    return (req,res,next) => {
        Promise.resolve(func(req,res,next)).catch((error) => next(err))
    } 
}
