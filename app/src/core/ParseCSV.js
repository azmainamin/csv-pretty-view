/**
 * Removes empty rows
 * @param {*} tableData 
 */
export function removeEmptyRows(tableData) {
  return tableData.filter(row => row !== undefined && row !== "");
}

