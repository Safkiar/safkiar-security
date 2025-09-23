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