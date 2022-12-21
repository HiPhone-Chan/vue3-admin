// https://www.tiny.cloud/docs/tinymce/6/rollup-es6-npm/
/* Import TinyMCE */
import tinymce from 'tinymce';

/* Default icons are required. After that, import custom icons if applicable */
import 'tinymce/icons/default';

/* Required TinyMCE components */
import 'tinymce/themes/silver';
import 'tinymce/models/dom';

/* Import the skin */
import 'tinymce/skins/ui/oxide/skin.css';

/* Import plugins */
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/code';
import 'tinymce/plugins/emoticons';
import 'tinymce/plugins/emoticons/js/emojis';
import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/table';
import 'tinymce/plugins/image';
import 'tinymce/plugins/help';
import 'tinymce/plugins/wordcount';

/* Import premium plugins */
/* NOTE: Download separately and add these to /src/plugins */
/* import './plugins/checklist/plugin'; */
/* import './plugins/powerpaste/plugin'; */
/* import './plugins/powerpaste/js/wordimport'; */

/* content UI CSS is required */
import contentUiSkinCss from 'tinymce/skins/ui/oxide/content.css';
/* The default content CSS can be changed or replaced with appropriate CSS for the editor content. */
import contentCss from 'tinymce/skins/content/default/content.css';

export function render({ target }) {
  tinymce.init({
    target,
    plugins: 'advlist code emoticons link lists table',
    toolbar: 'bold italic | bullist numlist | link emoticons',
    skin: false,
    content_css: false,
    content_style: contentUiSkinCss.toString() + '\n' + contentCss.toString(),
  });
};
