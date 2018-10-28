# Marketplace  - Capturing downloads information - Use guide

### One-time configuration

The page where the marketplace db will be stored needs to be created first:

* Create a page named after the DB_SPACE and DB_PAGE_TITLE constants from the mktplace-config.js file

### Modify your add-on solution wiki pages

For each wiki page with a link to a solution-addon repo:
* Add an HTML macro to the top of your page with the following content:
```
<div id="mktplace-div-download-form"></div>
```
* Add a button or link macro pointing to your repository URL and set the ID value to **mktplace-addon-download**
* Add another HTML macro at the bottom of your page with:
```
<script src="https://localhost/ywiki-plugins/dist/mktplace-download-form.js"></script>
<button class="btn btn-primary btn-lg btn-marketplace-download" data-toggle="modal" data-target="#myModal" style="display:none;">Launch Download form</button>
```
* Save your changes.



### Technical notes

* The mktplace-download-form.js file inserts the Download form into the div mktplace-div-download-form, insert the proper CSS to the wiki page html header and bind the different action buttons.
* Once the form is properly filled out, it updates the aforementioned csv file with the form information.
* A js/mktplace folder was created with most of the files required to run this plugin except from the html, css and attachment file hosted on the docs folder.
* Minimal changes were made to the webpack configuration to include a new entry point.
* jquery, bootstrap are the required libraries and minimal modifications were made to the confluence-attachment-async.js file to support multiple content types for wiki attachments. 

### TODO
* Code can be further improved to use state-of-the-art javascript syntax.
* Junits for javascript files.
* Improve form customer experience if feel appropiated.