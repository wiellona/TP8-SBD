const User = require("../models/User.Schema");

// CREATE
exports.addUser = async (req, res) => {
  try {
    const { name, npm, jurusan } = req.body;
    if (!name || !npm || !jurusan)
      return res.status(400).json({ message: "Semua field wajib diisi" });

    const newUser = new User({ name, npm, jurusan });
    await newUser.save();

    res.status(201).json({
      message: "✅ Data Mahasiswa berhasil ditambahkan",
      data: newUser,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Terjadi kesalahan server", error: error.message });
  }
};

// GET ALL USERS
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      message: "Data Mahasiswa berhasil diambil",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi kesalahan pada server saat mengambil data mahasiswa",
      error: error.message,
    });
  }
};

// UPDATE USER BY ID
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, npm, jurusan } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, npm, jurusan },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res
        .status(404)
        .json({ message: "Data Mahasiswa tidak ditemukan" });
    }

    res.status(200).json({
      message: "Data Mahasiswa berhasil diperbarui",
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi kesalahan pada server saat memperbarui data mahasiswa",
      error: error.message,
    });
  }
};

// DELETE USER BY ID
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res
        .status(404)
        .json({ message: "Data Mahasiswa tidak ditemukan" });
    }

    res.status(200).json({
      message: "Data Mahasiswa berhasil dihapus",
      data: deletedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi kesalahan pada server saat menghapus data mahasiswa",
      error: error.message,
    });
  }
};
