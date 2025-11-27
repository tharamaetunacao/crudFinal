import mysql from "mysql2/promise";

// ===== MySQL Pool =====
const db = mysql.createPool({
  host: process.env.DB_HOST,          // Railway public host
  port: Number(process.env.DB_PORT),  // Railway public port
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// ===== API Handler =====
export default async function handler(req: any, res: any) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();

  try {
    const { method } = req;

    if (method === "GET") {
      const [rows]: any = await db.query("SELECT * FROM items");
      return res.status(200).json(rows);
    }

    if (method === "POST") {
      const { name, quantity, description } = req.body;
      const [result]: any = await db.query(
        "INSERT INTO items (name, quantity, description) VALUES (?, ?, ?)",
        [name, quantity, description]
      );
      const [rows]: any = await db.query("SELECT * FROM items WHERE id = ?", [result.insertId]);
      return res.status(201).json(rows[0]);
    }

    if (method === "PUT") {
      const { id, name, quantity, description } = req.body;
      const [result]: any = await db.query(
        "UPDATE items SET name=?, quantity=?, description=? WHERE id=?",
        [name, quantity, description, id]
      );
      if (result.affectedRows === 0) return res.status(404).json({ message: "Item not found" });
      const [rows]: any = await db.query("SELECT * FROM items WHERE id = ?", [id]);
      return res.status(200).json(rows[0]);
    }

    if (method === "DELETE") {
      const { id } = req.query;
      const [result]: any = await db.query("DELETE FROM items WHERE id = ?", [id]);
      if (result.affectedRows === 0) return res.status(404).json({ message: "Item not found" });
      return res.status(200).json({ success: true });
    }

    return res.status(405).json({ message: "Method not allowed" });
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ message: "Server error", error: err.message });
  }
}
