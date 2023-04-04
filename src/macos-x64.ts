
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

    stat: [
        { t:T.INT32, n:"st_dev" },/* device inode resides on */
        { t:T.ULONG, n:"st_ino" },/* inode's number */
        { t:T.USHORT, n:"st_mode" },/* inode protection mode */
        { t:T.UINT32, n:"st_nlink" },/* number of hard links to the file */
        { t:T.UINT32, n:"st_uid" },/* user-id of owner */
        { t:T.UINT32, n:"st_gid" },/* group-id of owner */
        { t:T.INT32, n:"st_rdev" },/* device type, for special file inode */
        { t:T.STRUCT, n:"st_atimespec", l:L.DSTRUCT, f:"timespec"  },/* time of last access */
        { t:T.STRUCT, n:"st_mtimespec", l:L.DSTRUCT, f:"timespec" },/* time of last data modification */
        { t:T.STRUCT, n:"st_ctimespec", l:L.DSTRUCT, f:"timespec"  },/* time of last file status change */
        { t:T.LONG, n:"st_size" },/* file size, in bytes */
        { t:T.LONG, n:"st_blocks" },/* blocks allocated for file */
        { t:T.ULONG, n:"st_blksize" },/* optimal file sys I/O ops blocksize */
        { t:T.ULONG, n:"st_flags" },/* user defined flags for file */
        { t:T.ULONG, n:"st_gen" } /* file generation number */
    ],

    // https://opensource.apple.com/source/xnu/xnu-6153.11.26/bsd/sys/event.h.auto.html
    kevents64_s: [
        { t:T.ULONG, n:"ident" }, /* identifier for this event */
        { t:T.SHORT, n:"filter" }, /* filter for event */
        { t:T.USHORT, n:"flags" }, /* general flags */
        { t:T.UINT32, n:"fflags" }, /* filter-specific flags */
        { t:T.LONG, n:"data" }, /* filter-specific data */
        { t:T.ULONG, n:"udata" }, /* opaque user data identifier */
        { t:T.ULONG, n:"ext[2]" }, /* filter-specific extensions */
    ],

    kevent: [
        { t:T.ULONG, n:"ident" }, /* identifier for this event */
        { t:T.SHORT, n:"filter" }, /* filter for event */
        { t:T.USHORT, n:"flags" }, /* general flags */
        { t:T.UINT32, n:"fflags" }, /* filter-specific flags */
        { t:T.LONG, n:"data" }, /* filter-specific data */
        { t:T.POINTER64, n:"udata" }, /* opaque user data identifier */
    ]
}