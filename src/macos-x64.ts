
import {T,L} from "./types.const";

export default  {
    /*
    struct _copyfile_state
    {
        char *src;
        char *dst;
        int src_fd;
        int dst_fd;
        struct stat sb;
        filesec_t fsec;
        copyfile_flags_t flags;
        void *stats;
        uint32_t debug;
    };
    https://opensource.apple.com/source/Libc/Libc-391/darwin/copyfile.c.auto.html
     */
    _copyfile_state: [
        { t:T.STRING, n:"src" },
        { t:T.STRING, n:"dst" },
        { t:T.INT32, n:"src_fd" },
        { t:T.INT32, n:"dst_fd" },
        { t:T.STRUCT, n:"sb", l:L.DSTRUCT, f:"stat" },
        { t:T.INT32, n:"filesec", l:L.FLAG, f:"COPYFILE_FLAGS" },
        { t:T.UINT32, n:"flags", l:L.FLAG, f:"COPYFILE_FLAGS" },
        { t:T.POINTER64, n:"stats" },
        { t:T.UINT32, n:"debug" },
    ],

}