@echo off
setlocal enabledelayedexpansion

set /p "oldName=Enter the current name (default is 'work'): "
if "%oldName%"=="" set "oldName=work"

set /p "newName=Enter the new name (default is 'newWork'): "
if "%newName%"=="" set "newName=newWork"

set /p "preview=Do you want to preview changes? (true/false, default is false): "
if "%preview%"=="" set "preview=false"

rem Run your Node.js script with the provided values.
node own.js %oldName% %newName% %preview%

rem If preview is set to true, ask for confirmation before renaming.
if /i "%preview%"=="true" (
    set /p "renameConfirm=Do you want to rename the files? (yes/no): "
    if "!renameConfirm!"=="yes" (
        rem Run your Node.js script again with preview set to false to perform the renaming.
        node own.js %oldName% %newName% false
    ) else (
        echo Renaming cancelled.
    )
)

pause
