{ pkgs }: {
  deps = [
    pkgs.wallabag
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server
  ];
}