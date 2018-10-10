# Marketplace  - Capturing downloads information - Use guide

### Define csv database attachment (one-time configuration)

In the wiki, add the file mktplace-addon-download-data.csv under docs/attachments as a page attachment. This file will act as your database table.

### Modify link references and attachment values on javascript code (one-time configuration)
Some configuration is required in the javascript files to point to the right csv file and the css assets hosted on github
* CSS reference: Modify CSS_REFERENCE value on mktplace-download-form-plugin.js; replace it with the proper absolute URL.
* Modify the constant PAGE_ID on download-addon-service.js with the proper Wiki Page ID holding the csv attachment.
* Compile your javascript with npm run build and commit your changes.

### Modify your add-on solution wiki pages.
For each wiki page with a link to a solution-addon repo:
* Add an HTML macro to the top of your page with the following content:
```
<div id="mktplace-div-download-form"></div>
```
* Add a button or link macro pointing to your repository URL and set the ID value to **mktplace-addon-download**
* Add another HTML macro at the bottom of your page with:
```
<script src="http://localhost/ywiki-plugins/dist/mktplace-download-form.js"></script>
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