import type { VercelRequest, VercelResponse } from "@vercel/node";
import mysql from "mysql2/promise";

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


// ===== API Handler =====
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // --- CORS (important if frontend hosted on Vercel too) ---
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    if (req.method === "GET") {
      const [rows]: any = await db.query("SELECT * FROM items");
      return res.status(200).json(rows);
    }

    if (req.method === "POST") {
      const { name, quantity, description } = req.body;

      const [result]: any = await db.query(
        "INSERT INTO items (name, quantity, description) VALUES (?, ?, ?)",
        [name, quantity, description]
      );

      const [rows]: any = await db.query(
        "SELECT * FROM items WHERE id = ?",
        [result.insertId]
      );

      return res.status(201).json(rows[0]);
    }

    return res.status(405).json({ message: "Method not allowed" });
  } catch (error: any) {
    console.error("Error in /api/items:", error);
    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
}
