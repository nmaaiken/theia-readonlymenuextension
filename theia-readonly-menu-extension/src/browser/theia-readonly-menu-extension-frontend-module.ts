/**
 * Generated using theia-extension-generator
 */
import { CommandContribution, MenuContribution } from '@theia/core';
import { ContainerModule } from 'inversify';
import { TheiaReadonlyMenuExtensionCommandContribution } from './theia-readonly-menu-extension-contribution';


export default new ContainerModule(bind => {

    // Replace this line with the desired binding, e.g. "bind(CommandContribution).to(TheiaReadonlyMenuExtensionContribution)
    //bind(MenuContribution).to(TheiaReadonlyMenuExtensionMenuContribution)
    bind(CommandContribution).to(TheiaReadonlyMenuExtensionCommandContribution)
});
