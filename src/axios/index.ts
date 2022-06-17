export const headers = {
    'mode': 'cors',
    'Access-Control-Allow-Headers': 'X-PINGOTHER, Content-Type',
    'Access-Control-Allow-Origin': "*",
    "Content-Type": "application/json",
};
export const host = 'http://localhost:8080'
export const position = '/Position'
export function getUrl (hostName:string, r:string){
    return `${hostName}${r}`
}