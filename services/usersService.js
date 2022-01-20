const User = require("../models/users");
const userService = new User();

class UsersService {
  async getAllUsers() {
    console.log("returned", await userService.getAllUsers());
    return await userService.getAllUsers().then((res) => res);
  }

  async addNewUser(user) {
    console.log("ser",user);
    if (user.userName && user.userName.length <= 0) {
      return "username should be greater than 0";
    } else if (user.password && user.password.length <= 0) {
      return "password should be greater than 0";
    } else if (user.fullName&& user.fullName.length <= 0) {
      return "fullname should be greater than 0";
    } else {
      return await userService.addUser(user).then((response) => response);
    }
  }
  async deleteUser(name) {
    console.log("returned", await userService.deleteUser(name));
    return await userService.deleteUser(name).then((response) => response);
  }
  async updateUser(user) {
    console.log("returned", await userService.updateUser(user));
    return await userService.updateUser(user).then((response) => response);
  }
  
  #usersList = [];

  addNewUser1 = (username, password, fullName) => {
    const user = new User(username, password, fullName);
    this.#usersList.push(user);
    console.log(this.#usersList);
    return user;
  };

  getAllUsers1 = () => {
    return this.#usersList;
  };

  deleteUser1 = (username) => {
    console.log("username", username);
    console.log(this.#usersList.filter((x) => x.getUserName() !== username));
    this.#usersList = this.#usersList.filter(
      (x) => x.getUserName() !== username
    );
    return this.#usersList;
  };

  updateUser1 = (userObject) => {
    this.#usersList
      .filter((x) => x.getUserName() === userObject.username)[0]
      .setPassword(userObject.password);

    this.#usersList
      .filter((x) => x.getUserName() === userObject.username)[0]
      .setFullName(userObject.fullName);
  };
}

module.exports = UsersService;
