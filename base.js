/**
 * B@SE patterns
 *
 * @author Phil Connah
 */
Rainbow.extend('html', [
	{
		// Opening/Closing function tags
        matches: {
            1: 'function.tag.open',
            2: 'function.tag.close'
        },
        pattern: /(\[&percnt;|\[%)|(\/?\??&percnt;]|\/?\??%])/g
    },
	{
		// First word in function
        matches: {
            1: 'function.tag',
            2: 'function.tag-name'
        },
        pattern: /(\[&percnt;\??|\[%\??)(\w+)/gi
    },
	{
		// Closing function
		matches: {
            1: 'function.tag.open',
            2: 'function.tag.tag-name',
			3: 'function.tag.close'
        },
        pattern: /(\[&percnt;\/|\[%\/)(\w+)(\/?\??&percnt;]|\/?\??%])/gi
	},
	{
		// Functions parameters attributes keys
        matches: {
            1: 'function.parameter.key',
			2: 'function.parameter.operator'
        },
        pattern: /([a-z_]+)(?:\:)/gi
    },
	{
		// Functions attributes values
        matches: {
            1: 'string.quote',
            2: 'function.parameter.value',
			3: 'string.quote'
        },
        pattern: /(\:\&#39;|"|')([a-zA-Z0-9_-]+)(\&#39;|"|')/g
    },
	{
		// Functions * parameters attributes
        matches: {
            1: 'function.tag.open',
			2: 'function.tag-name',
			3: 'function.parameter.star',
			4: 'function.parameter.key',
			5: 'function.tag.close'
        },
        pattern: /(\[&percnt;|\[%)(\param )(\*|)([a-z_]+)(\/?\??&percnt;]|\/?\??%])/gi
    },
	{
		// Data tag
        matches: {
            1: 'data.tag.open',
			2: 'data.tag.value',
            3: 'data.tag.close'
        },
        pattern: /(\[&#64;\??|\[@\??)(\w+)(&#64;\]|@\])/g
    },
]);

Rainbow.addAlias('base', 'html');
Rainbow.onHighlight(function(block, language) {
    console.log(block, 'for language', language, 'was highlighted');
});
