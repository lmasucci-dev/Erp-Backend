import sql from 'mssql'

const dbSettings = {
    user: 'UGTWV400',
    password: 'DOBLEFALTA',
    server: 'DESKTOP-BQSMUNR\\SQLEXPRESS01',
    database: 'BETO_ERP',
    options: {
        encrypt: false,
        trustServerCertificate: true,
    }
}

export async function getConnection() {
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.log(error);
    }
}

export { sql };