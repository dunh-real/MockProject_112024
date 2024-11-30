const express = require("express");
const { userControllers } = require("../controllers/userController");
const router = express.Router();

router.get("/get-customer-accounts", userControllers.getCustomerAccounts);
router.get(
  "/View-customer-account-information",
  userControllers.viewCustomerAccountInformation
);
router.post("/add-customer-account", userControllers.addCustomerAccount);
router.put(
  "/edit-customer-account/:account_id",
  userControllers.editCustomerAccount
);

module.exports = router;
