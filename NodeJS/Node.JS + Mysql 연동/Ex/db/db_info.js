module.exports = (function () {
  return {
    local: { // localhost
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: 'tngml123',
      database: 'test'
    },
    real: { // real server db info
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: 'tngml123',
      database: 'test'
    },
    dev: { // dev server db info
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: 'tngml123',
      database: 'test'
    }
  }
})();