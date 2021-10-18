import axios from "axios";

export const getTasks = async () => {
  const { data } = await axios.get("https://todolapi66.herokuapp.com/tasks");

  return data;
};

export const addTask = ({ title, body }) => axios.post(`https://todolapi66.herokuapp.com/new?title=${title}&body=${body}`).then((res) => console.log(res));

export const deleteTask = (id) => axios.delete(`https://todolapi66.herokuapp.com/delete?id=${id}`).then((res) => console.log(res));

export const updateTask = (id, { title, body, completed }) => axios.put(`https://todolapi66.herokuapp.com/change?id=${id}&title=${title}&body=${body}&completed=${completed}`).then((res) => console.log(res));
