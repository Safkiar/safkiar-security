export default function LinuxCommands() {
    return (
        <div class="script_container">

            <div class="introduction">
                <h2>General information about linux system</h2>
                <p>root - super-user accout that can create, modify, delete accounts and make changes to system configuration file</p>
                <h3>3 types of root on Linux</h3>
                <ul>
                    <li>Root Account  - access to all commands and files</li>
                    <li>Root as /: - first directory in Linux</li>
                    <li>Root as /root - root home directory  </li>
                </ul>
                <p>Linux is case-sensitive system</p>
                <p>Linux kernel is not an operating system. It is small software within Linux that pass them to system hardware</p>
                <p>Linux is mostly CLI not GUI</p>
                <h3> 2 types of access to Linux system</h3>
                <ul>
                    <li>Console (direct access)</li>
                    <li>Remote  </li>
                </ul>
                <p>For windows 10 you can use in command "ssh -l (user name) (IP address)" to connect</p>
                <h3>User settings</h3>
                <h4>How to change password?</h4>
                <div className="t">passwd - change current user password</div>
                <div className="t">passwd (userid) - change selected user password</div>
                <h3>WildCards</h3>
                <p>character that can be used as a substitute for any of a class of characters in search</p>
                <ul>
                    <li>* - zero or more char</li>
                    <li>? - single char</li>
                    <li>{ } - range of char</li>
                </ul>
                <div className="t">touch (filename){"{1..9}"}(filename) - create 9 files</div>
                <div className="t">rm *xy* - remove files with xy</div>
                <h4>Help commands</h4>
                <div className="t">whatis (command) - help command</div>
                <div className="t">(command) --help - help command</div>
                <div className="t">man (command) - help command</div>

                <h4>Adding text fo files</h4>
                <p>VI</p>
                <p>redirect command output {'>'} or {'>>'}</p>
                <p>echo {'>'} or {'>>'}</p>
                <p> {'>'} - overwrite </p>
                <p>{'>>'} - add txt</p>

                <div className="t">echo (txt) {'>'} (filename) - write in file</div>
                <div className="t">cat (filename) - read file</div>

                <h4>3 redirects in Linux</h4>
                <p>stdin - standard input - 0</p>
                <p>stdout - standard output - 1</p>
                <p>stderr - standard error - 2</p>

                <div className="t">(command) {'>'} (filename) - save output in file</div>
                <div className="t">(command) {'>>'} (filename) - save additional output in file</div>

                <h4>tee</h4>
                <div className="t">(command) | tee (filename) (filename2) - run a command for multiple files </div>
                <h4>
                    pipe is used by shell to connect the outpot of command directly to input of another command
                </h4>
                <div className="t">(command1) | (command2)</div>
                <h4>execute multiple commands</h4>
                <div className="t">(command1) ; (command2) - execute multiple commands</div>
                <h4>File maintaenace commands</h4>

                <div className="t"> cp (file_source) (file_destination) - copy files and directories</div>
                <div className="t"> rm (file) - remove file</div>
                <div className="t"> mv (file) (new_file_name) - change file name</div>
                <div className="t"> mv (file) (/location) - change location of file</div>

                <div className="t"> mkdirrmdir (file) - create a dir</div>
                <div className="t"> rm -r (file/) - remove a dir</div>

                <div className="t"> rm -Rf (file/) - remove a dir with content forcefully</div>

                <div className="t"> chgr (group) (file) - change ownership of file</div>

                <div className="t"> chown (owner) (file) - change owner of a file </div>

                <h4>File Display Commands</h4>

                <div className="t"> cat (file) - show content of the file </div>
                <div className="t"> more (file) - show content in percentages  </div>
                <div className="t"> less (file) - show one line at the time </div>
                <div className="t"> head (-num) (files) - show numer of specified lines from start </div>
                <div className="t"> tail (-num) (files) - show number of specified lines from end </div>

                <h4>Text processors Commands</h4>
                <div className="t"> cut </div>
                <div className="t"> awk </div>
                <div className="t"> grep </div>
                <div className="t"> egrep </div>
                <div className="t"> sort </div>
                <div className="t"> uniq </div>
                <div className="t"> wc </div>












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