import * as proxy from './proxyService';
import $ from 'jquery';

/**
 * Reads the table from the main frame into an array of associative arrays [ {col1Name: row1Value1, col2Name:row1Value2 }, {col1Name: row2Value1, col2Name:row2Value2 } ]
 * There must be 2 options set: tableName-dataheaders and  tableName-datasource, being the selectors of the header cells and the data rows respectively. */
export function getTable( options, tableName ) {
  var headers=proxy.$arrayGetText(options[tableName+"-dataheaders"]);
  var datasource=proxy.$tableCellsGetHtml(options[tableName+"-datasource"]);
  var table=[];
  return $.when(headers,datasource).then(function(headers,data) {
    return data.map( function (row) {
      var rowObj={};
      for (var i=0;i<headers.length;i++) {
        rowObj[headers[i].toLowerCase().replace(/\W+/g, "_")] = row[i];
      }
      return rowObj;
    } );
  });
}

function countUnique(arr) {
  var counts = {};
  if (arr.length>0) {
    // autodetect type
    if (Array.isArray(arr[0])) {
      // flatten the array
      arr = flattenArrayOfArrays(arr);
    }
    for(var i = 0; i< arr.length; i++) {
        var originalKey = arr[i];
        var keyStr;
        if (typeof keyStr === "string") {
          keyStr = originalKey;
        } else {
          keyStr = buildKey(originalKey);
        }
        var entry = counts[keyStr];
        if (entry == null) {
          counts[keyStr] = { key: originalKey, value: 0 };
          entry = counts[keyStr];
        }
        entry.value+=1;
    }
  }
  console.log("countUnique ret",counts);
  return counts;
}
function buildKey(composite) {
  if (typeof composite ==="string") return composite;
  if (Array.isArray(composite)) return composite.join(',');
  var keyComp=[];
  for (var col in composite) {
    if (composite.hasOwnProperty(col)) {
      keyComp.push(composite[col]);
    }
  }
  return keyComp.join(',');
}

/** Make the structure an unordered array. We could sort but DataTable will do it. */
function toArray(myMap) {
  var list=[];
  for (var key in myMap) {
    if (myMap.hasOwnProperty(key)) {
      list.push(myMap[key]);
    }
  }
  return list;
}
function flattenArrayOfArrays(arrayOfArrays) {
  return [].concat.apply([], arrayOfArrays);
}

// export function stripTags(htmlText) {
//   return htmlText.replace(/<[^>]*>/gm, '');
// }
// function row() {
//   var args = Array.prototype.slice.call(arguments);
//   return '<tr>'+args.map( function (arg) {
//     return '<td>'+arg+'</td>';
//   }).join('')+'</tr>';
// }
export function countGroupBy(rawData, groupByExtractor) {
  return toArray ( countUnique( rawData.map( groupByExtractor ) ) );
}
