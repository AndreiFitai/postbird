class Schema extends ModelBase {

  constructor (schemaName) {
    super();
    this.className = 'Model.Schema';
    this.schemaName = schemaName;
  }

  static create (name, options, callback) {
    if (callback === undefined && typeof options == 'function') {
      callback = options;
      options = {};
    }

    var sql = `CREATE SCHEMA "${name}";`;

    return this.q(sql).then(res => {
      callback && callback(new Model.Schema(name), error);
      return Promise.resolve(new Model.Schema(name));
    });
  }

  static findAll (callback) {
    var sql = "select nspname as name from pg_catalog.pg_namespace;"

    return this.q(sql).then(res => {
      var schemas = [];
      if (res) {
        res.rows.forEach((row) => {
          schemas.push(Model.Schema(row.name));
        });
      }
      callback(schemas, error);
      return Promise.resolve(schemas);
    });
  }

  drop (options, callback) {
    if (callback === undefined && typeof options !== 'object') {
      callback = options;
      options = {};
    }

    if (options.ifExist === undefined) options.ifExist = true;
    if (options.cascade === undefined) options.cascade = true;

    var ifExistSql = options.ifExist ? "IF EXISTS" : "";
    var cascadeSql = options.cascade ? "CASCADE" : "";
    var sql = `DROP SCHEMA ${ifExistSql} "${this.schemaName}" ${cascadeSql}`;

    return this.q(sql, (res, error) => {
      callback && callback(res, error);
    });
  }

  getTableNames (callback) {
    var sql = `SELECT * FROM information_schema.tables where table_schema = '${this.schemaName}';`;

    return this.query(sql).then(rows => {
      var names = [];
      if (rows.rows) {
        names = rows.rows.map((t) => { return t.table_name });
      }
      callback && callback(names, error);
      return Promise.resolve(names);
    });
  }
}

global.Model.Schema = Schema;

module.exports = Schema;
