console.log("This is a test project")
httpServer.listen(port, '0.0.0.0', err => {
    if (err) throw err
    console.log(`Listening on port ${port}`)
  })