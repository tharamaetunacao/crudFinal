import mysql from "mysql2/promise";
import 'dotenv/config';

// ===== MySQL Pool =====
const db = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// ===== Handler =====
export default async function handler(req: any, res: any) {
  try {
    if (req.method === "GET") {
      const [rows]: any = await db.query("SELECT * FROM items");
      res.status(200).json(rows);
    } else if (req.method === "POST") {
      const { name, quantity, description } = req.body;
      const [result]: any = await db.query(
        "INSERT INTO items (name, quantity, description) VALUES (?, ?, ?)",
        [name, quantity, description]
      );
      const [rows]: any = await db.query("SELECT * FROM items WHERE id = ?", [result.insertId]);
      res.status(201).json(rows[0]);
    } else {
      res.status(405).json({ message: "Method not allowed" });
    }
  } catch (error: any) {
    console.error("Error in /api/items:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
}
