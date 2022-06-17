module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'portfolio-postgres'),
      user: env('DATABASE_USERNAME', 'marie'),
      password: env('DATABASE_PASSWORD', '!Nes2011'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
