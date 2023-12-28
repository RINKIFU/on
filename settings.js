const chalk = require("chalk")
const fs = require("fs")

//owmner v card
global.owner = ['6281775098426'] //ur owner number
global.ownernomer = "6281775098426" //ur owner number2
global.ownername = "XyuraOffc" //ur owner name
global.ytname = "YT: Xyura Official" //ur yt chanel name
global.socialm = "GitHub: kayzenhost" //ur github or insta name
global.location = "Indonesia" //ur location

//new
global.ownergc = "-"
global.botname = "Created By XyuraOffc"
global.ownerNumber = ["6281775098426@s.whatsapp.net"]
global.ownerweb = "https://www.youtube.com/@Xyura_Official"
global.themeemoji = '🪀'
global.wm = "xyura.my.id"
global.packname = "Sticker By"
global.author = "XyuraOffc\n\n"
global.prefa = ['','!','.','#','&']
global.sessionName = 'session'
global.tekspushkon = ''
global.keyopenai ='iigf'

global.limitawal = {
    premium: "Infinity",
    free: 5
}

//media target
global.thumb = { url: 'https://telegra.ph/file/26e0f1f23a416a4261b73.jpg' }//ur thumb pic
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa

//messages
global.mess = {
    selesai: 'Done !!', 
    owner: 'Khusus Owner',
    private: 'Khusus Private',
    group: 'Khusus Group',
    wait: 'Sebentar..',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
