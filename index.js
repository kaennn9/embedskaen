const { EmbedBuilder } = require('discord.js');

class Embed {
    static types = {
        success: "#00ff00",
        error: "#ff0000",
        warn: "#ffff00",
        info: "#0099ff",
        loading: "#ffaa00",
        question: "#95a0a0a0",
        premium: "#f1c40f",
        pink: "#ff73fa",
        purple: "#9c27b0",
        blurple: "#5865F2",
        dark: "#2f3136",
        light: "#ffffff",
        random: () => Math.floor(Math.random() * 16777215),
    };

    static create(type = 'info', title = null, description = null, options = {}) {
        const colorValue = typeof this.types[type] === 'function'
            ? this.types[type]()
            : this.types[type] || this.types.info;

        const embed = new EmbedBuilder();
        embed.setColor(options.color || colorValue);

        if (title) embed.setTitle(title);
        if (description) embed.setDescription(description);
        if (options.url) embed.setURL(options.url);
        if (options.timestamp !== undefined) { 
            embed.setTimestamp(options.timestamp === true ? new Date() : options.timestamp);
        }
        if (options.thumbnail) embed.setThumbnail(options.thumbnail);
        if (options.image) embed.setImage(options.image);
        
        if (options.author) {
            embed.setAuthor({
                name: typeof options.author === 'string' ? options.author : options.author.name,
                iconURL: options.author.iconURL || options.author.icon_url,
                url: options.author.url
            });
        }

        if (options.footer) {
            embed.setFooter({
                text: typeof options.footer === 'string' ? options.footer : options.footer.text || " ",
                iconURL: options.footer.iconURL || options.footer.icon_url
            });
        }

        if (Array.isArray(options.fields) && options.fields.length > 0) {
            embed.addFields(options.fields);
        }

        if (options.field) {
            const { name, value, inline = false } = options.field;
            embed.addFields({ name, value, inline });
        }

        return embed;
    }

    static success(title, desc = null, opts = {}) { return this.create('success', title, desc, opts); }
    static error(title, desc = null, opts = {})   { return this.create('error', title, desc, opts); }
    static warn(title, desc = null, opts = {})    { return this.create('warn', title, desc, opts); }
    static info(title, desc = null, opts = {})    { return this.create('info', title, desc, opts); }
    static loading(title = "جاري المعالجة...", desc = "الرجاء الانتظار قليلاً...", opts = {}) {
        return this.create('loading', title, desc, opts);
    }
    static question(title, desc = null, opts = {}) { return this.create('question', title, desc, opts); }
    static premium(title, desc = null, opts = {})  { return this.create('premium', title, desc, opts); }
    static pink(title, desc = null, opts = {})     { return this.create('pink', title, desc, opts); }
    static purple(title, desc = null, opts = {})   { return this.create('purple', title, desc, opts); }

    static async send(target, typeOrEmbed, title = null, desc = null, opts = {}) {
        let embed;

        if (typeof typeOrEmbed === 'string') {
            embed = this.create(typeOrEmbed, title, desc, opts);
        } else if (typeOrEmbed instanceof EmbedBuilder) {
            embed = typeOrEmbed;
        } else {
            throw new Error('يجب أن يكون typeOrEmbed إما string أو EmbedBuilder');
        }

        try {
            if (target.deferred || target.replied) {
                return await target.followUp({ embeds: [embed] });
            }
            if (target.reply) {
                return await target.reply({ embeds: [embed] });
            }
            if (target.send) {
                return await target.send({ embeds: [embed] });
            }
        } catch (error) {
            console.error("فشل إرسال الـ Embed:", error);
        }
    }

    static empty(color = "#f7f8fa") {
        return new EmbedBuilder().setColor(color);
    }
}

module.exports = Embed;
