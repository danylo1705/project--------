import { headers } from './index';
import axios from "axios";
import { getUrl, host, position } from ".";

export function getPositions (){
    return axios.get(getUrl(host, position), {headers})
}