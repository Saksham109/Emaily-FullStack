#!/bin/bash

# function localtunnel {
#     lt -s julianemailywebhook --port 5000
# }

# until localtunnel; do
#     echo "localtunnel server crashed"
#     sleep 2
# done

# Define the LocalTunnel function
function LocalTunnel {
    # Execute the localtunnel command (using npx if localtunnel is not installed globally)
    npx lt -s julianemailywebhook --port 5000
}

# Try to run the LocalTunnel command until it succeeds
do {
    LocalTunnel
    if ($LASTEXITCODE -ne 0) {
        Write-Host "localtunnel server crashed"
        Start-Sleep -Seconds 2
    }
} until ($LASTEXITCODE -eq 0)
