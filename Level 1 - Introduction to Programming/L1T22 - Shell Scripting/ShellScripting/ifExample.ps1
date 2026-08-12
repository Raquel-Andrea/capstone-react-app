if (Test-Path "if_folder") {
    Write-Host  "if_folder already exists"
} else {
    New-Item -ItemType Directory -Name "if_folder"
}
if (Test-Path "if_folder") {
     New-Item -ItemType Directory -Name "hyperionDev"
} else {
     New-Item -ItemType Directory -Name "new-projects"
}