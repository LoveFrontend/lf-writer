module.exports = function (source, map) {
  let handledSource = source.replace('<lf-title>', '<p>')
  handledSource = source.replace('</lf-title>', '</p>')
  // console.log(JSON.stringify(handledSource))
  return JSON.stringify(handledSource)
}