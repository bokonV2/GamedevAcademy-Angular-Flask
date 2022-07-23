from flask import Flask, render_template, send_from_directory, request, make_response
import requests
app = Flask(__name__)


@app.route('/<path:path>', methods=['GET'])
def static_proxy(path):
  return send_from_directory('./', path)

@app.route('/')
def index():
    token = request.cookies.get('token')
    print(f"token:{token}")
    if token:
        return f"logged: {token}<br><a href='/logout'>logout</a>"
    return render_template('index.html')

@app.route('/logout')
def logout():
    return render_template('logout.html')


@app.route('/login')
def login():

    headers = {
    'Content-type':'application/json',
    'Accept':'application/json'
    }
    data = {"login": f"{request.args.get('login')}", "password": f"{request.args.get('password')}"}
    response = requests.post("http://51.15.220.219:81/api/login", json=data, headers=headers)
    jsn = response.json()
    if jsn["hasError"]:
        token = " "
        refreshToken = " "
    elif (request.args.get("mind")):
        token = jsn["tokens"]["token"]
        refreshToken = jsn["tokens"]["refreshToken"]

    return render_template('output.html',
        jsn=jsn,
        token=token,
        refreshToken=refreshToken,
    )

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8000, debug=True)
