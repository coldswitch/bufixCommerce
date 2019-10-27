const express = require("express");
const router = express.Router();
const storeController = require("../controllers/storeController");
// const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

// Do work here
router.get("/", storeController.homePage);
router.get("/shop", storeController.shopPage);
router.get("/cart", storeController.cartPage);
router.get("/checkout", storeController.checkoutPage);
router.get("/about", storeController.about);
router.get("/blog", storeController.blog);
router.get("/contact", storeController.contact);
router.get("/product-single", storeController.productSingle);
router.get("/blog-single", storeController.blogSingle);

//auth route
router.get("/register", userController.register);
router.post("/register", userController.register);
router.get("/login", userController.login);

module.exports = router;
