import { ColorPicker, CheckboxControl, SelectControl, TextControl } from '@wordpress/components';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const el = wp.element.createElement;

const iconEl = el( 'svg', { width: '100%', height: '100%', viewbox: '0 0 800 800' },
	el( 'g', { transform: 'matrix(0.0725133,0,0,0.0449765,0.398823,9.27226)' }, el( 'path', { d: 'M0,32.361C-2.979,32.361 -5.5,29.946 -5.5,26.968L-5.5,5.394C-5.5,2.416 -2.979,0 0,0C2.979,0 5.5,2.416 5.5,5.394L5.5,26.968C5.5,29.946 2.979,32.361 0,32.361' } ) ),
	el( 'g', { transform: 'matrix(0.079107,0,0,0.0449765,4.02802,3.13851)' }, el( 'path', { d: 'M0,305.115C-2.979,305.115 -5,302.7 -5,299.722L-5,5.393C-5,2.415 -2.979,0 0,0C2.979,0 5,2.415 5,5.393L5,299.722C5,302.7 2.979,305.115 0,305.115' } ) ),
	el( 'g', { transform: 'matrix(0.07451,0,0,0.0449765,6.08009,0.712702)' }, el( 'path', { d: 'M0,412.984C-2.979,412.984 -5.5,410.569 -5.5,407.591L-5.5,5.393C-5.5,2.415 -2.979,0 0,0C2.979,0 5.5,2.415 5.5,5.393L5.5,407.591C5.5,410.569 2.979,412.984 0,412.984' } ) ),
	el( 'g', { transform: 'matrix(0.081694,0,0,0.0449765,8.14496,1.02459)' }, el( 'path', { d: 'M0,399.115C-2.979,399.115 -5,396.7 -5,393.722L-5,5.393C-5,2.415 -2.979,0 0,0C2.979,0 5,2.415 5,5.393L5,393.722C5,396.7 2.979,399.115 0,399.115' } ) ),
	el( 'g', { transform: 'matrix(0.0798229,0,0,0.0449765,10.3991,2.79195)' }, el( 'path', { d: 'M0,320.525C-2.979,320.525 -5,318.11 -5,315.132L-5,5.393C-5,2.415 -2.979,0 0,0C2.979,0 5,2.415 5,5.393L5,315.132C5,318.11 2.979,320.525 0,320.525' } ) ),
	el( 'g', { transform: 'matrix(0.0802593,0,0,0.0449765,12.486,5.66824)' }, el( 'path', { d: 'M0,192.623C-2.979,192.623 -5,190.208 -5,187.23L-5,5.393C-5,2.415 -2.979,0 0,0C2.979,0 5,2.415 5,5.393L5,187.23C5,190.208 2.979,192.623 0,192.623' } ) ),
	el( 'g', { transform: 'matrix(0.0752278,0,0,0.0449765,14.4017,4.83656)' }, el( 'path', { d: 'M0,229.607C-2.979,229.607 -5.5,227.192 -5.5,224.214L-5.5,5.393C-5.5,2.415 -2.979,0 0,0C2.979,0 5.5,2.415 5.5,5.393L5.5,224.214C5.5,227.192 2.979,229.607 0,229.607' } ) ),
	el( 'g', { transform: 'matrix(0.0767588,0,0,0.0449765,16.3143,5.14845)' }, el( 'path', { d: 'M0,215.738C-2.979,215.738 -5.5,213.323 -5.5,210.345L-5.5,5.393C-5.5,2.415 -2.979,0 0,0C2.979,0 5.5,2.415 5.5,5.393L5.5,210.345C5.5,213.323 2.979,215.738 0,215.738' } ) ),
	el( 'g', { transform: 'matrix(0.0834124,0,0,0.0449765,18.0572,7.53956)' }, el( 'path', { d: 'M0,109.41C-2.979,109.41 -5,106.995 -5,104.017L-5,5.393C-5,2.415 -2.979,0 0,0C2.979,0 5,2.415 5,5.393L5,104.017C5,106.995 2.979,109.41 0,109.41' } ) ),
	el( 'g', { transform: 'matrix(0.0774148,0,0,0.0449765,2.13244,8.54456)' }, el( 'path', { d: 'M0,64.721C-2.979,64.721 -5,62.306 -5,59.328L-5,5.393C-5,2.415 -2.979,0 0,0C2.979,0 5,2.415 5,5.393L5,59.328C5,62.306 2.979,64.721 0,64.721' } ) ),
	el( 'g', { transform: 'matrix(0.0685713,0,0,0.0449765,19.6229,8.89106)' }, el( 'path', { d: 'M0,49.312C-2.979,49.312 -5.5,46.897 -5.5,43.919L-5.5,5.394C-5.5,2.416 -2.979,0 0,0C2.979,0 5.5,2.416 5.5,5.394L5.5,43.919C5.5,46.897 2.979,49.312 0,49.312' } ) ),
);

