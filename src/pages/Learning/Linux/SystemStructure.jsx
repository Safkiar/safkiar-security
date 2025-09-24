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