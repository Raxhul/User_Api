import User from "../Model/module.js";

export const Index = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const Create = async (req, res) => {
  // import the module with a name user
  const data = new User({
    // structure
    // method " req " in body & the name of variable
    name: req.body.name,
    email: req.body.email,
  });
  try {
    const Userdb = await data.save();
    console.log("done ");
    // to save the data
    return res.status(201).json(Userdb);
  } catch (error) {
    console.log("error", error);
    return res.status(400).json({ message: error.message });
  }
};

export const View = async (req, res) => {
  try {
    // Use findOne by ID
   const view = await User.findById({ _id: req.params.id });
    res.status(200).json(view);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const Update = async (req, res) => {
  try {
    // Use findOneAndUpdate to update by ID
    const updated = await User.findOneAndUpdate(
      { _id: req.params.id },
      { name: req.body.name, email: req.body.email },
      { new: true } // Return the updated document
    );

    // Check if user exists
    if (!updated) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

1
export const Delete = async (req, res) => {
  // try {
  //  const Data = await User.findByIdAndDelete({ _id:req.params.id})
  //  res.status(200).json({ message : ' User  Deleted Sucessfully '})
  // } catch (error) {
  //   res.status(500).json({message : error.message })
  // }

  try {
    const data = await User.findByIdAndDelete(req.params.id);

    if (!data) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
