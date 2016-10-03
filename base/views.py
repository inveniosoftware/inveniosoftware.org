import glob
import json
from flask import Blueprint, render_template, abort
from jinja2 import TemplateNotFound

blueprint = Blueprint('invenio_web', __name__,
                        template_folder='templates', static_folder='static')


@blueprint.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

@blueprint.route('/')
def home():
    try:
        return render_template('index.html')
    except TemplateNotFound:
        abort(404)

@blueprint.route('/showcase')
def showcase():
    try:
        sites = []
        for filename in glob.glob('base/sites/*.json'):
            with open(filename) as f:
                sites.append(json.load(f))
        return render_template(
            'pages/showcase.html',
            sites=sites,
            site_types={
                "research-data": "Research Data",
                "library": "Library",
                "multimedia": "Multimedia",
                "institutional-repository": "IR"
            }
        )
    except TemplateNotFound:
        abort(404)


@blueprint.route('/<page>')
def show(page):
    try:
        return render_template('pages/{}.html'.format(page))
    except TemplateNotFound:
        abort(404)

@blueprint.route('/<page>/<subpage>')
def show_subpage(page, subpage):
    try:
        return render_template('pages/{}_{}.html'.format(page, subpage))
    except TemplateNotFound:
        abort(404)
