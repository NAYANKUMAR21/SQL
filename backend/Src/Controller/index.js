const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'nayankumar',
  database: 'NAYAN',
});
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database.');
});

function insertData(req, res) {
  console.log(req.body);

  const data = {
    name: 'John Doe',
    age: 30,
    email: 'john@example.com',
  };

  const sql = 'INSERT INTO User_Info SET ?';

  connection.query(
    sql,
    {
      First_Name: req.body.first_name,
      Last_Name: req.body.last_name,
      Email_Id: req.body.email_address,
      Country: req.body.country,
      Address: req.body.street_address,
      City: req.body.city,
      State: req.body.state,
      Postal_Id: req.body.postal_code,
    },
    (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        return res
          .status(404)
          .send({ message: 'Something wrong happened', er: err.message });
      }
      console.log('Data inserted successfully:', result);
      return res.status(200).send('data added successfully');
    }
  );
}

function getData(req, res) {
  const sql = 'SELECT * FROM User_Info';
  connection.query(sql, (err, result) => {
    if (err) {
      return res.status(400).send(er.message);
    }
    console.log('Data retrieved from table:', result);
    return res.status(200).send(result);
  });
}

module.exports = { insertData, getData };
