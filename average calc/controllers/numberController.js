const processNumbers = require('../services/numberService');

const getNumbers = async (req, res) => {
  try {
    const token = process.env.ACCESS_TOKEN;
    const type = req.params.numberid;
    const result = await processNumbers(type, token);
    res.json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getNumbers };
