const express = require("express")
const {userControllers} = require("../controllers/userController")
// const {UserAuthenticate} = require("../authenticate/UserAuthenticate")
const router = express.Router();
router.get("/getCustomerAccounts", userControllers.getCustomerAccounts)//UserAuthenticate.authenticateUser,
router.get("/ViewCustomerAccountInformation", userControllers.ViewCustomerAccountInformation)
router.post("/addCustomerAccount", userControllers.AddCustomerAccount)
router.put("/EditCustomerAccount/:account_id", userControllers.EditCustomerAccount)
module.exports = router