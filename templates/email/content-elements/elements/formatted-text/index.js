const { cx, Icon } = require('@bsi-cx/design-build');

module.exports = cx.contentElement
    .withElementId('formatted-text')
    .withIcon(Icon.TEXT)
    .withLabel('Formatted Text')
    .withFile(require('./template.twig'))
    .withParts(
        cx.part.formattedText
            .withLabel('Formatted Text')
            .withHtmlEditorConfig(require('../../../../formatted-text-config'))
    );
