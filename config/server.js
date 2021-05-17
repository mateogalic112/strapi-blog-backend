module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "a15cb24c100e983d24a534e6a6006a69"),
    },
  },
  cron: {
    enabled: true,
  },
});
