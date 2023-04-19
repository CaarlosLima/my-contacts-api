const db = require('../../database');

class CategoryRepository {
  async findAll() {
    const rows = await db.query('SELECT * FROM categories ORDER BY name');
    return rows;
  }

  async create(name) {
    const [row] = await db.query(`
      INSERT INTO categories(name)
      VALUES ($1)
      RETURNING *
    `, [name]);

    return row;
  }

  async findByEmail(name) {
    const [row] = await db.query('SELECT * FROM contacts WHERE name = $1', [name]);
    return row;
  }
}

module.exports = new CategoryRepository();
