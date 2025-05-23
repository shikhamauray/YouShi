✅ How to Fix It

1. Completely delete cache and node_modules
   Run this in PowerShell from your project root:

Remove-Item -Recurse -Force node_modules, .parcel-cache, dist
Remove-Item package-lock.json

2. Reinstall dependencies

npm install

3. Start Parcel again

npx parcel src/index.html
