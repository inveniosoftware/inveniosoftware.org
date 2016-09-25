from flask import Flask
from base.views import blueprint as main_blueprint

app = Flask(__name__)
app._static_folder = 'base/static'
app.config.update(
    JQUERY='',
    CFG_SITE_NAME='Invenio',
)
app.register_blueprint(main_blueprint)

if __name__ == '__main__':
    app.run()
