from flask import Flask
from base.views import blueprint as main_blueprint
from flask_mobility import Mobility

app = Flask(__name__)
app._static_folder = 'base/static'
app.config.update(
    JQUERY='',
    CFG_SITE_NAME='Invenio',
)
Mobility(app)
app.register_blueprint(main_blueprint)

if __name__ == '__main__':
    app.run()
