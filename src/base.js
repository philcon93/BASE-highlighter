/**
 * B@SE patterns
 *
 * @author Phil Connah
 */
Rainbow.extend('html', [{
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
			1: 'function.tag.open',
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
		// Functions parameters attributes keys and value
		matches: {
			1: 'function.parameter.key',
			2: 'function.parameter.operator',
			3: 'string.quote',
			4: 'function.parameter.value',
			5: 'string.quote'
		},
		pattern: /([a-z_]+)(:)(&#39;|'|")(.*?)(\3)/gi
	},
	// {
	// 	// Functions attributes values
	// 	matches: {
	// 		1: 'support.operator',
	// 		2: 'string.quote',
	// 		3: 'function.parameter.value',
	// 		4: 'string.quote'
	// 	},
	// 	pattern: /(:)(&#39;|'|")(.*?)(\2)/g
	// },
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
