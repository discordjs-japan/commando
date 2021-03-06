const commando = require('discord.js-commando')
const path = require('path')
const sqlite = require('sqlite')

// Options: https://discord.js.org/#/docs/commando/master/typedef/CommandoClientOptions
const client = new commando.CommandoClient({
  owner: '1234567890',
  commandPrefix: 'c!'
})

// Docs: https://discord.js.org/#/docs/commando/master/class/CommandoClient
client
  .on('error', console.error)
  .on('ready', () => {
    console.log('Ready!')
  })

// Docs: https://discord.js.org/#/docs/commando/master/class/CommandoRegistry
client.registry
  .registerDefaults()
  .registerGroups([
    ['test', 'Test - テスト']
  ])
  .registerCommandsIn(path.join(__dirname, 'commands')) // 注意: registerGroupsでグループを登録する前に実行すると、エラーが起きるので最後に実行しておこう。

// Docs: https://discord.js.org/#/docs/commando/master/general/first-steps
client.setProvider(
  sqlite.open(path.join(__dirname, 'database', 'settings.sqlite3')).then((db) => new commando.SQLiteProvider(db))
).catch(console.error)

client.login('your token')
