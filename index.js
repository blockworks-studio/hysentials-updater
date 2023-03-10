import FileUtilities from "../FileUtilities/main";

register("command", ...args => {
    let command;
    try {
        command = args[0].toLowerCase();
    } catch (e) {
        command = ['', 1]
    }
    if (command == "dev") {
        ChatLib.chat("&aYou are currently on version &6" + "" + "!")
        ChatLib.chat("&aUpdating to latest dev version...")
        FileLib.deleteDirectory("./config/ChatTriggers/modules/Hysentials")
        net.sinender.ctcommand.Test.downloadFolderURL("https://github.com/blockworks-studio/Hysentials/archive/refs/heads/main.zip",
            "Hysentials.zip",
            "./config/ChatTriggers/modules/Hysentials",
            (boolean) => {
                if (boolean) {
                    ChatLib.chat("&aSuccessfully updated to latest dev version!")
                    com.chattriggers.ctjs.Reference.loadCT()
                } else {
                    ChatLib.chat("&cFailed to update to latest dev version!")
                }
            }
        )
        return
    }
    if (command == "stable") {
        ChatLib.chat("&cThis command is not yet implemented!")
        return
    }
    ChatLib.chat("&cMissing Arguments! /update <dev/stable>")
}).setName("update")