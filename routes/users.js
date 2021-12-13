const express = require('express')
const router = express.Router()

// static routes
router.get('/', (req, res, next) => {
    console.log(req.query.name)
    res.send('User List')
})

router.get('/new', (req, res, next) => {
    // res.send('User New Form')
    // res.render('users/new', { firstName: "Test" }) // with place holder
    res.render('users/new') // without place holder
})

router.post('/', (req, res, next) => {
    // res.send('Create User')
    const isValod = false
    if (isValod) {
        users.push({ firstName: req.body.firstName })
        res.redirect(`/users/${users.length - 1 }`)
    } else {
        console.log('Error')
        res.render('users/new', { firstName: req.body.firstName })
    }
    // console.log(req.body.firstName)
    // res.send(`Hi ${req.body.firstName}`)
})

// dynamic route
router
    .route('/:id')
    .get((req, res, next) => {
        const id = req.params.id
        console.log(req.user)
        res.send(`Get user with ID ${id}`)
    })
    .put((req, res, next) => {
        res.send(`Update user with ID ${id}`)
    })
    .delete((req, res, next) => {
        res.send(`Delete user with ID ${id}`)
    })

// middleware - runs this code BEFORE returning the response
const users = [{ name: 'Emil'}, { name: 'Snisu' }]
router.param('id', (req, res, next, id) => {
    req.user = users[id]
    // console.log(id)
    next()
})

//*/ dynamic route = see above short version of writing this block
// router.get('/:id', (req, res, next) => {
//     const id = req.params.id 
//     res.send(`Get user with ID ${id}`)
// })

// router.put('/:id', (req, res, next) => {
//     res.send(`Update user with ID ${id}`)
     
// })
// router.delete('/:id', (req, res, next) => {
//     res.send(`Delete user with ID ${id}`)
// })

module.exports = router