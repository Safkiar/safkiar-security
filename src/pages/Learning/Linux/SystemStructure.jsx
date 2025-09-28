export default function SystemStructure() {
    return (
        <div class="script_container">

            <div class="introduction">

                <h3>File System Structure</h3>
                <p>/boot - contains file that is used by the boot loader</p>
                <p>/root - root user home directory</p>
                <p>/dev - system devices (disk,cdrom, speakers, flashdrive)</p>
                <p>/etc - configuration files</p>
                <p>/bin - everyday user commands</p>
                <p>/sbin - system/filesystem commands</p>
                <p>/proc - running process - only exist in Memory</p>
                <p>/lib - C programming library files needed by commands and apps</p>
                <p>/tmp - directory for temporary files</p>
                <p>/home - directory for user</p>
                <p>/var - system logs</p>
                <p>/run - system deamons that start very early</p>
                <p>/mnt - to mount external filesystem</p>
                <p>/media - for cdrom mounts</p>

                <h3>Navigating File system</h3>
                <div className="t">cd (directory) - change directory</div>
                <div className="t">cd .. - parent directory</div>
                <div className="t">cd - - previous directory</div>
                <div className="t">pwd - print working directory</div>
                <div className="t">ls - lists all the directories</div>
                <div className="t">ls -l - lists all the directories with properties</div>

                <h3>Two paths to navigate</h3>
                <ul>
                    <li>Absolute Path - always begins with a "/"</li>
                    <li>Relative Path - relative to current position</li>
                </ul>

                <h3>Detail information</h3>

                <div className="tabcontainer">


                    <div className="tab2">
                        <p>Type</p>
                        <p>drwxr-xr-x</p>
                    </div>
                    <p className="tabp">  d for directory, l for link, nothing for text file</p>

                    <div className="tab2">

                        <p># of Links  </p>
                        <p>
                            21
                        </p>
                    </div>
                    <p className="tabp">

                        number of hard links to the file
                    </p>

                    <div className="tab2">
                        <p>
                            Owner
                        </p>
                        <p> root</p>
                    </div>

                    <div className="tab2">

                        <p>Group</p>
                        <p>root</p>
                    </div>

                    <div className="tab2">
                        <p>Size</p>
                        <p> 4096</p>
                    </div>

                    <div className="tab2">
                        <p>
                            Month
                        </p>
                        <p> Feb</p>
                    </div>

                    <div className="tab2">
                        <p>Day</p>
                        <p> 27</p>
                    </div>

                    <div className="tab2">
                        <p>Time</p>
                        <p> 13:33</p>
                    </div>

                    <div className="tab2">
                        <p>Name</p>
                        <p> var</p>
                    </div>
                </div>
                <h3>Creating a file or directory</h3>
                <div className="t">touch (filename) - create a file</div>
                <div className="t">mkdir (filename) - create a directory</div>
                <h3>Copy a file or directory</h3>
                <div className="t">cp (old dir) (new dir) - copy a file</div>
                <div className="t">cp -R (filename) (from location) (to location) - copy a directory with other files</div>
                <h3>Find file or directory</h3>
                <div className="t">find . -name "(file name)" - szukaj w biężącym kataloru po nazwie</div>
                <div className="t">find / -name "(file name)" - szukaj w całym systemie po nazwie</div>
                <div className="t">locate (file name) - szybkie wyszukanie po indeksie  </div>
                <div className="t">updatedb - aktualizacja tabeli, żeby znależć nowy folder przez locate </div>

                <h3>Linux File Types</h3>
                <div className="tabcontainer">


                    <div className="tab2">
                        <p>-</p>
                        <p>Regular file</p>
                    </div>
                    <div className="tab2">

                        <p>d </p>
                        <p>
                            Directory
                        </p>
                    </div>

                    <div className="tab2">
                        <p>
                            l
                        </p>
                        <p> Link</p>
                    </div>

                    <div className="tab2">

                        <p>c</p>
                        <p>Special/Device file</p>
                    </div>

                    <div className="tab2">
                        <p>s</p>
                        <p>Socket</p>
                    </div>

                    <div className="tab2">
                        <p>
                            p
                        </p>
                        <p> Named pipe</p>
                    </div>

                    <div className="tab2">
                        <p>b</p>
                        <p> Block device</p>
                    </div>


                </div>

                <h3>Soft and Hard Links</h3>
                <p>Inode - Pointer or number of a file on the hard disk</p>
                <p>Soft Link - Link will be removed if file is removed or renamed</p>
                <p>Hard Link - Deleting, renaming, original file will not affect the hard link</p>
                <p>*You cannot create soft or hard link within the same directory with the same name</p>
                <div className="t">ln -s (source) (target)  - create a soft link </div>
                <div className="t">ln (source) (target)  - create a hard link </div>

                <h3>
                    File Permissions
                </h3>
                <p>UNIX is a multi-user system. Every file and directory in your account can be protected from or made accessible to
                    other users by changing its access permissions. Every user has responsibility for controlling access to their files
                </p>
                <h4>There are 3 types of permissions</h4>
                <ul>
                    <li>
                        r - read
                    </li>
                    <li>
                        w - write
                    </li>
                    <li>
                        x - execute
                    </li>
                </ul>
                <h4>Each permission (rwx) can be controlled at three levels:</h4>
                <ul>
                    <li>u - user - yourself</li>
                    <li>g - group - can be people in the same project</li>
                    <li>o - other - everyone on the system</li>
                </ul>
                <h4>File or Directory permission can be displayed by running ls -l command</h4>
                <p>-rwxrwxrwx</p>
                <div className="t">ls -l (filename) - lists file with properties</div>
                <div className="t">chmod (u/g/o-r/w/x) (file) - remove permission </div>
                <div className="t">chmod (u/g/o+r/w/x) (file) - add permission </div>
                <div className="t">chmod (u+rwx) (file) - add permissions </div>
                <div className="t">chmod (a-r/w/x) (file) - remove for everyone permission </div>

                     <h4>Permission Using Numeric Mode</h4>
                <p>
                    Number, Permission Type, Symbol -
                    0 No Permission --- |
                    1 Execute --x |
                    2 Write -w- |
                    3 Execute + Write -wx |
                    4 Read r-- |
                    5 Read + Execute -wx |
                    6 Read + Write rwx |
                    7 Read + Write + Execute rwx |
                </p>
                   <div className="t">chmod (0-7/0-7/0-7) (file) - grant permision using numeric mode  </div>

                   <h3>File Ownership</h3>
                   <h4>2 owners of a file or directory</h4>
                   <ul>
                    <li>User and group</li>
                   </ul>
                    <div className="t">chown (user) (file) - changes the ownership of a file  </div>
                    <div className="t">chgrp (user) (file) - changes the group ownership of a file  </div>

                            <h3>ACL - Access Control List</h3>
                <p>Provides an additional, more flexible permission mechanism for file systems. Give permissions for any user or group to 
                    any disc resource</p>
                   <div className="t">  setfacl -m u:(user):rwx (path) - add permision for a user </div>
                      <div className="t">  setfacl -m u:(group):rw (path) - add permision for a group </div>
                       <div className="t">  setfacl -dm "entry" (path) - allow all files to inheritt ACL entries from the dir </div>
                        <div className="t">  setfacl -x u:(user) (path) - remove specific entry </div>
                        <div className="t">  setfacl -b (path) - remove all entries </div>
                  



            </div>

            <div class="alternative">

                <div class="schema">

                </div>


            </div>
            <pre class="script">
            </pre>




        </div>
    );
}