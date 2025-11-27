// import express from "express";
// import cors from "cors";

// const app = express();
// app.use(cors());
// app.use(express.json());

// const users = [
//   { username: "admin", password: "1234" },
//   { username: "guest", password: "guest" },
// ];

// app.post("/login", (req, res) => {
//   const { username, password } = req.body;
//   const user = users.find(
//     (u) => u.username === username && u.password === password
//   );
//   if (user) {
//     res.json({ success: true, message: "Login successful" });
//   } else {
//     res.json({ success: false, message: "Invalid credentials" });
//   }
// });
// app.listen(4000, () => console.log("Server running on http://localhost:4000"));



// import express from "express";
// import cors from "cors";
// import mysql from "mysql2/promise";

// const app = express();
// app.use(cors());
// app.use(express.json());

// const db = mysql.createPool({
//   host: "localhost",      // your MySQL host
//   user: "root",           // your MySQL username
//   password: "root",           // your MySQL password
//   database: "typescript3",    // your database name
// });

// db.getConnection()
//   .then(() => console.log("Connected to MySQL database"))
//   .catch((err) => console.error("Database connection failed:", err));

// app.post("/login", async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const [rows]: any = await db.query(
//       "SELECT * FROM users WHERE username = ? AND password = ?",
//       [username, password]
//     );

//     if (rows.length > 0) {
//       res.json({ success: true, message: "Login successful" });
//     } else {
//       res.json({ success: false, message: "Invalid credentials" });
//     }
//   } catch (error) {
//     console.error("Error during login:", error);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// });

// app.listen(4000, () => console.log("Server running on http://localhost:4000"));


// ==================================NEW SERVER WITH GOOGLE AUTH ===========================================
import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";
import 'dotenv/config';

const app = express();
app.use(cors());
app.use(express.json());

// ===== MySQL Connection Pool (using env variables for Railway) =====
const db = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});



// ===== Root Test Route =====
app.get("/", (_req, res) => {
  res.send("✅ Backend is running!");
});

// ===== Inventory CRUD =====

// GET all items
app.get("/api/items", async (_req, res) => {
  try {
    const [rows]: any = await db.query("SELECT * FROM items");
    res.json(rows);
  } catch (error: any) {
    console.error("Error fetching items:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// GET single item
app.get("/api/items/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [rows]: any = await db.query("SELECT * FROM items WHERE id = ?", [id]);
    if (rows.length === 0) return res.status(404).json({ message: "Item not found" });
    res.json(rows[0]);
  } catch (error: any) {
    console.error("Error fetching item:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// POST new item
app.post("/api/items", async (req, res) => {
  const { name, quantity, description } = req.body;
  try {
    const [result]: any = await db.query(
      "INSERT INTO items (name, quantity, description) VALUES (?, ?, ?)",
      [name, quantity, description]
    );
    const [rows]: any = await db.query("SELECT * FROM items WHERE id = ?", [result.insertId]);
    res.status(201).json(rows[0]);
  } catch (error: any) {
    console.error("Error adding item:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// PUT update item
app.put("/api/items/:id", async (req, res) => {
  const { id } = req.params;
  const { name, quantity, description } = req.body;
  try {
    const [result]: any = await db.query(
      "UPDATE items SET name = ?, quantity = ?, description = ? WHERE id = ?",
      [name, quantity, description, id]
    );
    if (result.affectedRows === 0) return res.status(404).json({ message: "Item not found" });
    const [rows]: any = await db.query("SELECT * FROM items WHERE id = ?", [id]);
    res.json(rows[0]);
  } catch (error: any) {
    console.error("Error updating item:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// DELETE item
app.delete("/api/items/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [result]: any = await db.query("DELETE FROM items WHERE id = ?", [id]);
    if (result.affectedRows === 0) return res.status(404).json({ message: "Item not found" });
    res.json({ success: true, message: "Item deleted successfully" });
  } catch (error: any) {
    console.error("Error deleting item:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// ===== Start Server =====
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
