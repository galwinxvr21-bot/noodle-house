@echo off
cd /d "%~dp0\.."
if not exist ".next\" (
  echo Run scripts\build.bat first.
  exit /b 1
)
echo Starting production server at http://localhost:3000
call npm.cmd run start
