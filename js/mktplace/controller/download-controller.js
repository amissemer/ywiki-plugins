import "../../../css/mktplace-download-form.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import 'bootstrap-select/dist/css/bootstrap-select.min.css';
import 'bootstrap'
import $ from 'jquery';
import DownloadAddonService from "../services/download-addon-service.js";

/**
 * Loads Form into div placeholder and bind submission buttons to the services updating the CSV data.
 */
function loadDivContent() {

    $("#mktplace-div-download-form").load("http://localhost/ywiki-plugins/mktplace-download-form.html #mktplace-wrapper-div", function () {
        let repositoryUrl = $("#mktplace-addon-download").attr("href");
        $("#mktplace-download-form").attr('action', repositoryUrl);

        $("#download-submit").click(async function (e) {

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
            e.preventDefault();

         });

    });


    //Triggers hidden button that shows up the modal.
    $("#mktplace-addon-download").click(function (e) {
        $(".btn-marketplace-download").trigger("click");
        e.preventDefault();
    });

    $().click()
}


const MktplaceController = {
    loadDivContent: loadDivContent,
};

export default MktplaceController








