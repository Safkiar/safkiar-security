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