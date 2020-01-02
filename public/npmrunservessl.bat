SET mypath=%~dp0
echo %mypath:~0,-1%
CD /D %mypath%
call npm run servessl