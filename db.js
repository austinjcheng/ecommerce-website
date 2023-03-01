import mysql from 'mysql';

export async function getServerSideProps() {
  // Create a connection to the MySQL database
  const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
  });

  // Connect to the database
  connection.connect();

  // Execute a query to fetch data from the database
  const query = 'SELECT * FROM products';
  const data = await new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });

  // Close the database connection
  connection.end();

  // Return the fetched data as props
  return {
    props: {
      data
    }
  };
}
