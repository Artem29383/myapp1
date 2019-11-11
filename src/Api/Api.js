import * as axios from "axios";


class Api {
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:3000/'
    });
  }


  getAllTasks = () => {
    return this.instance.get(`tasks`).then(response => response.data);
  };

  postCreateTask = (id, check, title) => {
    return this.instance.post(`tasks`, {id, check, title});
  };

  deleteRemoveTask = (id) => {
    return this.instance.delete(`tasks/${id}`);
  };

  putCheckBox = (id, check, title) => {
    return this.instance.put(`tasks/${id}`, {id: id, check: !check, title: title});
  };

  putUpdateValueTask = (id, check, title) => {
    return this.instance.put(`tasks/${id}`, {id: id, check: check, title: title});
  }
}

const API = new Api();

export default API;