registerBlockType( 'voizy/widget', {
	title: __( 'voizy' ),
	icon: iconEl,
	category: 'embed',
	keywords: [
		__( 'voizy' ),
		__( 'Contact form' ),
		__( 'voice message' ),
	],

	attributes: {
		listenerId: {
			type: 'number',
		},
		color: {
			type: 'string',
			default: '#57cbcc',
		},
		theme: {
			type: 'string',
			default: 'light',
		},
		context: {
			type: 'string',
		},
		privacyOptIn: {
			type: 'boolean',
			default: true,
		},
		privacyUrl: {
			type: 'string',
		},
	},

	edit: function( { attributes, setAttributes } ) {
		return (
			<div>
				<p>You'll get a ListenerId <a href="https://voizy.de/#testen" target="_blank">here</a>.</p>
				<TextControl
					label="ListenerID"
					value={ attributes.listenerId }
					onChange={ ( value ) => {
						setAttributes( { listenerId: Number( value ) } );
					} }
					required
				/>
				<SelectControl
					label={ __( 'Color scheme' ) }
					value={ attributes.theme }
					options={ [
						{ label: __( 'light' ), value: 'light' },
						{ label: __( 'dark' ), value: 'dark' },
					] }
					onChange={ ( value ) => {
						setAttributes( { theme: value } );
					} }
				/>
				<TextControl
					label={ __( 'Context: Location of the widget (optional)' ) }
					value={ attributes.context }
					placeholder={ __( 'e.g. item number in your shop or name of a subpage, ...' ) }
					onChange={ ( value ) => {
						setAttributes( { context: value } );
					} }
				/>
				<CheckboxControl
					label={ __( 'Visitors have to accept the privacy protection declaration' ) }
					checked={ attributes.privacyOptIn }
					onChange={ ( value ) => {
						setAttributes( { privacyOptIn: value } );
					} }
				/>
				<TextControl
					label={ __( 'Link to to your privacy protection declaration (recommended)' ) }
					value={ attributes.privacyUrl }
					onChange={ ( value ) => {
						setAttributes( { privacyUrl: value } );
					} }
				/>
				<div class="components-base-control"><label class="components-base-control__label">Primary color</label></div>
				<ColorPicker
					color={ attributes.color }
					onChangeComplete={ ( value ) => {
						setAttributes( { color: value.hex } );
					} }
					disableAlpha
				/>
			</div>
		);
	},

	save: function( { attributes } ) {
		const params = {};
		if ( attributes.listenerId ) {
			params.id = attributes.listenerId;
		}
		if ( attributes.color ) {
			params.color = attributes.color.slice(1);
		}
		if ( attributes.context ) {
			params.context = attributes.context;
		}
		if ( attributes.theme ) {
			params.theme = attributes.theme;
		}
		if ( attributes.privacyOptIn ) {
			params[ 'privacy-opt-in' ] = attributes.privacyOptIn;
		}
		if ( attributes.privacyUrl ) {
			params[ 'privacy-url' ] = encodeURIComponent( attributes.privacyUrl );
		}

		const querystring = 'https://widgets.voizy.de/embed.js?' + Object.keys( params ).map( function( key ) {
			return key + '=' + params[ key ];
		} ).join( '&' );

		return (
			<script src={ querystring } id="voizy-script"></script>
		);
	},
} );
