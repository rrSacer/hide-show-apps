import {Extension} from 'resource:///org/gnome/shell/extensions/extension.js';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

export default class HideShowApps extends Extension {
    enable() {
        this._icon = Main.overview.dash._showAppsIcon;
        this._icon?.hide();
        this._id = this._icon?.connect('notify::visible', () => {
            if (this._icon.visible)
                this._icon.hide();
        });
    }

    disable() {
        if (this._id)
            this._icon.disconnect(this._id);
        this._id = null;
        this._icon?.show();
        this._icon = null;
    }
}
