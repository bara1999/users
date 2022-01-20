const connection = require('../connection/index');
class User {
  #id;

    #userName;
    #password;
    #fullName;

    async addUser(user) {
      console.log("momde",user);
        const isExistingUser = await connection.query(`SELECT * FROM user where lower(userName)='${user.userName}'`)
        .then(([rows, fields]) => {
          if (rows.length > 0) {
            return true;
          } else return false;
        });
    
        if (isExistingUser) {
          return "the username already exists in the DB. Please choose another username";
        }
    
        const sqlQuery = `INSERT INTO user (id, userName, password, fullName) VALUES (NULL,'${user.userName
          }', '${user.password}','${user.fullName}')`;
    
        return await connection.query(sqlQuery)
          .then(([rows, fields]) => {
            return 'successfully added a new user ';
          })
          .catch((err) => err);
      }

      async updateUser(user) {
          const sqlQuery = `UPDATE user set userName='${user.userName}', password='${user.password}',fullName ='${user.fullName}' WHERE userName = '${user.userName}'`;
      
          return await connection.query(sqlQuery)
            .then(([rows, fields]) => {
              return 'successfully  uppdated a user ';
            })
            .catch((err) => err);
        }

      getUser() {
        return {
          name: this.#userName,
          password: this.#password,
          fullName: this.#fullName,
        };
      }
    
      async getAllUsers() {
    
        let results = [];
        await connection.query('SELECT * FROM user')
          .then(([rows, fields]) => {
            results = rows;
          })
          .catch((err) => {
            console.error(err);
            throw new Error('An error occurred while fetching students');
          });
        return results;
      }
      
  async deleteUser(name) {
   console.log(name);
    const sqlQuery =` DELETE FROM user WHERE userName= '${name}'`; 
      

    return await connection.query(sqlQuery)
      .then(([rows, fields]) => {
        return 'successfully delete a new user ';
      })
      .catch((err) => err);
  }





};

module.exports = User;