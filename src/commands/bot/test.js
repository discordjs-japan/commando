const commando = require('discord.js-commando')

class TestCommand extends commando.Command {
  /**
   * AvatarCommando constructor
   * @param {commando.CommandoClient} client
   */
  constructor (client) {
    super(client, {
      name: 'test',
      description: 'テスト',
      memberName: 'test',
      group: 'test'
    })
  }

  /**
   * コマンドが実行されたときにする処理
   * @param {commando.CommandMessage} message
   */
  async run (message) {
    return message.say('テスト')
  }
}

module.exports = TestCommand
