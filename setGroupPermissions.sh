#!/bin/bash
echo "Setting +w on all files and +wx on all directories."
echo "Don't use in prod!"

# Set all files and directories to be writable by group.
sudo find . -type f -exec chmod g+w {} \;
sudo find . -type d -exec chmod g+wx {} \;
