const connection = require('../connection/index');
class Form {
    #id;
    #sender;
    #receiver;
    #date;
    #ammount; 
    #currency;
    #payment;


    async addForm(form) {
      console.log("momde",form);
        const sqlQuery = `INSERT INTO form (id, sender, receiver, ammount,currency, date, payment) VALUES (NULL,'${form.sender
          }', '${form.receiver}', '${form.ammount}', '${form.currency}', '${form.date}', '${form.payment}')`;
    
        return await connection.query(sqlQuery)
          .then(([rows, fields]) => {
            return 'successfully added a new user ';
          })
          .catch((err) => err);
      }

    
      async getAllForms() {
    
        let results = [];
        await connection.query('SELECT * FROM form')
          .then(([rows, fields]) => {
            results = rows;
          })
          .catch((err) => {
            console.error(err);
            throw new Error('An error occurred while fetching forms');
          });
        return results;
      }


};

module.exports = Form;