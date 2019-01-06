# -- Pyrasite API --
# FileName Pattern = app.py


from flask import Flask

app = Flask(__name__)


@app.route("/")
def hello():
    return "Olá, mundo!"


if __name__ == '__main__':
    app.run('127.0.0.1', 3000)   # 
