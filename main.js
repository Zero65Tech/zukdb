(async () => {

  process.env.STAGE = process.env.STAGE || 'alpha';
  process.env.PORT  = process.env.PORT  || 8080;

  if(process.argv[2] == 'build') {

    await require('./build')();

  } else if(process.argv[2] == 'cron') {

    await require('./cron')();

  } else if(process.argv[2] == 'server') {

    require('./app').listen(
        process.env.PORT,
        console.log(`\n\nServer (${ process.env.STAGE }) is up and listening at ${ process.env.PORT } port.\n\n`));

  }

})();
