import User from "../models/user.js";

const loginOrRegister = async (req, res) => {
  const { phone, address } = req.body;

  try {
    let user = await User.findOne({ phone });
    if (!user) {
      user = new User({ phone, address });
      await user.save();
    } else {
      user.address = address;
      await user.save();
    }
    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log(err);
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

export { loginOrRegister };
