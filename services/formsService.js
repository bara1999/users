const Form = require("../models/form");
const formService = new Form();
class FormsService {
  async getAllForms() {
    console.log("returned", await formService.getAllForms());
    return await formService.getAllForms().then((res) => res);
  }

  async addForm(form) {
    console.log("ser",form.sender.length===0);
    if (form.sender.length === 0) {
      return "sender should be greater than 0";
    } else if (form.receiver.length <= 0) {
      return "receicer should be greater than 0";
    } else if (form.ammount < 0) {
      return "ammount should be greater than 0";
    } else if (form.currency.length <= 0) {
      return "currency should be greater than 0";
    }else if (form.date.length <= 0) {
      return "currency should be greater than 0";
    }else if (form.payment.length <= 0) {
      return "payment should be greater than 0";
    }
    else {
      return await formService.addForm(form).then((response) => response);
    }
  }
  
}

module.exports = FormsService;
