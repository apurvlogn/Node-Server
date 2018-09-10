/*
* Create configuration variables
*
Container all the env
*/

var environments={};
//Staging {default} Object
environments.staging={
  'httpPort':3000,
    'httpsPort':3001,
    'envName':'staging'};
//Production Object
environments.production={
    'httpPort':5000,
    'httpsPort':50001,
    'envName':'production'};
//Determine which one to be eported out

var environmentstoExport=environments[process.env.NODE_ENV]?environments[process.env.NODE_ENV]:environments.staging;

console.log(environmentstoExport);
module.exports=environmentstoExport;
