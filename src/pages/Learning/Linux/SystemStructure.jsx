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


                <h3>Detail information</h3>

                <div className="tab2">
                <p>Type</p>
                <p>drwxr-xr-x</p>
                </div>
                <p>  d for directory, l for link, nothing for text file</p>
                <p># of Links - 21, number of hard links to the file </p>
                <p>Owner - root</p>
                <p>Group - root</p>
                <p>Size - 4096</p>
                <p>Month - Feb</p>
                <p>Day - 27</p>
                <p>Time - 13:33</p>
                <p>Name - var</p>
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