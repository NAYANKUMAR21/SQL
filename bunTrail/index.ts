const server = Bun.serve({
  port: Bun.env.PORT || 8080,
  fetch(req) {
    return new Response('Hello Bun I nayan Kumar');
  },
});
console.log(`http://localhost:${server.port}`);
