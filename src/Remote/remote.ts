import axios from "axios";

export const remote = axios.create({
  baseURL: 'http://ec2-43-200-89-198.ap-northeast-2.compute.amazonaws.com:8040'
});
