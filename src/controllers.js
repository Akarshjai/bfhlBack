exports.handlePostRequest = (req, res) => {
    const { data } = req.body;
    if (!data || !Array.isArray(data)) {
      return res.status(400).json({ is_success: false, message: "Invalid input" });
    }
  
    const numbers = [];
    const alphabets = [];
    
    data.forEach(item => {
      if (!isNaN(item)) numbers.push(item);
      else if (typeof item === "string" && item.match(/^[a-zA-Z]$/)) alphabets.push(item);
    });
  
    const highestAlphabet = alphabets.length > 0
      ? [alphabets.sort((a, b) => b.localeCompare(a))[0]]
      : [];
  
    res.json({
      is_success: true,
      user_id: "john_doe_17091999",
      email: "john@xyz.com",
      roll_number: "ABCD123",
      numbers,
      alphabets,
      highest_alphabet: highestAlphabet
    });
  };
  
  exports.handleGetRequest = (req, res) => {
    res.json({ operation_code: 1 });
  };
  