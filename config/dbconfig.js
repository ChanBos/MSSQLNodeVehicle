const config = {
    user: 'Chanelle',
    password: 'SQLChan',
    server: 'localhost',
    database: 'Azura',
    port: 1433,
    dialect: "mssql",
    syncronize: true,
    options: {
        trustedconnection: true,
        enableArithAbort: true,
        instancename: 'SQLEXPRESS01',
        encrypt: false
    }
}

module.exports = config;