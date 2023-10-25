@echo off
setlocal enabledelayedexpansion

set /p "oldName=Enter the current name (default is 'work'): "
if "%oldName%"=="" set "oldName=work"

set /p "newName=Enter the new name (default is 'newWork'): "
if "%newName%"=="" set "newName=newWork"

set /p "preview=Do you want to preview changes? (true/false, default is false): "
if "%preview%"=="" set "preview=false"

set /p "directory= Enter the directory (default is __dirname): "
if "%directory%"=="" set "directory=__dirname"

rem Run your Node.js script with the provided values.
node main.js %oldName% %newName% %preview% %directory%

rem If preview is set to true, ask for confirmation before renaming.
if /i "%preview%"=="true" (
    set /p "renameConfirm=Do you want to rename the files? (yes/no): "
    if "!renameConfirm!"=="yes" (
        rem Run your Node.js script again with preview set to false to perform the renaming.
        node main.js %oldName% %newName% false %directory%
    ) else (
        echo Renaming cancelled.
    )
)

pause
