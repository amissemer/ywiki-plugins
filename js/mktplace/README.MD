# Marketplace  - Capturing downloads information - Use guide

### One-time configuration

The page where the marketplace db will be stored needs to be created first:

* Create a page named after the DB_SPACE and DB_PAGE_TITLE constants from the [mktplace-config.js](mktplace-config.js) file.

### Modify your add-on solution wiki pages

For each wiki page of a tool/addon in the GitHub repos whitelisted in the `mktplace-config.js`, just add regular links to the repositories main page.

* If you can get the whole space whitelisted for the HTML macro, add the macro to the footer of the page template at the space level.
* Else (for testing purpose), add the HTML macro at the botton of each page and add a Write restriction to each page

```
<script src="https://localhost/ywiki-plugins/dist/mktplace-download-form.js"></script>
```

Adjust the hostname if necessary.

### Technical notes

* The mktplace-download-form.js file inserts the Download form into the div mktplace-div-download-form, insert the proper CSS to the wiki page html header and bind the different action buttons.
* Once the form is properly filled out, it updates the aforementioned csv file with the form information.
* A js/mktplace folder was created with most of the files required to run this plugin except from the html, css and attachment file hosted on the docs folder.
* Minimal changes were made to the webpack configuration to include a new entry point.
* jquery, bootstrap are the required libraries and minimal modifications were made to the confluence-attachment-async.js file to support multiple content types for wiki attachments. 

### TODO
* Junits for javascript files.
* Improve form customer experience if feel appropiated.