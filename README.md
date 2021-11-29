# meltingplot

This repo implements MeltingPlot, a user-friendly website designed to be an easy and intuitive UI wrapper to Matplotlib.

## Directory Structure

### Frontend

All frontend code is stored in meltingplot-frontend/src:

meltingplot-frontend/src     
|      
|-> assets/img:  all images used (pots and such)     
|-> components: all Reactstrap functions implementing modules on each page displayed     
|-> css: all CSS to beautify the frontend components and views     
|-> util: utility files to deal with python code generation     
|-> views: actual pages of the site that are loaded depending on user's actions     
|-> index.js: handles the web routing through our site's various pages     

### Backend

All backend code is stored in /api/

This includes testing (api/tests) and database (`database.py`) and graph generation (api/models).
