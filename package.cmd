pushd %~dp0
call ng build
tfx extension create --manifest-globs %~dp0vss-extension.json --output-path %~dp0bin\Debug

popd
