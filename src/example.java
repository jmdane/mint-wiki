package com.example;

import com.originmint.managers.PluginManager;
import com.originmint.plugin.IPlugin;

public class Example implements IPlugin {

    @Override
    public void onEnable() {
        PluginManager.getInstance().PLUGIN_EVENT_BUS.register(this);
    }

    @Override
    public void onDisable() {
        PluginManager.getInstance().PLUGIN_EVENT_BUS.unregister(this);
    }

    @Subscribe
    public void onClientTick(ClientTickEvent event) {
        LoggingManager.getInstance().log("ClientTickEvent", LoggingManager.LOG_LEVEL.INFO);
    }
}