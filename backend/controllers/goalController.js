import asyncHandler from 'express-async-handler';

// CRUD FOR GOALS
const getGoals = asyncHandler(async ( req, res ) => res.send('Hello'))

const addGoals =  asyncHandler(async ( req, res ) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please fill the input fields')
     }
})

const updateGoals = asyncHandler(async ( req, res ) => res.json({ message: `Updated ${req.params.id}`}))

const deleteGoals = asyncHandler(async ( req, res ) => res.json({ message: `Deleted ${req.params.id}`}))









export {
    getGoals,
    addGoals,
    updateGoals,
    deleteGoals
}