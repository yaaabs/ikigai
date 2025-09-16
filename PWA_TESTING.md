# Testing Your PWA Functionality

Follow these steps to verify that your Progressive Web App is working correctly:

## 1. Check Lighthouse Score

Use Google Chrome's Lighthouse tool to audit your PWA:

1. Open your website in Chrome
2. Right-click and select "Inspect" to open DevTools
3. Click on the "Lighthouse" tab
4. Select "Mobile" device and check the "Progressive Web App" category
5. Click "Generate report" and review the results

Your PWA should score well in these areas:
- Fast and reliable
- Installable
- PWA optimized

## 2. Test Offline Functionality

1. Open your website in Chrome
2. Open DevTools (F12)
3. Go to the "Application" tab
4. In the left sidebar, under "Service Workers", check if your service worker is registered
5. Turn on "Offline" in the "Service Workers" panel
6. Refresh the page - your site should still load with cached content

## 3. Test Installation

### On Desktop:

1. Visit your website in Chrome
2. Look for the install icon in the address bar (it looks like a computer with a down arrow)
3. Click on it to install your PWA
4. Verify it opens as a standalone application

### On Android:

1. Visit your website in Chrome
2. You should see a banner or pop-up saying "Add to Home Screen"
3. Follow the prompts to install
4. Check that the app icon appears on your home screen
5. Open it and verify it launches in standalone mode

### On iOS:

1. Visit your website in Safari
2. Tap the share icon (square with up arrow)
3. Scroll down and tap "Add to Home Screen"
4. Follow the prompts to install
5. Check that the app icon appears on your home screen
6. Open it and verify it opens properly

## 4. Troubleshooting Common Issues

If your PWA isn't working correctly, check these common issues:

### Service Worker Not Registering:
- Make sure the service worker file is in the correct location
- Check the browser console for registration errors
- Verify your SSL certificate if using HTTPS

### PWA Not Installable:
- Ensure your manifest.json has all required fields
- Make sure your favicon.png is of good quality since it's used for all icon sizes
- Check that your service worker is registered properly

### Offline Mode Not Working:
- Verify the cache strategy in your service worker
- Make sure all necessary files are being cached
- Check the network tab in DevTools to see what's being cached

## 5. Advanced Testing

For more thorough testing:

1. Test on multiple devices (desktop, tablet, phones)
2. Test in different network conditions (3G, 4G, offline)
3. Test app updates by changing your service worker version

### Note About Icons

This PWA implementation uses your existing favicon.png for all icon sizes. While this is a simple approach that works, if you notice pixelation or quality issues on certain devices, consider creating dedicated icons of various sizes for better visual quality.