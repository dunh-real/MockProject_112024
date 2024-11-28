const { mssql, poolPromise } = require("../config/db");

const getInsuranceTypes = async (req, res) => {
  try {
    const query = `
      SELECT name, situation, description
      FROM product_types
    `;

    const pool = await poolPromise;
    const result = await pool.request().query(query);

    if (result.recordset.length === 0) {
      return res.status(404).json({ message: "No insurance types found." });
    }

    return res.status(200).json(result.recordset);
  } catch (error) {
    console.error("Error fetching insurance types: ", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const getInsuranceProductsByType = async (req, res) => {
  const insuranceType = req.query.type;

  if (!insuranceType) {
    return res.status(400).json({ error: "Insurance type is required" });
  }

  try {
    const query = `
      SELECT p.id, p.name, p.type, p.property_for, p.situation_for, p.price, p.activate_duration, p.payment_duration,
             p.created_date, p.num_of_customers, p.review_rating, p.required_paper, p.terms_conditions_url, p.terms_privacy_url
      FROM products p
      JOIN product_types pt ON p.type = pt.name
      WHERE pt.name = @insuranceType
    `;

    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("insuranceType", mssql.VarChar, insuranceType)
      .query(query);

    if (result.recordset.length === 0) {
      return res.status(404).json({
        message: "No products found for the specified insurance type.",
      });
    }

    return res.status(200).json(result.recordset);
  } catch (error) {
    console.error("Error fetching insurance products: ", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const getProductDetails = async (req, res) => {
  const { productId } = req.params;

  try {
    const query = `
      SELECT *
      FROM products
      WHERE id = @id
    `;

    const pool = await poolPromise;
    const result = await pool
      .request()
      .input("id", mssql.Int, productId)
      .query(query);

    if (result.recordset.length === 0) {
      return res.status(404).json({
        message: "No product found.",
      });
    }

    return res.status(200).json(result.recordset);
  } catch (error) {
    console.error("Error fetching product details: ", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const productController = {
  getInsuranceTypes,
  getInsuranceProductsByType,
  getProductDetails,
};

module.exports = { productController };
