import { MenuContribution, MenuModelRegistry, CommandRegistry, CommandContribution } from '@theia/core/lib/common';
import { CommonCommands } from '@theia/core/lib/browser';
import { injectable } from 'inversify';

@injectable()
// Add contribution interface to be implemented, e.g. "TheiaReadonlyMenuExtensionContribution implements CommandContribution"
export class TheiaReadonlyMenuExtensionCommandContribution implements CommandContribution {
    
    registerCommands(commands: CommandRegistry): void {
        commands.unregisterCommand("workspace:open");
        commands.unregisterCommand("workspace:openFile");
        commands.unregisterCommand("workspace:openFolder");
        commands.unregisterCommand("workspace:openRecent");
        commands.unregisterCommand("workspace:openWorkspace");
        commands.unregisterCommand("workspace:openConfigFile");
        commands.unregisterCommand("workspace:saveAs");
        commands.unregisterCommand("workspace:close");
        /*
        commands.unregisterCommand("core.save");
        commands.unregisterCommand("core.saveAll");
        commands.unregisterCommand("textEditor.commands.autosave");
        commands.unregisterCommand("file.newFile");
        commands.unregisterCommand("file.newFolder");
        commands.unregisterCommand("file.saveAs");
        */
    }

}

/*
@injectable()
export class TheiaReadonlyMenuExtensionMenuContribution implements MenuContribution {
    registerMenus(menus: MenuModelRegistry): void {
        menus.unregisterMenuAction('file_1')
    }
}
*/