import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

 // @desc    Fetch all products
 // @route   GET /api/products
 // @access  Public
 const getProducts = asyncHandler(async (req, res) => {
   const products = await Product.find({})

   res.json(products)
 })

 // @desc    Fetch single product
 // @route   GET /api/products/:id
 // @access  Public
 const getProductById = asyncHandler(async (req, res) => {
   const product = await Product.findById(req.params.id)

   if (product) {
     res.json(product)
   } else {
     res.status(404)
     throw new Error('Product not found')
   }
 })

 // @desc    Create new review
// @route   POST /api/products/:id/reviews
// @access  Private
const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body

  const product = await Product.findById(req.params.id)

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    )

    if (alreadyReviewed) {
      res.status(400)
      throw new Error('Product already reviewed')
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    }

    product.reviews.push(review)

    product.numReviews = product.reviews.length

    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length

    await product.save()
    res.status(201).json({ message: 'Review added' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

 export { getProducts, getProductById,  createProductReview }