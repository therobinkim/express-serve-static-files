## General Instructions

1. `git clone https://github.com/therobinkim/express-serve-static-files.git`
2. `cd express-server-static-files`
3. `cd original` or `cd alternate`
4. `npm install`
5. `npm start`
6. Open http://localhost:8080/public.html and http://localhost:8080/static.html; if the text appears in two different colors, then all of the static assets are being loaded correctly. (You can also open your DevTools to check for the JavaScript `console.log` statements.)
7. When you switch between the original and alternate implementations, make sure you shut down your `npm start` script from the implementation you were just looking at.

## Directory Structure

![directory structure of original vs alternate implementations](https://github.com/therobinkim/express-serve-static-files/blob/master/directory-structure.png)

This repo was created to help support my StackOverflow answer at https://stackoverflow.com/a/48298000/3814251.