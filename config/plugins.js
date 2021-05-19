module.exports = ({ env }) => ({
	upload: {
		provider: 'cloudinary',
		providerOptions: {
			cloud_name: env('CLOUDINARY_NAME'),
			api_key: env('CLOUDINARY_KEY'),
			api_secret: env('CLOUDINARY_SECRET'),
		},
		actionOptions: {
			upload: {},
			delete: {},
		},
	},

	email: {
		provider: 'sendgrid',
		providerOptions: {
			apiKey: env('SENDGRID_API_KEY'),
		},
		settings: {
			defaultFrom: env('SENDGRID_DEFAULT_FROM', 'dev@strapi.io'),
			defaultReplayTo: env('SENDGRID_DEFAULT_REPLY_TO', 'dev@strapi.io'),
		},
	},
});
