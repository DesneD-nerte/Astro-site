export default ({ env }) => ({
  io: {
    enabled: true,
    config: {
      IOServerOptions: {
        cors: { origin: "http://localhost:3000", methods: ["GET"] },
      },
      contentTypes: {
        product: "*",
      },
      events: [
        {
          name: "connection",
          handler: ({ strapi }, socket) => {
            strapi.log.info(`[io] new connection with id ${socket.id}`);
          },
        },
      ],
    },
  },
  "users-permissions": {
    config: {
      jwt: {
        expiresIn: "30d",
      },
    },
  },
  upload: {
    config: {
      providerOptions: {
        localServer: {
          maxage: 300000,
        },
      },
    },
  },
});
