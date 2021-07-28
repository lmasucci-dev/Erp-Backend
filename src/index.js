import app from './app'

app.listen(app.get('port'))


console.log('Server Listen on port', app.get('port'))