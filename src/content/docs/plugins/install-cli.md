---
title: Installing the CLI
description: A guide on how to install the Mint Client CLI.
---

The MintClient Command Line Interface (CLI) allows users to create plugins
from their terminal or command prompt. This guide will help you download, 
install, authenticate, and run the CLI, as well as install any necessary libraries.

## Step 1: Downloading the CLI

1. **Visit the OriginMint Panel**  
   Navigate to the [OriginMint website](https://panel.originmint.com) and scroll down to the plugin section
    to download the CLI.

2. **Choose Your Operating System**  
   Select the appropriate download based on your operating system:
    - **Windows x64**
    - **macOS x64**
    - **macOS ARM64**
    - **Linux x64**

3. **Download the Installer**  
   Once you've selected your OS, you can download the installer by clicking the download button.


---

## Step 2: Where to place the CLI

- **Windows**: After downloading, move the executable file (`mint-cli.exe`) to a directory where you plan to work on your plugins, such as:

  `C:/Users/YourUsername/Desktop/plugins-mint/`

  This will make it easy to manage and access the CLI and your projects from one location.

- **macOS/Linux**: After downloading, you’ll need to make the CLI executable and move it to the same folder where you’ll work on your plugins. Follow these steps:

    1. Open a terminal window.
    2. Navigate to the folder where you downloaded the CLI.
    3. Run the following commands to make the CLI executable and move it to your desired working folder:

       ```bash
       chmod +x mint-cli
       mv mint-cli ~/Desktop/plugins-mint/
       ```

  Replace `~/Desktop/plugins-mint/` with the path to your desired folder where you'll work on plugins. This ensures the CLI is executable and easy to access within your working environment.


---


## Step 3: Running the CLI for the First Time

Once the CLI is installed and placed in your working directory (e.g., `C:/Users/YourUsername/Desktop/plugins-mint/` on Windows or `~/Desktop/plugins-mint/` on macOS/Linux), follow these steps to run it:

### **Navigating to the Directory**

- **Windows**:
    1. Open Command Prompt (search for "cmd" in the Start menu).
    2. Navigate to the directory where the CLI is located by running:

       ```bash
       cd C:/Users/YourUsername/Desktop/plugins-mint/
       ```

- **macOS/Linux**:
    1. Open Terminal.
    2. Navigate to the directory where the CLI is located by running:

       ```bash
       cd ~/Desktop/plugins-mint/
       ```

### **Running the CLI**
Once you are in the correct directory, run the following command to start the CLI:

```bash
mint-cli plugin
```

### **Creating an API Key File**
- The first time you run the `mint-cli`, it will automatically generate an `api_key.txt` file in the same folder where the CLI is located.
- **Follow these steps to authenticate**:
    1. After launching the CLI, you will be asked to put your API key in the file.
    2. Copy your API key from the OriginMint panel.
    3. Paste it in the file `api_key.txt` file located in the same folder.

### **Installing Dependencies**
- The first time you run the CLI, it will check if all required libraries and dependencies are installed.
- If any libraries are missing, the CLI will automatically install them.
- The libraries are around 1GB in size, so the installation process may take some time depending on your internet speed.

### **Outdated Libraries**
If you have outdated libraries, the CLI will ask you to update them. The command is as follows:

```bash
mint-cli plugin libraries-download
```

---

## Step 5: More Commands

Once the CLI is set up, you can begin using it to interact with the OriginMint platform. Below are some useful commands you can use:

### **Commands:**
- **download**: Download a plugin by ID.
- **list**: List all available plugins.
- **delete**: Delete a specified plugin.
- **upload**: Upload a new plugin.
- **libraries-download**: Download required libraries for plugins.
- **download-template**: Download a plugin template for development.
- **create-empty**: Create an empty plugin structure.
- **help, h**: Shows a list of commands or help for a specific command.

### **Options:**
- **--help, -h**: Show help information for the CLI and its commands.

### **Examples:**
- To download a plugin with a specific ID:\
  Replace `<output_name>` with the desired folder name you want
  it to be placed at in plugins/`<output_name>` and `<plugin_id>`
  with the ID of the plugin you want to download.
  ```bash
  mint-cli plugin download --output <output_name> --id <plugin_id>
  ```
  
- To list all plugins:
  ```bash
  mint-cli list
  ```

- To delete a plugin with a specific ID:\
  Replace `<plugin_id>` with the ID of the plugin you want to delete.
  ```bash
  mint-cli plugin delete --id <plugin_id>
  ```
  
- To upload a new plugin:\
  Replace `<folder>` with the folder containing the plugin files. Located
  in the plugins/`<folder>` directory.
  ```bash
  mint-cli plugin upload --folder <folder>
  ```

- To download a template of existing plugin for development:\
  This can be other people's plugins that are public. Carefully read the code
  of the plugin before using it, as it may contain malicious code.
  Replace `<output_name>` with the desired folder name you want
  it to be placed at in plugins/`<output_name>`. Replace `<plugin_id>`
  with the ID of the plugin you want to create a template of.
  ```bash
  mint-cli plugin download-template --output <output_name> --id <plugin_id>
  ```

- To get help on a specific command:\
  Replace `<command>` with the command you want help with. It can be any of the commands listed above.
  ```bash
  mint-cli plugin <command> -h
  ```

These commands provide a powerful way to manage plugins effectively. For more detailed usage instructions, you can always refer to the help command.