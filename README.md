<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github.com/kaennn9/embedskaen/blob/main/assets/banner-dark.png?raw=true">
    <img alt="EmbedsKaen Banner" src="https://github.com/kaennn9/embedskaen/blob/main/assets/banner-light.png?raw=true" width="100%">
  </picture>
</p>

<p align="center">
  <a href="https://discord.com/users/1188494987520909422">
    <img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord"/>
  </a>
  <a href="https://github.com/kaennn9">
    <img src="https://img.shields.io/badge/GitHub-171515?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
  </a>
  <a href="https://github.com/kaennn9/embedskaen/stargazers">
    <img src="https://img.shields.io/github/stars/kaennn9/embedskaen?style=for-the-badge&color=FFD700&labelColor=1A1A1A" alt="Stars"/>
  </a>
  <a href="https://www.npmjs.com/package/embedskaen">
    <img src="https://img.shields.io/npm/v/embedskaen?style=for-the-badge&color=CB0000&logo=npm" alt="npm"/>
  </a>
</p>

<p align="center">
  <a href="https://github.com/kaennn9/embedskaen">
    <img src="https://img.icons8.com/ios-filled/50/FFD700/star.png" alt="Star"/>
    <strong>If you like the library, don't hesitate to drop a ★ on the repo!</strong>
    <img src="https://img.icons8.com/ios-filled/50/FFD700/star.png" alt="Star"/>
  </a>
</p>

<h1 align="center">
  <img src="https://img.icons8.com/fluency/48/sparkling.png" alt="sparkles"/>
  EmbedsKaen
</h1>

<p align="center">
  <strong>The most powerful and beautiful Discord embed builder for Arabic developers</strong>
</p>

<p align="center">
  <img src="https://img.icons8.com/fluency/48/discord.png" alt="Discord"/>
  <strong>Discord.js v14+</strong> • 
  <img src="https://img.icons8.com/color/48/typescript.png" width="38" alt="TypeScript"/>
  <strong>TypeScript Ready</strong> • 
  <img src="https://img.icons8.com/fluency/48/arabic.png" width="38" alt="Arabic"/>
  <strong>Full Arabic & RTL Support</strong>
</p>

## Quick Install
```bash
npm install embedskaen
```

## Why EmbedsKaen is the best choice?

| Feature                    | Description                                      |
|----------------------------|--------------------------------------------------|
| 14+ Pre-built embed types  | success • error • warn • info • premium • etc.   |
| Gorgeous auto colors       | No need to remember hex codes                    |
| Full RTL & Arabic support  | Arabic text displays perfectly                   |
| One-line sending           | `Embed.send()` — zero hassle                     |
| Infinite customization     | Change anything you want                         |

## Available Embed Types

| Type        | Color         | Default Icon                  | Usage                              |
|-------------|---------------|-------------------------------|------------------------------------|
| Success     | `#00ff00`     | Checkmark Success          | `Embed.success()`                  |
| Error       | `#ff0000`     | Cross Error                | `Embed.error()`                    |
| Warn        | `#ffff00`     | Warning Sign               | `Embed.warn()`                     |
| Info        | `#0099ff`     | Info Icon                  | `Embed.info()`                     |
| Loading     | `#ffaa00`     | Hourglass                  | `Embed.loading()`                  |
| Question    | `#95a0a0`     | Question Mark              | `Embed.question()`                 |
| Premium     | `#f1c40f`     | Crown                      | `Embed.premium()`                  |
| Pink        | `#ff73fa`     | Heart                      | `Embed.pink()`                     |
| Purple      | `#9c27b0`     | Gem                        | `Embed.purple()`                   |
| Blurple     | `#5865F2`     | Discord Logo               | `Embed.create('blurple')`          |
| Dark / Light| Auto theme    | Moon / Sun                 | `Embed.create('dark/light')`       |
| Random      | Random        | Rainbow                    | `Embed.create('random')`           |

## Quick & Stunning Examples

```js
const { Embed } = require('embedskaen');

// Instant success embed
await Embed.send(interaction, 'success', 'Done successfully!', 'The operation was completed.');

// Elegant error embed
await Embed.send(interaction, 'error', 'Something went wrong', 'Please try again later.');

// Luxurious premium embed
await Embed.send(interaction, 'premium', 'Premium Feature', 'Subscribe to premium to use this!', {
  image: 'https://example.com/premium.gif',
  footer: { text: 'Premium Only', iconURL: 'https://img.icons8.com/fluency/48/crown.png' }
});
```

### Fully Custom Embed (Amazing Example)

```js
const embed = Embed.purple('Member Information', null, {
  author: { name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL() },
  thumbnail: interaction.user.displayAvatarURL(),
  fields: [
    { name: 'Username', value: interaction.user.username, inline: true },
    { name: 'User ID', value: `\`${interaction.user.id}\``, inline: true },
    { name: 'Joined Server', value: `<t:${Math.floor(interaction.member.joinedTimestamp/1000)}:R>` }
  ],
  footer: { text: 'Powered by EmbedsKaen', iconURL: 'https://img.icons8.com/fluency/48/sparkling.png' },
  timestamp: true
});

await interaction.reply({ embeds: [embed] });
```

## Quick Links
- Documentation: https://github.com/kaennn9/embedskaen/wiki
- Support Server: [Join Here](https://discord.gg/your-server)
- npm: https://npmjs.com/package/embedskaen
- GitHub: https://github.com/kaennn9/embedskaen

## License
MIT © [Kaen](https://github.com/kaennn9)

<p align="center">
  <img src="https://img.icons8.com/fluency/48/sparkling.png" alt="sparkles"/>
  <br>
  <strong>Made with love & tons of coffee</strong>
</p>
