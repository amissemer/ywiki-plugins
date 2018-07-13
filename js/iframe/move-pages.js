import JSZip from 'jszip';
import {saveAs} from 'file-saver';
import {getContent,getPageTree} from './confluenceAsync';
import migrationProgramBuilder from './migrationProgramBuilder';

var globalPageTree;

async function dumpPageTree(sourceSpaceKey, sourcePageTitle) {
  console.log("dumpPageTree",sourceSpaceKey,sourcePageTitle);
  var startPage = await getContent(sourceSpaceKey, sourcePageTitle);
  
  $('#msg').html($(`<span>Dumping ${sourcePageTitle}...</span>`));
  globalPageTree = await getPageTree(startPage.id, null, null, { pages: 0 });
  var txt = JSON.stringify(globalPageTree);
  $('#msg span').text('Done');
  $('#msg').append('<button>Download</button>');
  $('#msg button').click(async () => {
    var zip = new JSZip();
    zip.file(`${sourcePageTitle}.json`, txt);
    var content = await zip.generateAsync({type:"blob"});
    saveAs(content, `${sourcePageTitle}.zip`);
  });
}

$('#dumpBtn').click(function() {
  dumpPageTree("ps", "Project Documentation");
});

$('#loadBtn').click(async function() {
  let url = 'http://localhost/ywiki-plugins/data/Project%20Documentation.json';
  $('#msg').html($(`<span>Loading from ${url}</span>`));
  globalPageTree = await $.getJSON(url);
  let pages = countPages(globalPageTree);
  $('#msg span').text(`Imported ${pages} from ${url}`);
});


$('#buildProgram').click(async function () {
  if (globalPageTree) {
    $('#msg').html($(`<span>Starting the migration</span>`));
    try {
      await migrationProgramBuilder(globalPageTree);
      $('#msg span').text('Complete');
    } catch (err) {
      $('#msg span').text(JSON.stringify(err));
    }
  } else {
    $('#msg').html($(`<span>Please load the page tree or export it first</span>`));
  }
});
function countPages(node) {
  return 1 + node.children.map(countPages).reduce((a, b) => a + b, 0);
}
