import mysql from 'mysql2';

var connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password:'Hoangv1et2',
        database:'stiln_db'
    }
);
/*

*/
export default connection;