import $ from 'jquery';
import DownloadAddonService from "../services/download-addon-service.js";
import {host} from '../../mainframe/pluginCommon';
import {MARKETPLACE_REPOSITORIES} from '../mktplace-config';

/**
 * Loads Form into div placeholder and bind submission buttons to the services updating the CSV data.
 */
function loadDivContent() {
    
    const repoLinks = $(linksWithPrefixes(MARKETPLACE_REPOSITORIES));
    if (repoLinks.length) {
        repoLinks.first().after($('<div>',{id: 'mktplace-div-download-form'}));
    }
    repoLinks.each(function() {
        const repoLink = $(this);
        const repoButton = $('<button>', {
            'class':'btn btn-primary btn-lg btn-marketplace-download',
            'data-toggle':'modal',
            'data-target':'#myModal',
            'data-repo': repoLink.attr('href'),
            'text': 'Launch Download form'
        });
        repoLink.after(repoButton);
    });
    

    $('#mktplace-div-download-form').load(host+'/fragments/mktplace/mktplace-download-form.html #mktplace-wrapper-div', function () {

        const downloadSubmit = $("#download-submit");

        // pass the data-repo URL from the download button to the form submit button
        $('.btn-marketplace-download').click(function(e) {
            const repoUrl = $(this).data('repo');
            downloadSubmit.data('repo', repoUrl);
        })
        downloadSubmit.click(async function (e) {
            e.preventDefault();
            const repoUrl = $(this).data('repo');
            let formData = new Array();
            formData[0] = $("#user-menu-link").data('username');
            formData[1] = repoUrl;
            formData[2] = $("#project-name").val().replace(/,/g,";");
            formData[3] = $("#customer").val().replace(/,/g,";");
            formData[4] = $("#commerce-version").val().replace(/,/g,";");
            //replace new lines with spaces.
            formData[5] = $("#comments").val().replace(/\r?\n|\r/g," ");

            await DownloadAddonService.upsertMktplaceAddonDownloadsDB(formData);
            $("#myModal").modal('hide');
            window.location.href = repoUrl;
         });

    });


    //Triggers hidden button that shows up the modal.
    repoLinks.click(function (e) {
        e.preventDefault();
        $(".btn-marketplace-download").trigger("click");
    });
    repoLinks.remove();

    //$().click()
}

function linksWithPrefixes(arr) {
    return arr.map(prefix=>`a[href^='${prefix}']`).join(',');
}

const MktplaceController = {
    loadDivContent: loadDivContent,
};

export default MktplaceController








