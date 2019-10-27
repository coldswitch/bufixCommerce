exports.homePage = (req, res) => {
  res.render("index");
};
exports.shopPage = (req, res) => {
  res.render("shop");
};
exports.productSingle = (req, res) => {
  res.render("product-single");
};
exports.cartPage = (req, res) => {
  res.render("cart");
};
exports.checkoutPage = (req, res) => {
  res.render("checkout");
};
exports.about = (req, res) => {
  res.render("about");
};
exports.blog = (req, res) => {
  res.render("blog");
};
exports.contact = (req, res) => {
  res.render("contact");
};

exports.blogSingle = (req, res) => {
  res.render("blog-single");
};
