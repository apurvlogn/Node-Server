# Node-Server
This repo gives the example of the standalone node server , without  any package and npm or express support 

# Description
This application returns a "hello" message, with an optional name parameter. When it's running try the following cURL commands (port 3000 implies that this is the staging environment):

Input (no parameters)

curl -X GET \
  'http://localhost:3000/hello' \
  -H 'Content-Type: application/json'
Output (default)

{
    "message": "hello, user"
}
Input (name parameter)

curl -X GET \
  'http://localhost:3000/hello?user=Apurv' \
  -H 'Content-Type: application/json'
Output

{
  "NodeServerHello": {
    "payload": {
      "response": "Hello, Apurv"
    }
  }
}
# Running
This web application runs HTTP/HTTPS on ports 3000/3001 in staging and ports 5000/5001 in production. To start it up, run

$ node index.js
which defaults to the staging environment. To configure the environment explicitly, use the NODE_ENV parameter, e.g.

$ NODE_ENV=production node index.js
License
No license, no warranty.