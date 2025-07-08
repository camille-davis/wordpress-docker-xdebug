# Config for local Wordpress development with Docker, XDebug, and VSCode

Development only! Don't use insecure credentials in production.

## Permission issues

Depending on your local environment you may run into issues modifying files on the host using your host user, while maintaining permissions for Apache to modify files via the container. If this is the case:

Get the group name of apache-created files on the host:
```
ls -l
```

Add your host user to the group:
```
sudo usermod -a -G [group name] [host username]
```

Log in and out to apply changes. Check you were added to the group:
```
groups
```

Then add group write (and execute, for directories) permissions to the files:
```
./setGroupPermissions.sh
```

(I encountered this problem on Linux but not on MacOs.)
