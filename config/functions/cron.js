'use strict';

/**
 * Cron config that gives you an opportunity
 * to run scheduled jobs.
 *
 * The cron format consists of:
 * [SECOND (optional)] [MINUTE] [HOUR] [DAY OF MONTH] [MONTH OF YEAR] [DAY OF WEEK]
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#cron-tasks
 */

module.exports = {
	/**
	 * Simple example.
	 * Every monday at 1am.
	 */
	// '0 1 * * 1': () => {
	//
	// }
	/* "* * * * * *": async () => {
    console.log("every second");

    const users = await strapi.plugins[
      "users-permissions"
    ].services.user.fetchAll({});

    console.log(users);

    const res = await Promise.all(
      users.map(async (user) => {
        const posts = await strapi.services.post.find({
          author: user.id,
        });
        console.log(posts.length);

        const total = posts.reduce((acc, post) => acc + post.likes.length, 0);

        await strapi.plugins["email"].services.email.send({
          to: "lbajunmpbpoummdivz@upived.online",
          from: "Strapitest@localhost.com",
          subject: "Your likes total",
          text: `You got ${total} likes`,
        });
      })
    );
  }, */
	/* '* * * * * *': async () => {
		await strapi.services.email.sendEmail('The subject', '<h1>Html</h1>');
	}, */
	/* '* * * * * *': async () => {
		try {
			await strapi.plugins['email'].services.email.send({
				to: 'paulbocuse@strapi.io',
				from: 'joelrobuchon@strapi.io',
				cc: 'helenedarroze@strapi.io',
				bcc: 'ghislainearabian@strapi.io',
				replyTo: 'annesophiepic@strapi.io',
				subject: 'Use strapi email provider successfully',
				text: 'Hello world!',
				html: 'Hello world!',
			});
		} catch (err) {
			console.log(err[0].message);
		}
	}, */
};
