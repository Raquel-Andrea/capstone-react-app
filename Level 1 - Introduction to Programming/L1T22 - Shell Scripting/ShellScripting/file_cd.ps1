New-Item -ItemType Directory -Name "Folder1"
New-Item -ItemType Directory -Name "Folder2"
New-Item -ItemType Directory -Name "Folder3"

Set-Location "Folder1"

New-Item -ItemType Directory -Name "SubFolder1"
New-Item -ItemType Directory -Name "SubFolder2"
New-Item -ItemType Directory -Name "SubFolder3" 

Set-Location -Path ..

Remove-Item "Folder2"
Remove-Item "Folder3"