const express = require("express");
const { productController } = require("../controllers/productController");
const router = express.Router();

router.get("/get-insurance-types", productController.getInsuranceTypes);

router.get(
  "/get-products-by-type",
  productController.getInsuranceProductsByType
);

router.get(
  "/get-product-details/:productId",
  productController.getProductDetails
);

module.exports = router;
