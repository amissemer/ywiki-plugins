import $ from 'jquery';
import DownloadAddonService from "../services/download-addon-service.js";

/**
 * Loads Form into div placeholder and bind submission buttons to the services updating the CSV data.
 */
function loadDivContent() {

    const repoLinks = $("a[href^='https://github.wdf.sap.corp/hybris-coep']");

    $("#mktplace-div-download-form").load("https://localhost/ywiki-plugins/mktplace-download-form.html #mktplace-wrapper-div", function () {
        let repositoryUrl = repoLinks.first().attr("href");
        $("#mktplace-download-form").attr('action', repositoryUrl);

        $("#download-submit").click(async function (e) {
            e.preventDefault();
            let formData = new Array();
            formData[0] = $("#user-menu-link").data('username');
            formData[1] = repositoryUrl;
            formData[2] = $("#project-name").val().replace(/,/g,";");
            formData[3] = $("#customer").val().replace(/,/g,";");
            formData[4] = $("#commerce-version").val().replace(/,/g,";");
            //replace new lines with spaces.
            formData[5] = $("#comments").val().replace(/\r?\n|\r/g," ");

            await DownloadAddonService.upsertMktplaceAddonDownloadsDB(formData);
            $("#myModal").modal('hide');
            window.location.href = repositoryUrl;
         });

    });


    //Triggers hidden button that shows up the modal.
    repoLinks.first().click(function (e) {
        e.preventDefault();
        $(".btn-marketplace-download").trigger("click");
    });

    //$().click()
}

const MktplaceController = {
    loadDivContent: loadDivContent,
};

export default MktplaceController








