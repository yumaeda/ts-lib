module.exports = {
    mode: 'production',
    entry: [
        "./src/AnchorTag.js",
        "./src/ButtonTag.js",
        "./src/DivTag.js",
        "./src/FigureTag.js",
        "./src/HtmlTag.js",
        "./src/ImageTag.js",
        "./src/InputTag.js",
        "./src/LabelTag.js",
        "./src/ListItemTag.js",
        "./src/ListTag.js",
        "./src/ParagraphTag.js",
        "./src/SelectTag.js",
        "./src/SpanTag.js",
        "./src/TableColumn.js",
        "./src/TableRow.js",
        "./src/TableTag.js",
        "./src/TextAreaTag.js"
    ],
    output: {
        filename: "html-tags.min.js"
    }
}
