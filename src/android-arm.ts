
import {T,L} from "./types.const";

/*
struct __kernel_timespec {
  __kernel_time64_t tv_sec;
  long long tv_nsec;
};
struct __kernel_itimerspec {
  struct __kernel_timespec it_interval;
  struct __kernel_timespec it_value;
};

https://cs.android.com/android/platform/superproject/+/master:prebuilts/runtime/mainline/runtime/sdk/android/arm64/include/bionic/libc/kernel/uapi/linux/time_types.h?q=__kernel_itimerspec

 */

export default  {
 pollfd: [
  { t:T.INT32, n:"fd", l:L.FD },
  { t:T.SHORT, n:"events" },
  { t:T.SHORT, n:"revents" }
 ],
 /*
 struct __kernel_sock_timeval {
  __s64 tv_sec;
  __s64 tv_usec;
 };
 */
 __kernel_sock_timeval: [
  { t:T.LONG, n:"tv_sec" },
  { t:T.LONG, n:"tv_usec" }
 ],
 /*
 struct __kernel_old_timespec {
  __kernel_old_time_t tv_sec;
  long tv_nsec;
 };
 */
 __kernel_old_timespec: [
  { t:T.LONG, n:"tv_sec" },
  { t:T.LONG, n:"tv_nsec" }
 ],
 /*
  struct __kernel_itimerspec {
    struct __kernel_timespec it_interval;
    struct __kernel_timespec it_value;
  };
  */
 __kernel_itimerspec: [
  { t:T.STRUCT, n:"it_interval", l:L.DSTRUCT, f:"__kernel_timespec" },
  { t:T.STRUCT, n:"it_value", l:L.DSTRUCT, f:"__kernel_timespec" }
 ],
 /*
 type siginfo struct {
	si_signo  int32
	si_errno  int32
	si_code   int32
	si_pid    int32
	si_uid    uint32
	si_status int32
	si_addr   uint64
	si_value  [8]byte
	si_band   int64
	__spare__ [7]int32
	pad_cgo_0 [4]byte
  }
  */
 siginfo: [
  { t:T.INT32, n:"si_signo" },
  { t:T.INT32, n:"si_errno" },
  { t:T.INT32, n:"si_code" },
  { t:T.INT32, n:"si_pid" },
  { t:T.UINT32, n:"si_uid" },
  { t:T.INT32, n:"si_status" },
  { t:T.ULONG, n:"si_addr" },
  { t:T.CHAR, n:"si_value", l:L.BUFFER, len:8 },
  { t:T.LONG, n:"si_band" },
  { t:T.INT32, n:"__spare__", l:L.BUFFER, len:7  },
  { t:T.CHAR, n:"pad_cgo_0", l:L.BUFFER, len:4  }
 ],

 /*
 type siginfo struct {
    daddr_t f_tfree;      // Total free blocks
    ino_t   f_tinode;     // Number of free inodes
    char    f_fname[6];   // Filsys name
    char    f_fpack[6];   // Filsys pack name
 }
 */
 ustat: [
  { t:T.UINT32, n:"f_tfree" },
  { t:T.UINT32, n:"f_tinode" },
  { t:T.CHAR, n:"f_fname", l:L.BUFFER, len:6 },
  { t:T.CHAR, n:"f_fpack", l:L.BUFFER, len:6 }
 ]
}